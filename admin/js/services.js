// To get all added services
function getAllServices() {
	var request = new XMLHttpRequest();
	request.open(urlSet.getMainServiceApi.method, urlSet.getMainServiceApi.url + '?level=0', true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if (data.length > 0) {
			var selected_main_service = document.getElementById('selected_main_service');
			selected_main_service.innerHTML = "";
			var selected_main_service2 = document.getElementById('selected_main_service2');
			selected_main_service2.innerHTML = "";
			var selected_main_service3 = document.getElementById('selected_main_service3');
			selected_main_service3.innerHTML = "<option>Select main service</option>";
			var selected_main_service4 = document.getElementById('selected_main_service4');
			selected_main_service4.innerHTML = "<option>Select main service</option>";
			for (i = 0; i < data.length; i++) {
				selected_main_service.innerHTML += `<option value="${data[i]['service']}">${data[i]['service']}</option>`;
				selected_main_service2.innerHTML += `<option value="${data[i]['service']}">${data[i]['service']}</option>`;
				selected_main_service3.innerHTML += `<option value="${data[i]['service']}">${data[i]['service']}</option>`;
				selected_main_service4.innerHTML += `<option value="${data[i]['service']}">${data[i]['service']}</option>`;
			}
		}
	}
}



// To add plans

// After selecting a main service
function getPlanServices() {
	var mainService = document.getElementById('selected_main_service3').value;
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + mainService, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var planform = document.getElementById('planform');
		planform.innerHTML = "";
		if (data['subservices'].length > 0) {
			var input1 = document.createElement('div');
			input1.setAttribute('class', 'form-group');

			var input1label = document.createElement('label');
			input1label.innerHTML = "Choose service:";

			var input1select = document.createElement('select');
			input1select.setAttribute('class', 'form-control');
			input1select.setAttribute('id', 'selected_service');
			input1select.setAttribute('onchange', `getPlanSubservices()`);
			for (i = 0; i < data['subservices'].length; i++) {
				input1select.innerHTML += `<option value="${data['subservices'][i]['service']}">${data['subservices'][i]['service']}</option>`;
			}
			input1.append(input1label);
			input1.append(input1select);
			planform.append(input1);
			getPlanSubservices();
		} else {
			planService = mainService;
			planform.innerHTML = `<div class="form-group">
                  <label>Enter plan duration in the format: (3 Months)</label>
                  <input type="text" class="form-control" id="duration">
               </div>
               <div class="form-group">
                  <label>Enter actual plan price:</label>
                  <input type="text" class="form-control" id="actual_price">
               </div>
               <div class="form-group">
                  <label>Enter discounted plan price:</label>
                  <input type="text" class="form-control" id="discounted_price">
               </div>
               <div class="form-group">
                  <label>Add plan features: (Maximum 6)</label>
                  <div id="planfeaturelist" class="row m-0"></div>
                  <div class="row m-0 mt-3">
                     <input type="text" class="form-control w-50" id="planfeature">
                     <button class="btn btn-dark ml-4" onclick="addplanfeature();">ADD</button>
                  </div>
               </div>
               <div class="form-group">
                  <label>Add plan feature icons: (Maximum 6)</label>
                  <div id="planfeatureiconlist" class="row m-0"></div>
                  <div class="row m-0 mt-3">
                     <input type="text" class="form-control w-50" id="planfeatureicon">
                     <button class="btn btn-dark ml-4" onclick="addplanfeatureicons();">ADD</button>
                  </div>
               </div>
               <div class="form-group">
                  <label>Recommended?</label>
                  <select class="form-control" id="recommendation">
                     <option value="0">No</option>
                     <option value="1">Yes</option>
                  </select>
               </div>
               <div class="form-group">
                  <label>Available now?</label>
                  <select class="form-control" id="availability">
                     <option value="0">No</option>
                     <option value="1">Yes</option>
                  </select>
               </div>
                <div class="text-center mt-5 mb-5">
            <button class="btn btn-dark w-25" onclick="addPlan();">ADD PLAN</button>
         </div>`;
		}
	}
}

// After selecting a service
function getPlanSubservices() {
	var selected_service = document.getElementById('selected_service').value;
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + selected_service, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var planform = document.getElementById('planform2');
		planform.innerHTML = "";
		if (data['subservices'].length > 0) {
			var input1 = document.createElement('div');
			input1.setAttribute('class', 'form-group');

			var input1label = document.createElement('label');
			input1label.innerHTML = "Choose subservice:";

			var input1select = document.createElement('select');
			input1select.setAttribute('class', 'form-control');
			input1select.setAttribute('id', 'selected_subservice');
			input1select.setAttribute('onchange', `getPlanOffers`);
			for (i = 0; i < data['subservices'].length; i++) {
				input1select.innerHTML += `<option value="${data['subservices'][i]['service']}">${data['subservices'][i]['service']}</option>`;
			}
			input1.append(input1label);
			input1.append(input1select);
			planform.append(input1);
			getPlanOffers();
		} else {
			planService = selected_service;
			planform.innerHTML += `<div class="form-group">
                  <label>Enter plan duration in the format: (3 Months)</label>
                  <input type="text" class="form-control" id="duration">
               </div>
               <div class="form-group">
                  <label>Enter actual plan price:</label>
                  <input type="text" class="form-control" id="actual_price">
               </div>
               <div class="form-group">
                  <label>Enter discounted plan price:</label>
                  <input type="text" class="form-control" id="discounted_price">
               </div>
               <div class="form-group">
                  <label>Add plan features: (Maximum 6)</label>
                  <div id="planfeaturelist" class="row m-0"></div>
                  <div class="row m-0 mt-3">
                     <input type="text" class="form-control w-50" id="planfeature">
                     <button class="btn btn-dark ml-4" onclick="addplanfeature();">ADD</button>
                  </div>
               </div>
               <div class="form-group">
                  <label>Add plan feature icons: (Maximum 6)</label>
                  <div id="planfeatureiconlist" class="row m-0"></div>
                  <div class="row m-0 mt-3">
                     <input type="text" class="form-control w-50" id="planfeatureicon">
                     <button class="btn btn-dark ml-4" onclick="addplanfeatureicons();">ADD</button>
                  </div>
               </div>
               <div class="form-group">
                  <label>Recommended?</label>
                  <select class="form-control" id="recommendation">
                     <option value="0">No</option>
                     <option value="1">Yes</option>
                  </select>
               </div>
               <div class="form-group">
                  <label>Available now?</label>
                  <select class="form-control" id="availability">
                     <option value="0">No</option>
                     <option value="1">Yes</option>
                  </select>
               </div>
                <div class="text-center mt-5 mb-5">
            <button class="btn btn-dark w-25" onclick="addPlan();">ADD PLAN</button>
         </div>`;
		}
	}
}


// After selecting a subservice
function getPlanOffers() {
	var selected_subservice = document.getElementById('selected_subservice').value;
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + selected_subservice, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		planService = selected_subservice;
		var planform = document.getElementById('planform3');
		planform.innerHTML += `<div class="form-group">
               <label>Enter plan duration in the format: (3 Months)</label>
               <input type="text" class="form-control" id="duration">
            </div>
            <div class="form-group">
               <label>Enter actual plan price:</label>
               <input type="text" class="form-control" id="actual_price">
            </div>
            <div class="form-group">
               <label>Enter discounted plan price:</label>
               <input type="text" class="form-control" id="discounted_price">
            </div>
            <div class="form-group">
               <label>Add plan features: (Maximum 6)</label>
               <div id="planfeaturelist" class="row m-0"></div>
               <div class="row m-0 mt-3">
                  <input type="text" class="form-control w-50" id="planfeature">
                  <button class="btn btn-dark ml-4" onclick="addplanfeature();">ADD</button>
               </div>
            </div>
            <div class="form-group">
               <label>Add plan feature icons: (Maximum 6)</label>
               <div id="planfeatureiconlist" class="row m-0"></div>
               <div class="row m-0 mt-3">
                  <input type="text" class="form-control w-50" id="planfeatureicon">
                  <button class="btn btn-dark ml-4" onclick="addplanfeatureicons();">ADD</button>
               </div>
            </div>
            <div class="form-group">
               <label>Recommended?</label>
               <select class="form-control" id="recommendation">
                  <option value="0">No</option>
                  <option value="1">Yes</option>
               </select>
            </div>
            <div class="form-group">
               <label>Available now?</label>
               <select class="form-control" id="availability">
                  <option value="0">No</option>
                  <option value="1">Yes</option>
               </select>
            </div>
             <div class="text-center mt-5 mb-5">
         <button class="btn btn-dark w-25" onclick="addPlan();">ADD PLAN</button>
      </div>`;
	}
}




var planfeature_list = [];
var planfeatureicon_list = [];
var planService;

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

// Plan feature icons
function display_plan_featureicons() {
	document.getElementById('planfeatureiconlist').innerHTML = "";
	document.getElementById('planfeatureicon').value = "";
	for (i = 0; i < planfeatureicon_list.length; i++) {
		document.getElementById('planfeatureiconlist').innerHTML += `<div class="col-sm-2 mb-2">
                     <div><span class="ml-3 float-right cursor-pointer" id="planFeatureicon_${i}" onclick="removePlanFeatureicon(this.id)">x</span></div>
                     <img src=${planfeatureicon_list[i]} class="w-100">
                  </div>`;
	}
}

function addplanfeatureicons() {
	var planfeatureicon = document.getElementById('planfeatureicon').value;
	planfeatureicon_list.push(planfeatureicon);
	display_plan_featureicons();
}

function removePlanFeatureicon(id) {
	var id = parseInt(id.split('_')[1]);
	planfeatureicon_list.splice(id, 1);
	display_plan_featureicons();
}



// Adding plans

function addPlan() {
	// planService = document.getElementById('selected_main_service3').value;
	var duration = document.getElementById('duration').value;
	var actual_price = document.getElementById('actual_price').value;
	var discounted_price = document.getElementById('discounted_price').value;
	var recommendation = document.getElementById('recommendation').value;
	if (recommendation == 0) {
		recommendation = false;
	} else {
		recommendation = true;
	}

	var availability = document.getElementById('availability').value;
	if (availability == 0) {
		availability = false;
	} else {
		availability = true;
	}

	if (duration != '' && actual_price != '') {
		if (discounted_price == "" || discounted_price == "0") {
			var json = {
				"service": planService,
				"level": 3,
				"subservices": [],
				"offers": [{
					"currency": "INR",
					"price": parseInt(actual_price),
					"duration": duration,
					"recommended": recommendation,
					"features": planfeature_list,
					"feature_images": planfeatureicon_list,
					"in_stock": availability
				}]
			}
		} else {
			var json = {
				"service": planService,
				"level": 3,
				"subservices": [],
				"offers": [{
					"currency": "INR",
					"price": parseInt(actual_price),
					"discounted_price": parseInt(discounted_price),
					"duration": duration,
					"recommended": recommendation,
					"features": planfeature_list,
					"feature_images": planfeatureicon_list,
					"in_stock": availability
				}]
			}
		}

		console.log(json);
		var request = new XMLHttpRequest();
		request.open(urlSet.addServiceApi.method, urlSet.addServiceApi.url, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(json));
		request.onload = function () {
			var data = JSON.parse(this.response);
			console.log(data);
			document.getElementById('duration').value = "";
			document.getElementById('actual_price').value = "";
			document.getElementById('discounted_price').value = "";
			document.getElementById('planfeaturelist').innerHTML = "";
			document.getElementById('planfeatureiconlist').innerHTML = "";
			planfeature_list = [];
			planfeatureicon_list = [];
			if (data['message'] == "Serivce has been updated") {
				alert("Plan successfully added");
				location.reload();
				// getExistingPlansServices();
			} else {
				alert("Could not add plan");
			}
		}
	} else {
		alert("Enter offer details");
	}
}









// To view added plans

var offerData;
var offerid_to_be_edited;

function getExistingPlansServices() {
	var mainService = document.getElementById('selected_main_service4').value;
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + mainService, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var offerdetails = document.getElementById('offerdetails');
		offerdetails.innerHTML = "";
		if (data['offers'].length > 0) {
			for (i = 0; i < data['offers'].length; i++) {
				if (data['offers'][i]['discounted_price'] == undefined || data['offers'][i]['discounted_price'] == 0) {
					var discount = "";
				}
				else{
					discount = data['offers'][i]['discounted_price'];
				}
				if (data['offers'][i]['recommended'] == true) {
					recommend = "Yes";
				} else {
					recommend = "No";
				}
				if (data['offers'][i]['in_stock'] == true) {
					in_stock = "Yes";
				} else {
					in_stock = "No";
				}

				var tr = document.createElement('tr');
				var td1 = document.createElement('td');
				td1.innerHTML = data['offers'][i]['duration'];

				var td2 = document.createElement('td');
				td2.innerHTML = data['offers'][i]['price'];

				var td3 = document.createElement('td');
				td3.innerHTML = discount;

				var td4 = document.createElement('td');
				var td4_ul = document.createElement('ul');
				td4_ul.innerHTML = "";
				for (j = 0; j < data['offers'][i]['features'].length; j++) {
					td4_ul.innerHTML += `<li>${data['offers'][i]['features'][j]}</li>`;
				}
				td4.append(td4_ul);

				var td5 = document.createElement('td');
				td5.innerHTML = recommend;

				var td6 = document.createElement('td');
				td6.innerHTML = in_stock;

				var td7 = document.createElement('td');
				td7.innerHTML = `<button class="btn btn-dark" id="${i}_${data['offers'][i]['_id']}" onclick="editPricingDetails(this.id);">Edit</button>`;

				var td8 = document.createElement('td');
				td8.innerHTML = `<button class="btn btn-dark" id="delete_${data['offers'][i]['_id']}" onclick="deletePricingDetails(this.id);">Delete</button>`;

				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);
				tr.append(td6);
				tr.append(td7);
				tr.append(td8)
				offerdetails.append(tr);
			}
			document.getElementById('offerdetails_table').style.display = "block";
		} else if (data['subservices'].length > 0) {
			var planform2 = document.getElementById('planform2');
			planform2.innerHTML = "";
			var input1 = document.createElement('div');
			input1.setAttribute('class', 'form-group');

			var input1label = document.createElement('label');
			input1label.innerHTML = "Choose service:";

			var input1select = document.createElement('select');
			input1select.setAttribute('class', 'form-control');
			input1select.setAttribute('id', 'selected_planservice');
			input1select.setAttribute('onchange', `getExistingPlanSubservices`);
			for (i = 0; i < data['subservices'].length; i++) {
				input1select.innerHTML += `<option value="${data['subservices'][i]['service']}">${data['subservices'][i]['service']}</option>`;
			}
			input1.append(input1label);
			input1.append(input1select);
			planform2.append(input1);
			getExistingPlanSubservices();
		} else {
			var planform2 = document.getElementById('planform2');
			planform2.innerHTML = "";
			alert("This service has no data");
		}
	}
}



function getExistingPlanSubservices() {
	var selected_planservice = document.getElementById('selected_planservice').value;
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + selected_planservice, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var offerdetails = document.getElementById('offerdetails');
		offerdetails.innerHTML = "";
		if (data['offers'].length > 0) {
			for (i = 0; i < data['offers'].length; i++) {
				if (data['offers'][i]['discounted_price'] == undefined || data['offers'][i]['discounted_price'] == 0) {
					var discount = "";
				}
				else{
					discount = data['offers'][i]['discounted_price'];
				}
				if (data['offers'][i]['recommended'] == true) {
					recommend = "Yes";
				} else {
					recommend = "No";
				}
				if (data['offers'][i]['in_stock'] == true) {
					in_stock = "Yes";
				} else {
					in_stock = "No";
				}

				var tr = document.createElement('tr');
				var td1 = document.createElement('td');
				td1.innerHTML = data['offers'][i]['duration'];

				var td2 = document.createElement('td');
				td2.innerHTML = data['offers'][i]['price'];

				var td3 = document.createElement('td');
				td3.innerHTML = discount;

				var td4 = document.createElement('td');
				var td4_ul = document.createElement('ul');
				td4_ul.innerHTML = "";
				for (j = 0; j < data['offers'][i]['features'].length; j++) {
					td4_ul.innerHTML += `<li>${data['offers'][i]['features'][j]}</li>`;
				}
				td4.append(td4_ul);

				var td5 = document.createElement('td');
				td5.innerHTML = recommend;

				var td6 = document.createElement('td');
				td6.innerHTML = in_stock;

				var td7 = document.createElement('td');
				td7.innerHTML = `<button class="btn btn-dark" id="${i}_${data['offers'][i]['_id']}" onclick="editPricingDetails(this.id);">Edit</button>`;

				var td8 = document.createElement('td');
				td8.innerHTML = `<button class="btn btn-dark" id="delete_${data['offers'][i]['_id']}" onclick="deletePricingDetails(this.id);">Delete</button>`;

				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);
				tr.append(td6);
				tr.append(td7);
				tr.append(td8)
				offerdetails.append(tr);
			}
			document.getElementById('offerdetails_table').style.display = "block";
		} else if (data['subservices'].length > 0) {
			var input1 = document.createElement('div');
			input1.setAttribute('class', 'form-group');

			var input1label = document.createElement('label');
			input1label.innerHTML = "Choose subservice:";

			var input1select = document.createElement('select');
			input1select.setAttribute('class', 'form-control');
			input1select.setAttribute('id', 'selected_plansubservice');
			input1select.setAttribute('onchange', `getExistingPlanOffers`);
			for (i = 0; i < data['subservices'].length; i++) {
				input1select.innerHTML += `<option value="${data['subservices'][i]['service']}">${data['subservices'][i]['service']}</option>`;
			}
			input1.append(input1label);
			input1.append(input1select);
			planform2.append(input1);
			getExistingPlanOffers();
		} else {
			alert("This service has no data");
		}
	}
}



function getExistingPlanOffers() {
	var selected_plansubservice = document.getElementById('selected_plansubservice').value;
	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + selected_plansubservice, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		offerData = data;
		var offerdetails = document.getElementById('offerdetails');
		offerdetails.innerHTML = "";
		if (data['offers'].length > 0) {
			for (i = 0; i < data['offers'].length; i++) {
				if (data['offers'][i]['discounted_price'] == undefined || data['offers'][i]['discounted_price'] == 0) {
					var discount = "";
				}
				else{
					discount = data['offers'][i]['discounted_price'];
				}
				if (data['offers'][i]['recommended'] == true) {
					recommend = "Yes";
				} else {
					recommend = "No";
				}
				if (data['offers'][i]['in_stock'] == true) {
					in_stock = "Yes";
				} else {
					in_stock = "No";
				}

				var tr = document.createElement('tr');
				var td1 = document.createElement('td');
				td1.innerHTML = data['offers'][i]['duration'];

				var td2 = document.createElement('td');
				td2.innerHTML = data['offers'][i]['price'];

				var td3 = document.createElement('td');
				td3.innerHTML = discount;

				var td4 = document.createElement('td');
				var td4_ul = document.createElement('ul');
				td4_ul.innerHTML = "";
				for (j = 0; j < data['offers'][i]['features'].length; j++) {
					td4_ul.innerHTML += `<li>${data['offers'][i]['features'][j]}</li>`;
				}
				td4.append(td4_ul);

				var td5 = document.createElement('td');
				td5.innerHTML = recommend;

				var td6 = document.createElement('td');
				td6.innerHTML = in_stock;

				var td7 = document.createElement('td');
				td7.innerHTML = `<button class="btn btn-dark" id="${i}_${data['offers'][i]['_id']}" onclick="editPricingDetails(this.id);">Edit</button>`;

				var td8 = document.createElement('td');
				td8.innerHTML = `<button class="btn btn-dark" id="delete_${data['offers'][i]['_id']}" onclick="deletePricingDetails(this.id);">Delete</button>`;

				tr.append(td1);
				tr.append(td2);
				tr.append(td3);
				tr.append(td4);
				tr.append(td5);
				tr.append(td6);
				tr.append(td7);
				tr.append(td8)
				offerdetails.append(tr);
			}
			document.getElementById('offerdetails_table').style.display = "block";
		} else if (data['subservices'].length > 0) {
			console.log("has subservices");
		} else {
			alert("This service has no data");
		}
	}
}








// Delete plans
function deletePricingDetails(id) {
   var request = new XMLHttpRequest();
   request.open(urlSet.deleteOffersApi.method, urlSet.deleteOffersApi.url + id.split('_')[1], true);
   request.setRequestHeader("Accept", "application/json");
   request.send();
   request.onload = function () {
      var data = JSON.parse(this.response);
      console.log(data);
      if(data['message'] == "Offer Deleted"){
      	alert("Offer Deleted");
      	location.reload();
      	// getExistingPlansServices();
      }
      else{
      	alert("Could not delete offer");
      }
   }
}





// Edit plans
function editPricingDetails(id6) {
   $("#editPricingDetails").modal();
   var offer_to_be_edited = offerData['offers'][parseInt(id6.split('_')[0])];
   offerid_to_be_edited = offer_to_be_edited['_id'];
   document.getElementById('edit_duration').value = offer_to_be_edited['duration'];
   document.getElementById('edit_actual_price').value = offer_to_be_edited['price'];
   if (offer_to_be_edited['discounted_price'] != undefined) {
      document.getElementById('edit_discounted_price').value = offer_to_be_edited['discounted_price'];
   }
   planfeature_list = offer_to_be_edited['features'];
   edit_plan_features();

   if (offer_to_be_edited['recommended'] == true) {
      document.getElementById('editrecommendation').value = "1";
   } else {
      document.getElementById('editrecommendation').value = "0";
   }
   if (offer_to_be_edited['in_stock'] == true) {
      document.getElementById('editavailability').value = "1";
   } else {
      document.getElementById('editavailability').value = "0";
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

function edit_plan_featuresicon() {
   document.getElementById('editplanfeatureiconlist').innerHTML = "";
   document.getElementById('editplanfeatureicon').value = "";
   for (i = 0; i < planfeatureicon_list.length; i++) {
      document.getElementById('editplanfeaturelisticon').innerHTML += `<div class="col-sm-2 mb-2">
                     <div><span class="ml-3 float-right cursor-pointer" id="editplanFeatureicon_${i}" onclick="removeEditedPlanFeatureicon(this.id)">x</span></div>
                     <img src=${planfeatureicon_list[i]} class="w-100">
                  </div>`;
   }
}

function editplanfeatureicon() {
   var planfeatureicon = document.getElementById('editplanfeatureicon').value;
   planfeatureicon_list.push(planfeatureicon);
   edit_plan_featuresicon();
}

function removeEditedPlanFeatureicon(id) {
   var id = parseInt(id.split('_')[1]);
   planfeatureicon_list.splice(id, 1);
   edit_plan_featuresicon();
}










// Save edited plan
function saveOffer() {
   var duration = document.getElementById('edit_duration').value;
   var actual_price = document.getElementById('edit_actual_price').value;
   var discounted_price = document.getElementById('edit_discounted_price').value;
   var recommendation = document.getElementById('editrecommendation').value;
   if (recommendation == 0) {
      recommendation = false;
   } else {
      recommendation = true;
   }

   var availability = document.getElementById('editavailability').value;
   if (availability == 0) {
      availability = false;
   } else {
      availability = true;
   }

   if (duration != '' && actual_price != '') {
      if (discounted_price == "" || discounted_price == "0") {
         var json = {
            "currency": "INR",
            "price": parseInt(actual_price),
            "duration": duration,
            "recommended": recommendation,
            "features": planfeature_list,
            "feature_images": planfeatureicon_list,
            "in_stock": availability
         }
      } else {
         var json = {
            "currency": "INR",
            "price": parseInt(actual_price),
            "discounted_price": parseInt(discounted_price),
            "duration": duration,
            "recommended": recommendation,
            "features": planfeature_list,
            "feature_images": planfeatureicon_list,
            "in_stock": availability
         }
      }


      var request = new XMLHttpRequest();
      request.open(urlSet.editOffersApi.method, urlSet.editOffersApi.url + offerid_to_be_edited, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(json));
      request.onload = function () {
         var data = JSON.parse(this.response);
         console.log(data);
         if (data['_id'] != undefined) {
            $("#editPricingDetails").modal('hide');
            location.reload();
            // getExistingPlanOffers();
         } else {
            alert("Could not edit the offer");
         }
      }
   } else {
      alert("Please fill all details");
   }
}