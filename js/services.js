var service_subservice_list = {
	"Weight Loss": ["Nutrition + Fitness Guidance", "Nutrition Guidance Only"],
	"Muscle Gain": ["Nutrition + Fitness Guidance", "Nutrition Guidance Only"],
	"Sports Performance Guidance": ["Nutrition + Fitness Guidance", "Nutrition Guidance Only"],
	"Therapy & Education": ["Therapy", "Education"],
	"Gym Services": ["Zest Fitness Studio (Karaya)", "Zest - The Next Level"],
	"Financial Services": ["Income Tax Return Filing", "GST Return Filing", "TDS Return Filing", "Trade License Creation", "ROC Filing"]
}

try{
	var url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
    service_name = data["service"];
    service_name = service_name.replaceAll('_', ' ');
    document.getElementById('pricing_heading').innerHTML = "Pricing of " + service_name;
    for(i = 0; i < service_subservice_list[service_name].length; i++){
    	getServiceOffers(service_name, service_subservice_list[service_name][i]);
    }
  }
}
catch{
	service_name = "Weight Loss";
	document.getElementById('pricing_heading').innerHTML = "Pricing of " + service_name;
    for(i = 0; i < service_subservice_list[service_name].length; i++){
    	getServiceOffers(service_name, service_subservice_list[service_name][i]);
    }
}


function getServiceOffers(service, subservice){
	var request = new XMLHttpRequest();
	request.open(urlSet.viewOffersApi.method, urlSet.viewOffersApi.url + service + "/" + subservice, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send();
	request.onload = function () {
	    var data = JSON.parse(this.response);
	    console.log(data);
	    if(data['offers'].length > 0){
	    	displayOffers(subservice, data);
	    }
	}
}

function displayOffers(subservice, data){
	// For desktop
	var pricing_section_desktop = document.getElementById('pricing-section-desktop');
	pricing_section_desktop.innerHTML = `<h2 class="fo-40 fw-700 text-center pt-5 mfo-25">We've Got Plans for ${subservice}</h2><hr>`
	
	// For mobile
	var pricing_section_mobile = document.getElementById('pricing-section-mobile');
	pricing_section_mobile.innerHTML = `<h2 class="fo-40 fw-700 text-center pt-5 mfo-25">We've Got Plans for ${subservice}</h2><hr>`
	
	// For desktop
	var pricing_row = document.createElement('div');
	pricing_row.setAttribute('class', 'row m-0 pt-5 mb-5');

	// For mobile
	var pricing_row_mobile = document.createElement('div');
	pricing_row_mobile.setAttribute('class', 'owl-carousel mt-5');
	pricing_row_mobile.setAttribute('id', 'pricingCarousel');

	for(j = 0; j < data['offers'].length; j++){
		var card = document.createElement('div');
		if(j%2 == 0){
			card.setAttribute('class', 'bg-white pt-5 pb-5');
		}
		else{
			card.setAttribute('class', 'bg-dark pt-5 pb-5 dark-pricing');
		}
		
		var duration = document.createElement('div');
		duration.setAttribute('class', 'fo-52 fw-600 pco text-center');
		duration.innerHTML = data['offers'][j]['duration'];
		card.append(duration);

		if(data['offers'][j]['recommended'] == true){
			var recommend = document.createElement('div');
			recommend.setAttribute('class', 'pco fo-20 fw-600 text-center mb-5');
			recommend.innerHTML = "Recommended";
			card.append(recommend);
		}

		var price = document.createElement('div');
		price.setAttribute('class', 'text-center fw-600 fo-52');
		if(data['offers'][j]['discounted_price'] != undefined){
			price.innerHTML = `<span class="fo-20" style="text-decoration: line-through">₹ ${data['offers'][j]['price']}</span>
                        <span class="pco fo-36 fw-600">₹ </span>${data['offers'][j]['discounted_price']}`;
		}
		else{
			price.innerHTML = `<span class="pco fo-36 fw-600">₹ </span>${data['offers'][j]['price']}`;
		}
		card.append(price);

		var ul = document.createElement('ul');
		ul.setAttribute('class', 'pricing-section-items pl-0 mt-3');
		for(k = 0; k < data['offers'][j]['features'].length; k++){
			var li = document.createElement('li');
			li.append(data['offers'][j]['features'][k]);
			ul.append(li);
		}
		card.append(ul);

		var choose = document.createElement('div');
		var plan_id = data['subservice'].replaceAll(' ','_') + '#' + data['offers'][j]['duration'].replaceAll(' ', '_') + '#' + data['offers'][j]['price'] + '#' + data['offers'][j]['discounted_price'] + '#' + data['offers'][j]['_id'];
		choose.innerHTML = `<div class="text-center mt-5">
                        <button class="btn" onclick="triggerCheckout(this.id);" id=${plan_id}>CHOOSE PLAN</button>
                     </div>`;
        card.append(choose);

        // console.log(card);

        if(screen.width < 576){
        	pricing_row_mobile.append(card);
        }
        else{
        	var containerr = document.createElement('div');
	        containerr.setAttribute('class', 'col-sm-4');
	        containerr.append(card);
	        pricing_row.append(containerr);
        }
        
	}
	pricing_section_desktop.append(pricing_row);
	pricing_section_mobile.append(pricing_row_mobile);
	$('#pricingCarousel').owlCarousel({
        loop: true,
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
            320: {
                items: 1
            }
        }
    });
    // pricing_section_mobile.innerHTML += `<div class="owl-navigation text-center p-5">
    //            <span class="owl-nav-prev mr-2"><i class="fas fa-long-arrow-alt-left"></i></span>
    //            <span class="owl-nav-next ml-2"><i class="fas fa-long-arrow-alt-right"></i></span>
    //         </div>`;
}

function triggerCheckout(id){
	document.getElementById('checkout_service').innerHTML = service_name;
	id = id.replaceAll('_', ' ');
	res = id.split('#');
	document.getElementById('checkout_subservice').innerHTML = res[0];
	document.getElementById('checkout_duration').innerHTML = res[1];

	if(res[3] == "undefined"){
		document.getElementById('checkout_price').innerHTML = "₹ " + res[2];
	}
	else{
		document.getElementById('checkout_price').innerHTML = "₹ " + res[3];
		document.getElementById('checkout_discount').innerHTML = "₹ " + res[2];
	}

	$("#checkout").modal();
	console.log(id);
}