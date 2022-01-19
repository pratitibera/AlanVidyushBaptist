// To add main services
function addMainService() {
	var mainService = document.getElementById('main_service').value;
	var json = {
		"service": mainService,
		"level": 0,
		"subservices": [],
		"offers": []
	}
	console.log(json);
	var request = new XMLHttpRequest();
	request.open(urlSet.addServiceApi.method, urlSet.addServiceApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		document.getElementById('main_service').value = "";
		if (data['service'] != undefined) {
			alert("Main Service successfully added");
			getAllServices();
		} else {
			alert("Could not add main service");
		}
	}
}

// To add service
function addService() {
	var mainService = document.getElementById('selected_main_service').value;
	var service = document.getElementById('service').value;
	if (service != '') {
		var json = {
			"service": mainService,
			"level": 1,
			"subservices": [service],
			"offers": []
		}
		console.log(json);
		var request = new XMLHttpRequest();
		request.open(urlSet.addServiceApi.method, urlSet.addServiceApi.url, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(json));
		request.onload = function () {
			var data = JSON.parse(this.response);
			console.log(data);
			document.getElementById('service').value = "";
			if (data['service'] != undefined) {
				alert("Service successfully added");
			} else {
				alert("Could not add service");
			}
		}
	} else {
		alert("Enter service");
	}
}

// To get services under selected main service
function getServices() {
	var mainService = document.getElementById('selected_main_service2').value;
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + mainService, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if (data['offers'].length > 0) {
			alert("This service already has some plans");
		} else {
			if (data['subservices'].length > 0) {
				document.getElementById('addSubservicesForm').innerHTML = `<div class="form-group">
	               <label>Choose service:</label>
	               <select class="form-control" id="selected_service"></select>
	            </div>
	            <div class="form-group">
	               <label>Enter sub-service name:</label>
	               <input type="text" class="form-control" id="subservice">
	            </div> 
	            <div class="text-center mt-5 mb-5">
	               <button class="btn btn-dark w-25" onclick="addSubservice();">ADD SUB-SERVICE</button>
	            </div>`;

				var selected_service = document.getElementById('selected_service');
				selected_service.innerHTML = "";
				for (i = 0; i < data['subservices'].length; i++) {
					selected_service.innerHTML += `<option value="${data['subservices'][i]['service']}">${data['subservices'][i]['service']}</option>`;
				}
			} else {
				alert("First enter a service under this main service");
			}
		}
	}
}

// Add a subservice
function addSubservice() {
	var mainService = document.getElementById('selected_main_service2').value;
	var selected_service = document.getElementById('selected_service').value;
	var subservice = document.getElementById('subservice').value;
	if (selected_service != '') {
		if (subservice != '') {
			var json = {
				"service": selected_service,
				"level": 2,
				"subservices": [subservice],
				"offers": []
			}
			console.log(json);
			var request = new XMLHttpRequest();
			request.open(urlSet.addServiceApi.method, urlSet.addServiceApi.url, true);
			request.setRequestHeader("Content-Type", "application/json");
			request.send(JSON.stringify(json));
			request.onload = function () {
				var data = JSON.parse(this.response);
				console.log(data);
				document.getElementById('subservice').value = "";
				if (data['service'] != undefined) {
					alert("Subservice successfully added");
				} else {
					alert("Could not add subservice");
				}
			}
		} else {
			alert("Enter a subservice");
		}
	} else {
		alert("Enter a service for this main service first");
	}
}