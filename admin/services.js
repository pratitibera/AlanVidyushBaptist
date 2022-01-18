var planfeature_list = [];
var subservice_list = [];

// Plan features
function display_plan_features() {
	document.getElementById('planfeaturelist').innerHTML = "";
	document.getElementById('planfeature').value = "";
	for (i = 0; i < planfeature_list.length; i++) {
		document.getElementById('planfeaturelist').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">${planfeature_list[i]}<span class="ml-3 cursor-pointer" id="planFeature_${i}" onclick="removePlanFeature(this.id)">x</span></div>`;

	}
}

function addplanfeature() {
	var planfeature = document.getElementById('planfeature').value;
	planfeature_list.push(planfeature);
	display_plan_features();
}

function removePlanFeature(id) {
	var id = parseInt(id.split('_')[1]);
	planfeature_list.splice(id, 1);
	display_plan_features();
}


// Array of subservices

function display_subservices() {
	document.getElementById('subserviceids').innerHTML = "";
	document.getElementById('subservice').value = "";
	for (i = 0; i < subservice_list.length; i++) {
		document.getElementById('subserviceids').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">${subservice_list[i]}<span class="ml-3 cursor-pointer" id="subservice_${i}" onclick="removesubservice(this.id)">x</span></div>`;

	}
}

function addsubservice() {
	var subservice = document.getElementById('subservice').value;
	subservice_list.push(subservice);
	display_subservices();
}

function removesubservice(id) {
	var id = parseInt(id.split('_')[1]);
	subservice_list.splice(id, 1);
	display_subservices();
}


// Adding service

function addService() {
	var service = document.getElementById('servicelist').value;

	var root = document.getElementById('rootservice').value;
	if (root == 0) {
		root = false;
	} else {
		root = true;
	}

	var duration = document.getElementById('duration').value;
	var actual_price = document.getElementById('actual_price').value;
	var discounted_price = document.getElementById('discounted_price').value;
	var recommendation = document.getElementById('recommendation').value;
	if (recommendation == 0) {
		recommendation = false;
	} else {
		recommendation = true;
	}

	if (service != "" && duration != '' && actual_price != '') {
		if (discounted_price == "") {
			var json = {
				"service": service,
				"root": root,
				"subservices": subservice_list,
				"offers": [{
					"currency": "INR",
					"price": parseInt(actual_price),
					"duration": duration,
					"recommended": recommendation,
					"features": planfeature_list
				}]
			}
		} else {
			var json = {
				"service": service,
				"root": root,
				"subservices": subservice_list,
				"offers": [{
					"currency": "INR",
					"price": parseInt(actual_price),
					"discounted_price": parseInt(discounted_price),
					"duration": duration,
					"recommended": recommendation,
					"features": planfeature_list
				}]
			}
		}


		console.log(json);
		// var request = new XMLHttpRequest();
		// request.open(urlSet.addServiceApi.method, urlSet.addServiceApi.url, true);
		// request.setRequestHeader("Content-Type", "application/json");
		// request.send(JSON.stringify(json));
		// request.onload = function () {
		// 	var data = JSON.parse(this.response);
		// 	console.log(data);
		// 	document.getElementById('duration').value = "";
		// 	document.getElementById('actual_price').value = "";
		// 	document.getElementById('discounted_price').value = "";
		// 	if (data['service'] != undefined) {
		// 		alert("Service successfully added");
		// 	} else {
		// 		alert("Could not add service");
		// 	}
		// }
	} else {
		alert("Please fill all details");
	}
}

var offerData;
var offerid_to_be_edited;

function viewOffers(){
	var request = new XMLHttpRequest();
	request.open(urlSet.viewOffersApi.method, urlSet.viewOffersApi.url + service + "/" + subservice, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
	    offerData = JSON.parse(this.response);
	    console.log(offerData);
	    var offerdetails = document.getElementById('offerdetails');
		offerdetails.innerHTML = "";
	    if(offerData['error'] == "Service not found"){
	    	alert("Service not found");
	    }
	    else{
		    for(i = 0; i < offerData['offers'].length; i++){
		    	if(offerData['offers'][i]['discounted_price'] == undefined){
		    		var discount = "";
		    	}
		    	if(offerData['offers'][i]['recommended'] == true){
		    		recommend = "Yes";
		    	}
		    	else{
		    		recommend = "No";
		    	}

		    	var tr = document.createElement('tr');
		    	var td1 = document.createElement('td');
		    	td1.innerHTML = offerData['offers'][i]['duration'];

		    	var td2 = document.createElement('td');
		    	td2.innerHTML = offerData['offers'][i]['price'];

		    	var td3 = document.createElement('td');
		    	td3.innerHTML = discount;

		    	var td4 = document.createElement('td');
		    	var td4_ul = document.createElement('ul');
		    	td4_ul.innerHTML = "";
		    	for(j = 0; j < offerData['offers'][i]['features'].length; j++){
	            	td4_ul.innerHTML += `<li>${offerData['offers'][i]['features'][j]}</li>`;
	            }
	            td4.append(td4_ul);

	            var td5 = document.createElement('td');
	            td5.innerHTML = recommend;

	            var td6 = document.createElement('td');
	            td6.innerHTML = `<button class="btn btn-dark" id="${i}_${offerData['offers'][i]['_id']}" onclick="editPricingDetails(this.id);">Edit</button>`;

	            var td7 = document.createElement('td');
	            td7.innerHTML = `<button class="btn btn-dark" id="delete_${offerData['offers'][i]['_id']}" onclick="deletePricingDetails(this.id);">Delete</button>`;
	            
	            tr.append(td1);
	            tr.append(td2);
	            tr.append(td3);
	            tr.append(td4);
	            tr.append(td5);
	            tr.append(td6);
	            tr.append(td7);
	            offerdetails.append(tr);
		    }
		    document.getElementById('offerdetails_table').style.display = "block";
	    }
	}
}

function edit_plan_features() {
	document.getElementById('editplanfeaturelist').innerHTML = "";
	document.getElementById('editplanfeature').value = "";
	for (i = 0; i < planfeature_list.length; i++) {
		document.getElementById('editplanfeaturelist').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">${planfeature_list[i]}<span class="ml-3 cursor-pointer" id="editplanFeature_${i}" onclick="removeEditedPlanFeature(this.id)">x</span></div>`;

	}
}

function editplanfeature() {
	var planfeature = document.getElementById('editplanfeature').value;
	planfeature_list.push(planfeature);
	edit_plan_features();
}

function removeEditedPlanFeature(id) {
	var id = parseInt(id.split('_')[1]);
	planfeature_list.splice(id, 1);
	edit_plan_features();
}

function editPricingDetails(id6){
	$("#editPricingDetails").modal();
	var offer_to_be_edited = offerData['offers'][parseInt(id6.split('_')[0])];
	offerid_to_be_edited = offer_to_be_edited['_id'];
	document.getElementById('edit_duration').value = offer_to_be_edited['duration'];
	document.getElementById('edit_actual_price').value = offer_to_be_edited['price'];
	if(offer_to_be_edited['discounted_price'] != undefined){
		document.getElementById('edit_discounted_price').value = offer_to_be_edited['discounted_price'];
	}
	planfeature_list = offer_to_be_edited['features'];
	edit_plan_features();

	if(offer_to_be_edited['recommended'] == true){
		document.getElementById('editrecommendation').value = "1";
	}
	else{
		document.getElementById('editrecommendation').value = "0";
	}
}

function saveOffer(){
	var duration = document.getElementById('edit_duration').value;
	var actual_price = document.getElementById('edit_actual_price').value;
	var discounted_price = document.getElementById('edit_discounted_price').value;
	var recommendation = document.getElementById('editrecommendation').value;
	if (recommendation == 0) {
		recommendation = false;
	} else {
		recommendation = true;
	}

	if (duration != '' && actual_price != '') {
		if (discounted_price == "") {
			var json = {
				"currency": "INR",
				"price": parseInt(actual_price),
				"duration": duration,
				"recommended": recommendation,
				"features": planfeature_list
			}
		} else {
			var json = {
				"currency": "INR",
				"price": parseInt(actual_price),
				"discounted_price": parseInt(discounted_price),
				"duration": duration,
				"recommended": recommendation,
				"features": planfeature_list
			}
		}


		var request = new XMLHttpRequest();
		request.open(urlSet.editOffersApi.method, urlSet.editOffersApi.url + offerid_to_be_edited, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(json));
		request.onload = function () {
			var data = JSON.parse(this.response);
			console.log(data);
			if(data['_id'] != undefined){
				$("#editPricingDetails").modal('hide');
				viewOffers();
			}
			else{
				alert("Could not edit the offer");
			}
		}
	} else {
		alert("Please fill all details");
	}
}


function deletePricingDetails(id){
  var request = new XMLHttpRequest();
  request.open(urlSet.deleteOffersApi.method, urlSet.deleteOffersApi.url + id.split('_')[1], true);
  request.setRequestHeader("Accept", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
	}
}