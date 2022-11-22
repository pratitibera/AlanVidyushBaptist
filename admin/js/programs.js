function viewProgramReaches(){
	var request = new XMLHttpRequest();
	request.open(urlSet.viewProgramsApi.method, urlSet.viewProgramsApi.url, true);
	request.setRequestHeader("Accept", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var reaches_list = document.getElementById('reaches_list');
		reaches_list.innerHTML = "";

		for(i = data.length - 1; i >= 0; i--){
			var istDate = new Date(data[i]['createdAt']).toLocaleString(undefined, {
				timeZone: 'Asia/Kolkata'
			});
			var td1 = document.createElement('td');
			td1.append(istDate);
			
			var td2 = document.createElement('td');
			td2.append(data[i]['name']);

			var td3 = document.createElement('td');
			td3.append(data[i]['phone']);

			var td4 = document.createElement('td');
			td4.append(data[i]['email']);

			if(data[i]['message'] != undefined){
				var td5 = document.createElement('td');
				td5.append(data[i]['message']);
			}
			else{
				var td5 = document.createElement('td');
			}

			var td6 = document.createElement('td');
			td6.append(data[i]['gender']);

			var td7 = document.createElement('td');
			td7.append(data[i]['age_group']);

			var td8 = document.createElement('td');
			td8.append(data[i]['height'] + " cm");

			var td9 = document.createElement('td');
			td9.append(data[i]['weight'] + " Kg");

			var td10 = document.createElement('td');
			td10.append(data[i]['activity']);

			var td11 = document.createElement('td');
			td11.append(data[i]['goal']);

			// var td12 = document.createElement('td');
   //          td12.innerHTML = `<button class="btn btn-dark" id="editReaches_${data[i]['_id']}" onclick="triggerEditReaches(this.id);">EDIT</button>`;

            var td13 = document.createElement('td');
            td13.innerHTML = `<button class="btn btn-dark" onclick="deleteHandler(this.id);" id="deleteReaches_${data[i]['_id']}">DELETE</button>`;

            var tr = document.createElement('tr');
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);
            tr.append(td7);
            tr.append(td8);
            tr.append(td9);
            tr.append(td10);
            tr.append(td11);
            // tr.append(td12);
            tr.append(td13);

			reaches_list.append(tr);
      }
	}
}


function deleteReaches(id){
   id = id.id;
   var request = new XMLHttpRequest();
   request.open(urlSet.deleteProgramsApi.method, urlSet.deleteProgramsApi.url + id.split('_')[1], true);
   request.setRequestHeader("Accept", "application/json");
   request.setRequestHeader("authorization", authtoken);
   request.send();
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      $('#confirmDeletion').modal('hide');
      if(data['message'] == "Program Reach Deleted"){
         alert("Program Reach Deleted.");
         viewProgramReaches();
      }
      else{
         alert("Could not delete program reach.");
      }
   }
}






// function triggerEditReaches(id1) {
//    $("#editReachesModal").modal();
//    reaches_to_be_edited = id1.split('_')[1];

//    var request = new XMLHttpRequest();
//    request.open(urlSet.viewProgramsApi.method, urlSet.viewProgramsApi.url + reaches_to_be_edited, true);
//    request.setRequestHeader("Content-Type", "application/json");
//    request.send();
//    request.onload = function () {
//       var data = JSON.parse(this.response);
//       console.log(data);
//       document.getElementById('employee_name').value = data['name'];
//       //document.getElementById('employee_desc').value = data['description'][1];
//       document.getElementById('employee_image').value = data['image'];
//    }
// }

// function editEmployees() {
//    var json = {
//       "name": document.getElementById('employee_name').value,
//       "email": "",
//       "role": employeetype_to_be_edited,
//       "phone": "",
//       "image": document.getElementById('employee_image').value,
//       "description": document.getElementById('employee_desc').value
//    }
//    console.log(json);
//    var request = new XMLHttpRequest();
//    request.open(urlSet.editEmployeesApi.method, urlSet.editEmployeesApi.url + employee_to_be_edited, true);
//    request.setRequestHeader("Content-Type", "application/json");
//    request.setRequestHeader("authorization", authtoken);
//    request.send(JSON.stringify(json));
//    request.onload = function () {
//       var data = JSON.parse(this.response);
//       console.log(data);
//       $('#confirmEditing').modal('hide');
//       if(data['message'] == "Employee Updated"){
//          alert("Details Updated")
//          $('#editEmployeesModal').modal('hide');
//          viewCoaches();
//       }
//       else{
//          alert("Could not update details");
//       }
//    }
// }
