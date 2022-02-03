var offerId = [];
var totalbill = 0;
var coupon_code;

function emptyCart() {
	sessionStorage.clear();
	document.getElementById('cart_count_mobile').innerHTML = "";
	document.getElementById('cart_count_desktop').innerHTML = "";
}

function fetchCart() {
	if (shopcart.length > 0) {
		var particulars = document.getElementById('particulars');
		particulars.innerHTML = "";
		totalbill = 0;
		for (i = 0; i < shopcart.length; i++) {
			offerId.push(shopcart[i]['id']);
			if (shopcart[i]['discount'] == "undefined") {
				particulars.innerHTML += `<div class="row m-0 mb-2">
	                        <div class="col-3 col-sm-2">
	                           <img src="https://images.unsplash.com/photo-1520877745935-616158eb7fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" class="w-100">
	                        </div>
	                        <div class="col-6 col-sm-6 p-0">
	                           <div class="fo-16 fw-600 mfo-14">${shopcart[i]['service']}</div>
	                           <div class="fo-14 mfo-12">${shopcart[i]['duration']}</div>
	                        </div>
	                        <div class="col-3 col-sm-4 p-0">
	                           <div class="fo-26 fw-700 text-right mfo-18">₹ ${shopcart[i]['price']}</div>
	                        </div>
	                     </div>`;
				totalbill = totalbill + parseInt(shopcart[i]['price']);
			} else {
				particulars.innerHTML += `<div class="row m-0 mb-2">
	                        <div class="col-3 col-sm-2">
	                           <img src="https://images.unsplash.com/photo-1520877745935-616158eb7fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zml0bmVzc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" class="w-100">
	                        </div>
	                        <div class="col-6 col-sm-6 p-0">
	                           <div class="fo-16 fw-600 mfo-14">${shopcart[i]['service']}</div>
	                           <div class="fo-14 mfo-12">${shopcart[i]['duration']}</div>
	                        </div>
	                        <div class="col-3 col-sm-4 p-0">
	                           <div class="fo-26 fw-700 text-right mfo-18">₹ ${shopcart[i]['discount']}</div>
	                           <div class="fo-16 text-right mfo-12" style="text-decoration: line-through" id="checkout_discount">₹ ${shopcart[i]['price']}</div>
	                        </div>
	                     </div>`;
				totalbill = totalbill + parseInt(shopcart[i]['discount']);
			}
		}
		document.getElementById('totalbill').innerHTML = "TOTAL: ₹ " + totalbill;
		$("#checkout").modal();
		console.log(shopcart);
	} else {
		notify("Cart is empty!");
	}
}


function applyCoupon() {
	coupon_code = document.getElementById('coupon_code').value;
	var json = {
		"offerIds": offerId,
		"couponCode": coupon_code
	}
	console.log(json);
	var request = new XMLHttpRequest();
	request.open(urlSet.applyCouponApi.method, urlSet.applyCouponApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if (data['error'] == "Coupon does not exist") {
			document.getElementById('coupon_status').innerHTML = `<input type="text" placeholder="Coupon code" id="coupon_code">
			<div class="fo-16 text-dark fw-600">Invalid Coupon</div>`;
		} else {
			document.getElementById('coupon_button').innerHTML = "REMOVE COUPON";
			document.getElementById('coupon_button').setAttribute('onclick', `removeCoupon()`);
			document.getElementById('coupon_status').innerHTML = `<div class="fo-16 text-dark fw-600">${coupon_code} Coupon applied</div>
			                      <div class="fo-13 text-dark">Discount: ₹ ${data['discount']}</div>`;
			document.getElementById('totalbill').innerHTML = "TOTAL: ₹ " + data['discounted_price'];

			// document.getElementById('coupon_button').setAttribute('onclick', `removeCoupon()`);
			// document.getElementById('coupon_status').innerHTML = `<div class="fo-16 text-dark fw-600">ALAN700 Coupon applied</div>
			//                       <div class="fo-13 text-dark">Discount: ₹ 700</div>`;
			// document.getElementById('totalbill').innerHTML = "TOTAL: ₹ 2300";
		}
	}
}

function removeCoupon() {
	document.getElementById('coupon_button').innerHTML = "APPLY COUPON";
	document.getElementById('coupon_button').setAttribute('onclick', `applyCoupon()`);
	document.getElementById('coupon_status').innerHTML = `<input type="text" placeholder="Coupon code" id="coupon_code">`;
	document.getElementById('totalbill').innerHTML = "TOTAL: ₹ " + totalbill;
}

function payInCash() {
	var customer_name = document.getElementById('customer_name').value;
	var customer_mobile = document.getElementById('customer_mobile').value;
	var customer_email = document.getElementById('customer_email').value;

	if (coupon_code == undefined) {
		coupon_code = "";
	}

	if (customer_name != '') {
		if (customer_mobile != '' && isPhoneNumber(customer_mobile) == true) {
			if (customer_email != '' && validEmail(customer_email) == true) {
				var json = {
					"offerIds": offerId,
					"couponCode": coupon_code,
					"name": customer_name,
					"phone": customer_mobile,
					"email": customer_email,
					"type": "Cash"
				}
				console.log(json);
				var request = new XMLHttpRequest();
				request.open(urlSet.paymentApi.method, urlSet.paymentApi.url, true);
				request.setRequestHeader("Content-Type", "application/json");
				request.send(JSON.stringify(json));
				request.onload = function () {
					var data = JSON.parse(this.response);
					console.log(data);
				}
			} else {
				notify("Please enter a valid email ID");
			}
		} else {
			notify("Please enter a valid phone number");
		}
	} else {
		notify("Please enter your name");
	}
}

function checkout() {
	var customer_name = document.getElementById('customer_name').value;
	var customer_mobile = document.getElementById('customer_mobile').value;
	var customer_email = document.getElementById('customer_email').value;

	if (coupon_code == undefined) {
		coupon_code = "";
	}


	if (customer_name != '') {
		if (customer_mobile != '' && isPhoneNumber(customer_mobile) == true) {
			if (customer_email != '' && validEmail(customer_email) == true) {
				var json = {
					"offerIds": offerId,
					"couponCode": coupon_code,
					"name": customer_name,
					"phone": customer_mobile,
					"email": customer_email,
					"type": "Online"
				}
				console.log(json);
				var request = new XMLHttpRequest();
				request.open(urlSet.paymentApi.method, urlSet.paymentApi.url, true);
				request.setRequestHeader("Content-Type", "application/json");
				request.send(JSON.stringify(json));
				request.onload = function () {
					var data = JSON.parse(this.response);
					console.log(data);
					if (data['receipt_id'] != "") {
						var options = {
							"key": "rzp_test_I4CcsfzCypIJie",
							"amount": data['amount'],
							"currency": "INR",
							"name": "ALAN VIDYUSH BAPTIST",
							"description": "Pay For Your Service",
							"image": "https://alanvidyushbaptist.com/assets/logo/Optimal_Wellness_Logo.png",
							"order_id": data['order_id'],
							"handler": function (response) {
								payNowResponse(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature, data['receipt_id']);
								console.log(response);
							},
							"prefill": {
								"name": customer_name,
								"email": customer_email,
								"contact": customer_mobile
							},
							"notes": {
								"address": "Give an address here",
							},
							"theme": {
								"color": "#8b1ef1"
							}
						};
						var rzp1 = new Razorpay(options);
						rzp1.on('payment.failed', function (response) {
							notify("Sorry! Payment failed due to banks issue");
						});
						rzp1.open();

					} else {
						notify("Sorry! Could not process your request");
					}
				}
			} else {
				notify("Please enter a valid email ID");
			}
		} else {
			notify("Please enter a valid phone number");
		}
	} else {
		notify("Please enter your name");
	}
}


function payNowResponse(razorpay_payment_id, razorpay_order_id, razorpay_signature, receipt_id) {
	var json = {
		"razorpay_order_id": razorpay_order_id,
		"razorpay_signature": razorpay_signature,
		"razorpay_payment_id": razorpay_payment_id,
		"receipt_id": receipt_id
	}
	console.log(json);
	var request = new XMLHttpRequest();
	request.open(urlSet.verifyPaymentApi.method, urlSet.verifyPaymentApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if (data['message'] == "Order Valid and Successful") {
			notify("Payment successful");
			sessionStorage.clear();
		} else {
			notify("Payment unsuccessful");
		}
	}
}


function isPhoneNumber(mob) {
	var numbers = /^\(?([6789][0-9]{9})$/;
	if (mob.match(numbers)) {
		return true;
	} else {
		return false;
	}
}

function validEmail(mail) {
	var pattern = /@gmail\.com/i;
	if (pattern.test(mail)) {
		return true
	} else {
		return false;
	}
}