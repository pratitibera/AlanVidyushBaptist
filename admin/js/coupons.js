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
		alert("Coupon added");
	}
}

function viewCoupons(){
	var request = new XMLHttpRequest();
	request.open(urlSet.viewCouponsApi.method, urlSet.viewCouponsApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.setRequestHeader("authorization", authtoken);
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
	                           <button class="btn btn-dark" onclick="deleteHandler(this.id)" id="coupon_${data[i]['_id']}">DELETE</button>
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
	id = id.id;
	var request = new XMLHttpRequest();
	request.open(urlSet.deleteCouponsApi.method, urlSet.deleteCouponsApi.url + id.split('_')[1], true);
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("authorization", authtoken);
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		$('#confirmDeletion').modal('hide');
		if(data['message'] == "Coupon Deleted"){
			alert("Coupon Deleted");
			viewCoupons();
		}
		else{
			alert("Could not delete coupon");
		}
	}
}