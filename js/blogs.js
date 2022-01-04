function getAllBlogs(){
  var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
  }
}

function showBlogs(){
	console.log(blogsData);
	var blogsSection = document.getElementById('blogsSection');
	for(i = 0; i < blogsData.length; i++){
		blogsSection.innerHTML += `<div class="p-3" data-aos="fade-right" data-aos-delay="110">
                     <div class="card p-0">
                        <a href=${blogsData[i]['link']}>
                           <div class="blog-image">
                              <img src=${blogsData[i]['image']} class="w-100">
                           </div>
                        </a>
                        <div class="blog-body">
                           <div class="fo-21 fw-700">${blogsData[i]['heading']}</div>
                           <div class="fo-14 txtco mt-3 fw-400">${blogsData[i]['description']}</div>
                           <div class="fo-12 fw-600 text-purple mt-4">READ MORE >></div>
                        </div>
                        <div class="blog-footer fo-12">${blogsData[i]['date']}</div>
                     </div>  
                  </div>  `
	}


	$('#blogsSection').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
}


function prevBlog(){
    v = parseInt($("#blogSlider input[name='blogSlider']:checked").val()) - 1;
    if(v < 1){
      v = 5;
    }
    document.getElementById('s' + v).checked = true;
  }

  function nextBlog(){
    v = parseInt($("#blogSlider input[name='blogSlider']:checked").val()) + 1;
    if(v > 5){
      v = 1;
    }
    document.getElementById('s' + v).checked = true;
  }