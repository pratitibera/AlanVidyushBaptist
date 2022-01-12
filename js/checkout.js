function applyCoupon(){
	var coupon_code = document.getElementById('coupon_code').value;
	var json = {
		"couponCode": coupon_code
	}
	var request = new XMLHttpRequest();
	request.open(urlSet.applyCouponApi.method, urlSet.applyCouponApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
	}
}