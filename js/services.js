var mainServicesData;
var mainService;

function getMainServices() {
	var request = new XMLHttpRequest();
	request.open(urlSet.getMainServiceApi.method, urlSet.getMainServiceApi.url + '?level=0', true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		mainServicesData = data;
		displayServices();
	}
}

function displayServices() {
	var mainServices_section = document.getElementById('mainServices_section');
	console.log(mainServicesData);
	for (i = 0; i < mainServicesData.length; i++) {
		var service = mainServicesData[i]['service'].replaceAll(' ', '_');
		// mainServices_section.innerHTML += `<div class="col-sm-4">
		//             <div class="single-service-item" id="service_${i}" onclick="mainServiceDetails(this.id);">
		//                <div class="img-holder">
		//                   <figure class="swap-on-hover">
		//                      <img class="swap-on-hover__front-image" src="${mainServicesData[i]['service_image'][0]}">
		//                      <img class="swap-on-hover__back-image" src="${mainServicesData[i]['service_image'][1]}">
		//                   </figure>
		//                   <div class="text-holder text-center">
		//                      <h3>${mainServicesData[i]['service']}</h3>
		//                      <p>${mainServicesData[i]['description']}</p>
		//                      <div class="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3">Read More</div> 
		//                   </div>
		//                </div>
		//             </div>
		//          </div>`;


		mainServices_section.innerHTML += `<div class="col-sm-4">
               <div class="single-service-item" id="service_${i}" onclick="mainServiceDetails(this.id);">
                  <div class="img-holder">
                     <figure class="swap-on-hover">
                        <img class="swap-on-hover__front-image" src="${mainServicesData[i]['service_image'][0]}">
                        <img class="swap-on-hover__back-image" src="${mainServicesData[i]['service_image'][1]}">
                     </figure>
                     <div class="text-holder text-center">
                        <h3>${mainServicesData[i]['service']}</h3>
                        <p>${mainServicesData[i]['description']}</p>
                        <div class="thm-btn bgclr-1 w-50 ml-auto mr-auto mt-3">Read More</div> 
                     </div>
                  </div>
               </div>
            </div>`
	}
}

function mainServiceDetails(id) {
	id = id.split('_')[1];
	console.log(mainServicesData[id]);
	if (mainServicesData[id]['offers'].length > 0) {
		document.location.href = "pricing.html?service=" + mainServicesData[id]['service'].replaceAll(' ', '_');
	} else {
		document.location.href = "services.html?service=" + mainServicesData[id]['service'].replaceAll(' ', '_');
	}
}


function getServices() {
	try {
		var url = document.location.href,
			params = url.split("?")[1].split("&"),
			data = {},
			tmp;
		for (var i = 0, l = params.length; i < l; i++) {
			tmp = params[i].split("=");
			data[tmp[0]] = tmp[1];
			mainService = data["service"].replaceAll('_', ' ');
		}
	} catch {
		document.location.href = "mainservices.html";
	}

	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + mainService, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		mainServicesData = data['subservices'];
		displayServices();
	}
}


// Get plans
function getPlans() {
	try {
		var url = document.location.href,
			params = url.split("?")[1].split("&"),
			data = {},
			tmp;
		for (var i = 0, l = params.length; i < l; i++) {
			tmp = params[i].split("=");
			data[tmp[0]] = tmp[1];
			mainService = data["service"].replaceAll('_', ' ');
		}
	} catch {
		document.location.href = "mainservices.html";
	}


	var request = new XMLHttpRequest();
	request.open(urlSet.viewServicesApi.method, urlSet.viewServicesApi.url + mainService, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		document.getElementById('pricing_heading').innerHTML = "PRICING OF " + mainService.toUpperCase();
		var pricing_section_container = document.getElementById('pricing-section-container');
		pricing_section_container.innerHTML += `<h2 class="fo-40 fw-700 text-center pt-5 mfo-25">We've Got Plans for ${mainService}</h2><hr>`;

		var pricing_row = document.createElement('div');
		pricing_row.setAttribute('class', 'owl-carousel mt-5');
		pricing_row.setAttribute('id', 'pricingCarousel');

		for (j = 0; j < data['offers'].length; j++) {
			var card = document.createElement('div');
			if (j % 2 == 0) {
				card.setAttribute('class', 'bg-white pt-5 pb-5');
			} else {
				card.setAttribute('class', 'bg-dark pt-5 pb-5 dark-pricing');
			}

			var duration = document.createElement('div');
			duration.setAttribute('class', 'fo-52 fw-600 pco text-center');
			duration.innerHTML = data['offers'][j]['duration'];
			card.append(duration);

			var recommend = document.createElement('div');
			recommend.setAttribute('class', 'pco fo-20 fw-600 text-center recommend');

			if (data['offers'][j]['recommended'] == true) {
				recommend.innerHTML = "Recommended";
			}
			card.append(recommend);

			var price = document.createElement('div');
			price.setAttribute('class', 'text-center fw-600 fo-52');
			if (data['offers'][j]['discounted_price'] != undefined) {
				price.innerHTML = `<span class="fo-20" style="text-decoration: line-through">₹ ${data['offers'][j]['price']}</span>
                        <span class="pco fo-36 fw-600">₹ </span>${data['offers'][j]['discounted_price']}`;
			} else {
				price.innerHTML = `<span class="pco fo-36 fw-600">₹ </span>${data['offers'][j]['price']}`;
			}
			card.append(price);

			var ul = document.createElement('ul');
			ul.setAttribute('class', 'pricing-section-items pl-0 mt-3');
			for (k = 0; k < data['offers'][j]['features'].length; k++) {
				var li = document.createElement('li');
				li.append(data['offers'][j]['features'][k]);
				ul.append(li);
			}
			card.append(ul);

			var choose = document.createElement('div');
			var plan_id = data['offers'][j]['duration'].replaceAll(' ', '_') + '#' + data['offers'][j]['price'] + '#' + data['offers'][j]['discounted_price'] + '#' + data['offers'][j]['_id'];
			choose.innerHTML = `<div class="text-center mt-5">
                        <button class="btn" onclick="addToCart(this.id);" id=${plan_id}>CHOOSE PLAN</button>
                     </div>`;
			card.append(choose);

			pricing_row.append(card);
		}
		pricing_section_container.append(pricing_row);
		$('#pricingCarousel').owlCarousel({
			loop: false,
			autoplay: true,
			autoPlaySpeed: 1000,
			autoplayHoverPause: true,
			dots: false,
			nav: true,
			navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
			responsive: {
				0: {
					items: 1
				},
				556: {
					items: 3
				}
			}
		});
		// pricing_section_mobile.innerHTML += `<div class="owl-navigation text-center p-5">
		//            <span class="owl-nav-prev mr-2"><i class="fas fa-long-arrow-alt-left"></i></span>
		//            <span class="owl-nav-next ml-2"><i class="fas fa-long-arrow-alt-right"></i></span>
		//         </div>`;
	}
}


function addToCart(id) {
	id = id.replaceAll('_', ' ');
	res = id.split('#');
	var cartitem = {
		"service": mainService,
		"duration": res[0],
		"price": res[1],
		"discount": res[2],
		"id": res[3]
	}

	for(y = 0; y < shopcart.length; y++){
		if(shopcart[y]['id'] == cartitem['id']){
			notify("Service already added to cart");
		}
		else{
			shopcart.push(cartitem);
			notify("Service added to cart");
			sessionStorage.setItem("cart", JSON.stringify(shopcart))
	
			shopcart = JSON.parse(sessionStorage.getItem("cart"));
			document.getElementById('cart_count_mobile').innerHTML = shopcart.length;
			document.getElementById('cart_count_desktop').innerHTML = shopcart.length;
		}
	}
}