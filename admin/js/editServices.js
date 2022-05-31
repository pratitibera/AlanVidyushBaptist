var service_to_be_edited;
var servicetype_to_be_edited;
var editServiceData;

function editMainServices(){
	var request = new XMLHttpRequest();
	request.open(urlSet.getMainServiceApi.method, urlSet.getMainServiceApi.url + '?level=0', true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var editMainServicesData = document.getElementById('editMainServicesData');
		editMainServicesData.innerHTML = "";
		for(i = 0; i < data.length; i++){
			editMainServicesData.innerHTML += `<tr>
			               <td>${data[i]['sequence']}</td>
                        <td>${data[i]['service']}</td>
                        <td class="text-center">
                           <button class="btn btn-dark" id="editMainServ_${data[i]['_id']}_${data[i]['service']}" onclick="triggerServiceEditModal(this.id)">EDIT</button>
                        </td>
                        <td class="text-center">
                           <button class="btn btn-dark" id="deleteMainServ_${data[i]['_id']}" onclick="deleteService(this.id)">DELETE</button>
                        </td>
                     </tr>`;
            document.getElementById('editMainServicesTable').style.display = "block";
		}
	}
}

function editServices(param1){
	if(param1 == 'service'){
		mainService = document.getElementById('selected_main_service5').value;
	}
	else{
		mainService = document.getElementById('selected_main_service6').value;
	}
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + mainService, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		editServiceData = data;
		if(param1 == 'service'){
			if(data['subservices'].length == 0){
				alert("This service has no subservices");
			}
			else{
				var editServicesData = document.getElementById('editServicesData');
				editServicesData.innerHTML = "";
				for(i = 0; i < data['subservices'].length; i++){
					editServicesData.innerHTML += `<tr>
					               <td>${data['subservices'][i]['sequence']}</td>
		                        <td>${data['subservices'][i]['service']}</td>
		                        <td class="text-center">
		                           <button class="btn btn-dark" id="editServ_${data['subservices'][i]['_id']}_${data['subservices'][i]['service']}" onclick="triggerServiceEditModal(this.id)">EDIT</button>
		                        </td>
		                        <td class="text-center">
		                           <button class="btn btn-dark" id="deleteServ_${data['subservices'][i]['_id']}" onclick="deleteService(this.id)">DELETE</button>
		                        </td>
		                     </tr>`;
		            document.getElementById('editServicesTable').style.display = "block";
				}
			}
		}
		else{
			var selected_service = document.getElementById('selected_servicee');
			selected_service.innerHTML = "";
			console.log(data);
			for (i = 0; i < data['subservices'].length; i++) {
				selected_service.innerHTML += `<option value="editsub_${data['subservices'][i]['_id']}">${data['subservices'][i]['service']}</option>`;
			}
			editSubservices();
		}
	}
}

function editSubservices(){
	var selected_service_value = document.getElementById('selected_servicee').value;
	var data_sub = selected_service_value.split('_')[1];
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + data_sub, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['subservices'].length > 0){
			var editSubservicesData = document.getElementById('editSubservicesData');
			editSubservicesData.innerHTML = "";
			for(i = 0; i < data['subservices'].length; i++){
				editSubservicesData.innerHTML += `<tr>
				               <td>${data['subservices'][i]['sequence']}</td>
	                        <td>${data['subservices'][i]['service']}</td>
	                        <td class="text-center">
	                           <button class="btn btn-dark" id="editSubserv_${data['subservices'][i]['_id']}_${data['subservices'][i]['service']}" onclick="triggerServiceEditModal(this.id)">EDIT</button>
	                        </td>
	                        <td class="text-center">
	                           <button class="btn btn-dark" id="deleteSubserv_${data['subservices'][i]['_id']}" onclick="deleteService(this.id)">DELETE</button>
	                        </td>
	                     </tr>`;

	            document.getElementById('editSubservicesTable').style.display = "block";
			}
		}
		else{
			alert("No subservices available");
			document.getElementById('editSubservicesTable').style.display = "none";
			// document.getElementById('editSubservicesTable').innerHTML = '';
		}
	}
}

function deleteService(id) {
	var request = new XMLHttpRequest();
	request.open(urlSet.deleteServiceApi.method, urlSet.deleteServiceApi.url + id.split('_')[1], true);
	request.setRequestHeader("authorization", authtoken);
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['message'] == "Service Deleted"){
			alert("Service Deleted");
			if(id.split('_')[0] == "deleteMainServ"){
				editMainServices();
			}
			else if(id.split('_')[0] == "deleteServ"){
				editServices('service');
			}
			else{
				editSubservices();
			}
		}
		else{
			alert("Could not delete service");
		}
	}
	
}

function triggerServiceEditModal(id){
	$("#editServicesModal").modal();
	service_to_be_edited = id.split('_')[1];

	servicetype_to_be_edited = id.split('_')[0];
	if(servicetype_to_be_edited == "editMainServ"){
		servicetype_to_be_edited = 0;
	}
	else if(servicetype_to_be_edited == "editServ"){
		servicetype_to_be_edited = 1;
	}
	else{
		servicetype_to_be_edited = 2;
	}

	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + id.split('_')[1], true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		document.getElementById('editServicesInput').value = data['service'];
		document.getElementById('editServicesDesc').value = data['description'];
		document.getElementById('editServicesCover').value = data['service_image'][0];
		document.getElementById('editServicesHover').value = data['service_image'][1];
		document.getElementById('editServiceSequence').value = data['sequence'];
	}
}

function editServicesSave(){
	var new_service = document.getElementById('editServicesInput').value;
	var servicesDesc = document.getElementById('editServicesDesc').value;
	var servicesCover = document.getElementById('editServicesCover').value;
	var servicesHover = document.getElementById('editServicesHover').value;
	var servicesSequence = document.getElementById('editServiceSequence').value;

	if(servicesSequence == ''){
		var json = {
			"service": new_service,
			"service_image": [servicesCover, servicesHover],
			"description": servicesDesc,
			"level": parseInt(servicetype_to_be_edited),
			"subservices": [],
			"offers": []
		}
	}
	else{
		var json = {
			"service": new_service,
			"service_image": [servicesCover, servicesHover],
			"description": servicesDesc,
			"level": parseInt(servicetype_to_be_edited),
			"subservices": [],
			"offers": [],
			"sequence": servicesSequence
		}
	}
	console.log(json);
	var request = new XMLHttpRequest();
	request.open(urlSet.editServicesApi.method, urlSet.editServicesApi.url + service_to_be_edited, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.setRequestHeader("authorization", authtoken);
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['message'] == "Service Updated"){
			$("#editServicesModal").modal('hide');
			alert("Service Updated");
			if(servicetype_to_be_edited == 0){
				editMainServices();
			}
			else if(servicetype_to_be_edited == 1){
				editServices('service');
			}
			else{
				editSubservices();
			}
		}
		else{
			alert("Could not update service");
		}
	}
}