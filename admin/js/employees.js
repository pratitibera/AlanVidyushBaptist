function addCoaches(){
   var coach_name = document.getElementById('coach_name').value;
   var coach_desc = document.getElementById('coach_desc').value;
   var coach_image = document.getElementById('coach_image').value;
   
   document.getElementById('addCoachButton').setAttribute('disabled', true);

   var json = {
      "name": coach_name,
      "email": "",
      "role": "coach",
      "phone": "",
      "image": coach_image
   }
   console.log(json);
   var request = new XMLHttpRequest();
   request.open(urlSet.addEmployeesApi.method, urlSet.addEmployeesApi.url, true);
   request.setRequestHeader("Content-Type", "application/json");
   request.setRequestHeader("authorization", authtoken);
   request.send(JSON.stringify(json));
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      document.getElementById('addMainServiceButton').setAttribute('disabled', false);
      if (data['message'] == "Employee Created!") {
         alert("Coach successfully added");
      } else {
         alert("Could not add coach");
      }
   }
}
































function addDoctors(){
   var coach_name = document.getElementById('doctor_name').value;
   var coach_desc = document.getElementById('doctor_desc').value;
   var coach_image = document.getElementById('doctor_image').value;
   
   document.getElementById('addDoctorButton').setAttribute('disabled', true);

   var json = {
      "name": coach_name,
      "email": "",
      "role": "doctor",
      "phone": "",
      "image": coach_image
   }
   console.log(json);
   var request = new XMLHttpRequest();
   request.open(urlSet.addEmployeesApi.method, urlSet.addEmployeesApi.url, true);
   request.setRequestHeader("Content-Type", "application/json");
   request.setRequestHeader("authorization", authtoken);
   request.send(JSON.stringify(json));
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      document.getElementById('addMainServiceButton').setAttribute('disabled', false);
      if (data['message'] == "Employee Created!") {
         alert("Doctor successfully added");
      } else {
         alert("Could not add doctor");
      }
   }
}





function addInterns(){
   var coach_name = document.getElementById('intern_name').value;
   var coach_desc = document.getElementById('intern_desc').value;
   var coach_image = document.getElementById('intern_image').value;
   
   document.getElementById('addInternButton').setAttribute('disabled', true);

   var json = {
      "name": coach_name,
      "email": "",
      "role": "intern",
      "phone": "",
      "image": coach_image
   }
   console.log(json);
   var request = new XMLHttpRequest();
   request.open(urlSet.addEmployeesApi.method, urlSet.addEmployeesApi.url, true);
   request.setRequestHeader("Content-Type", "application/json");
   request.setRequestHeader("authorization", authtoken);
   request.send(JSON.stringify(json));
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      document.getElementById('addMainServiceButton').setAttribute('disabled', false);
      if (data['message'] == "Employee Created!") {
         alert("Intern successfully added");
      } else {
         alert("Could not add intern");
      }
   }
}

















function viewEmployees(type1) {
   var request = new XMLHttpRequest();
   request.open(urlSet.viewEmployeesApi.method, urlSet.viewEmployeesApi.url, true);
   request.setRequestHeader("Accept", "application/json");
   request.send();
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      if(type1 == 'coach'){
         var employees_list = document.getElementById('coaches_list');
         employees_list.innerHTML = "";
      }
      else if(type1 == 'doctor'){
         var employees_list = document.getElementById('doctors_list');
         employees_list.innerHTML = "";
      }
      else{
         var employees_list = document.getElementById('interns_list');
         employees_list.innerHTML = "";
      }

      for(i = 0; i < data.length; i++){

         if(data[i]['role'] == type1){
            var img = document.createElement('img');
            img.src = data[i]['image'];
            img.setAttribute('class', 'w-100');

            var td1 = document.createElement('td');
            td1.append(img);

            var td2 = document.createElement('td');
            td2.append(data[i]['name']);

            var td3 = document.createElement('td');
            td3.append(data[i]['description']);

            var td4 = document.createElement('td');
            td4.innerHTML = `<button class="btn btn-dark" id="editEmployees_${data[i]['_id']}" onclick="triggerEditEmployee(this.id, '${type1}');">EDIT</button>`;

            var td5 = document.createElement('td');
            td5.innerHTML = `<button class="btn btn-dark" onclick="deleteHandler(this.id);" id="deleteEmployees_${type1}_${data[i]['_id']}">DELETE</button>`;

            var tr = document.createElement('tr');
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);

            employees_list.append(tr);
         }
      }
   }
}







function deleteEmployees(id){
   id = id.id;
   var request = new XMLHttpRequest();
   request.open(urlSet.deleteEmployeesApi.method, urlSet.deleteEmployeesApi.url + id.split('_')[2], true);
   request.setRequestHeader("Accept", "application/json");
   request.setRequestHeader("authorization", authtoken);
   request.send();
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      $('#confirmDeletion').modal('hide');
      if(data['message'] == "Employee Deleted"){
         if(id.split('_')[1] == 'coach'){
            alert("Coach has been deleted.");
         }
         else if(id.split('_')[1] == 'Doctor'){
            alert("Doctor has been deleted.");
         }
         else{
            alert("Intern has been deleted.");
         }
         viewEmployees(id.split('_')[1]);
      }
      else{
         alert("Could not delete this coach.");
      }
   }
}





function triggerEditEmployee(id1, id2) {
   $("#editEmployeesModal").modal();
   employee_to_be_edited = id1.split('_')[1];

   employeetype_to_be_edited = id2;
   console.log(employeetype_to_be_edited);

   var request = new XMLHttpRequest();
   request.open(urlSet.getEmployeesApi.method, urlSet.getEmployeesApi.url + employee_to_be_edited, true);
   request.setRequestHeader("Content-Type", "application/json");
   request.send();
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      document.getElementById('employee_name').value = data['name'];
      //document.getElementById('employee_desc').value = data['description'][1];
      document.getElementById('employee_image').value = data['image'];
   }
}

function editEmployees() {
   var json = {
      "name": document.getElementById('employee_name').value,
      "email": "",
      "role": employeetype_to_be_edited,
      "phone": "",
      "image": document.getElementById('employee_image').value,
      "description": document.getElementById('employee_desc').value
   }
   console.log(json);
   var request = new XMLHttpRequest();
   request.open(urlSet.editEmployeesApi.method, urlSet.editEmployeesApi.url + employee_to_be_edited, true);
   request.setRequestHeader("Content-Type", "application/json");
   request.setRequestHeader("authorization", authtoken);
   request.send(JSON.stringify(json));
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      $('#confirmEditing').modal('hide');
      if(data['message'] == "Employee Updated"){
         alert("Details Updated")
         $('#editEmployeesModal').modal('hide');
         viewCoaches();
      }
      else{
         alert("Could not update details");
      }
   }
}
