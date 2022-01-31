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
	request.setRequestHeader("authorization", authtoken);
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
	request.setRequestHeader("authorization", authtoken);
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