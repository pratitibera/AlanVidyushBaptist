var blogsData = [
  {
    "image": "https://www.linkpicture.com/q/blog1.png",
    "heading": "Bolo Zuban Cancery – Is Pan Masala Harmful for Health?",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. m dolor sit amet, consectetur adipisicing.",
    "link": "https://elementnutri.com/education/is-pan-masala-harmful-for-health/",
    "date": "May 4, 2021"
  },
  {
    "image": "https://www.linkpicture.com/q/blog4.png",
    "heading": "Bnlo Zuban Cancery – Is Pan Masala Harmful for Health?",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. m dolor sit amet, consectetur adipisicing.",
    "link": "https://elementnutri.com/education/is-pan-masala-harmful-for-health/",
    "date": "May 4, 2021"
  },
  {
    "image": "https://www.linkpicture.com/q/blog3.png",
    "heading": "Bolo Zuban Cancery – Is Pan Masala Harmful for Health?",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. m dolor sit amet, consectetur adipisicing.",
    "link": "https://elementnutri.com/education/is-pan-masala-harmful-for-health/",
    "date": "May 4, 2021"
  },
  {
    "image": "https://www.linkpicture.com/q/blog2.png",
    "heading": "Bolo Zuban Cancery – Is Pan Masala Harmful for Health?",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. m dolor sit amet, consectetur adipisicing.",
    "link": "https://elementnutri.com/education/is-pan-masala-harmful-for-health/",
    "date": "May 4, 2021"
  }
]

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