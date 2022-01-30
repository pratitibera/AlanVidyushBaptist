var service_to_be_edited;
var editservice_level;

function editMainServices(){
	editservice_level = 0;
	var request = new XMLHttpRequest();
	request.open(urlSet.getMainServiceApi.method, urlSet.getMainServiceApi.url + '?level=' + editservice_level, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var editMainServicesData = document.getElementById('editMainServicesData');
		editMainServicesData.innerHTML = "";
		for(i = 0; i < data.length; i++){
			editMainServicesData.innerHTML += `<tr>
                        <td>${data[i]['service']}</td>
                        <td class="text-center">
                           <button class="btn btn-dark" id="editMainServ_${data[i]['_id']}" onclick="triggerServiceEditModal(this.id)">EDIT</button>
                        </td>
                        <td class="text-center">
                           <button class="btn btn-dark" id="deleteMainServ_${data[i]['_id']}" onclick="deleteService(this.id)">DELETE</button>
                        </td>
                     </tr>`;
            document.getElementById('editMainServicesTable').style.display = "block";
		}
	}
}

function editServices(){
	editservice_level = 1;
	var request = new XMLHttpRequest();
	request.open(urlSet.getMainServiceApi.method, urlSet.getMainServiceApi.url + '?level=' + editservice_level, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var editServicesData = document.getElementById('editServicesData');
		editServicesData.innerHTML = "";
		for(i = 0; i < data.length; i++){
			editServicesData.innerHTML += `<tr>
                        <td>${data[i]['service']}</td>
                        <td class="text-center">
                           <button class="btn btn-dark" id="editServ_${data[i]['_id']}" onclick="triggerServiceEditModal(this.id)">EDIT</button>
                        </td>
                        <td class="text-center">
                           <button class="btn btn-dark" id="deleteServ_${data[i]['_id']}" onclick="deleteService(this.id)">DELETE</button>
                        </td>
                     </tr>`;
            document.getElementById('editServicesTable').style.display = "block";
		}
	}
}

function editSubservices(){
	editservice_level = 2;
	var request = new XMLHttpRequest();
	request.open(urlSet.getMainServiceApi.method, urlSet.getMainServiceApi.url + '?level=' + editservice_level, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var editSubservicesData = document.getElementById('editSubservicesData');
		editSubservicesData.innerHTML = "";
		for(i = 0; i < data.length; i++){
			editSubservicesData.innerHTML += `<tr>
                        <td>${data[i]['service']}</td>
                        <td class="text-center">
                           <button class="btn btn-dark" id="editSubserv_${data[i]['_id']}" onclick="triggerServiceEditModal(this.id)">EDIT</button>
                        </td>
                        <td class="text-center">
                           <button class="btn btn-dark" id="deleteSubserv_${data[i]['_id']}" onclick="deleteService(this.id)">DELETE</button>
                        </td>
                     </tr>`;
            document.getElementById('editSubservicesTable').style.display = "block";
		}
	}
}

function deleteService(id) {
	var request = new XMLHttpRequest();
	request.open(urlSet.deleteServiceApi.method, urlSet.deleteServiceApi.url + id.split('_')[1], true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify());
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['message'] == "Service Deleted"){
			alert("Service Deleted");
			location.reload();
		}
		else{
			alert("Could not delete service");
		}
	}
	
}

function triggerServiceEditModal(id){
	service_to_be_edited = id.split('_')[1];
	$("#editServicesModal").modal();
}

function editServicesSave(){
	var new_service = document.getElementById('editServicesInput').value;
	var servicesDesc = document.getElementById('editServicesDesc').value;
	var servicesCover = document.getElementById('editServicesCover').value;
	var servicesHover = document.getElementById('editServicesHover').value;

	var json = {
		"service": new_service
	}
	console.log(json);
	var request = new XMLHttpRequest();
	request.open(urlSet.editServicesApi.method, urlSet.editServicesApi.url + service_to_be_edited, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['message'] == "Service Updated"){
			$("#editServicesModal").modal('hide');
			alert("Service Updated");
			location.reload();
			// getPlanServices();
			// if(editservice_level == 0){
			// 	editMainServices();
			// }
			// else if(editservice_level == 1){
			// 	editServices();
			// }
			// else{
			// 	editSubservices();
			// }
		}
		else{
			alert("Could not update service");
		}
	}
}