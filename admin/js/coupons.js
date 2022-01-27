function addCoupons(){
	var coupon_code = document.getElementById('coupon_code').value;
	var coupon_discount = document.getElementById('coupon_discount').value;
	var json = {
	  "code": coupon_code,
	  "discount": parseInt(coupon_discount)
	}
	var request = new XMLHttpRequest();
	request.open(urlSet.addCouponsApi.method, urlSet.addCouponsApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['_id'] != undefined){
			alert("Coupon added");
		}
		else{
			alert("Failed to add coupon");
		}
	}
}

function viewCoupons(){
	var request = new XMLHttpRequest();
	request.open(urlSet.viewCouponsApi.method, urlSet.viewCouponsApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		document.getElementById('coupon_details').innerHTML = "";
		if(data.length > 0){
			for(i = 0; i < data.length; i++){
				document.getElementById('coupon_details').innerHTML += `<tr>
	                        <td>${data[i]['code']}</td>
	                        <td>${data[i]['discount']}</td>
	                        <td>
	                           <button class="btn btn-dark" onclick="deleteCoupon(this.id);" id=${data[i]['_id']}>DELETE</button>
	                        </td>
	                     </tr>`;
			}
	      document.getElementById('display_coupons').style.display = "block";
		}
		else{
			document.getElementById('display_coupons').style.display = "none";
		}
	}
}

function deleteCoupon(id){
	var request = new XMLHttpRequest();
	request.open(urlSet.deleteCouponsApi.method, urlSet.deleteCouponsApi.url + id, true);
	request.setRequestHeader("Accept", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['message'] == "Coupon Deleted"){
			alert("Coupon Deleted");
			viewCoupons();
		}
		else{
			alert("Could not delete coupon");
		}
	}
}


function viewTransactions(){
	var request = new XMLHttpRequest();
	request.open(urlSet.transactionsApi.method, urlSet.transactionsApi.url, true);
	request.setRequestHeader("Accept", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var transaction_details = document.getElementById('transaction_details');
		transaction_details.innerHTML = "";

		for(i = 0; i < data.length; i++){

			var td1 = document.createElement('td');
			td1.append(data[i]['date']);

			var td2 = document.createElement('td');
			td2.append(data[i]['name']);

			var td3 = document.createElement('td');
			td3.append(data[i]['phone']);

			var td4 = document.createElement('td');
			td4.append(data[i]['email']);

			var ul = document.createElement('ul');
			for(j = 0; j < data[i]['offers'].length; j++){
				var service_details = data[i]['offers'][j]['offer_name'].replaceAll('_',' - ') + " - " + data[i]['offers'][j]['duration'];
				ul.innerHTML += `<li>${service_details}</li>`;
			}

			var td5 = document.createElement('td');
			td5.append(ul);

			var td6 = document.createElement('td');
			td6.append(data[i]['amount']);

			var tr = document.createElement('tr');
			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tr.append(td5);
			tr.append(td6);

			transaction_details.append(tr);
		}
	}
}