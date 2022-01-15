// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


// For collapsible menu sidebar
var collapsibleSidebar = document.getElementById("collapsibleSidebar");
var close_collapsibleSidebar = document.getElementById("close_collapsibleSidebar");
var overlay = document.getElementById("overlay");

collapsibleSidebar.addEventListener("click", function () {
    document.querySelector(".menuSidebar").classList.add("navToggle");
    document.querySelector(".header-nav").classList.add("d-none");
    document.querySelector(".header-nav").classList.remove("d-flex");
    document.querySelector(".header-consult").classList.add("d-none");
    document.querySelector(".header-consult").classList.remove("d-block");
    overlay.style.display = "block";
});

close_collapsibleSidebar.addEventListener("click", function () {
    document.querySelector(".menuSidebar").classList.remove("navToggle");
    document.querySelector(".header-nav").classList.add("d-flex");
    document.querySelector(".header-nav").classList.remove("d-none");
    document.querySelector(".header-consult").classList.add("d-block");
    document.querySelector(".header-consult").classList.remove("d-none");
    overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
    document.querySelector(".menuSidebar").classList.remove("navToggle");
    document.querySelector(".header-nav").classList.add("d-flex");
    document.querySelector(".header-nav").classList.remove("d-none");
    document.querySelector(".header-consult").classList.add("d-block");
    document.querySelector(".header-consult").classList.remove("d-none");
    overlay.style.display = "none";
});

// owl carousel
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 4
    }
}

$(document).ready(function () {
    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();
});

$(".navbar-nav > li").click(function () {
    // To collapse navbar in mobile view when some link item is selected / clicked
    $(".navbar-nav > li > a").removeClass('active');
    $(this).children('a').addClass('active');
    $(".collapse").collapse('hide');

    // for sidebar
    document.querySelector(".menuSidebar").classList.remove("navToggle");
    document.querySelector(".header-nav").classList.add("d-flex");
    document.querySelector(".header-nav").classList.remove("d-none");
    document.querySelector(".header-consult").classList.add("d-block");
    document.querySelector(".header-consult").classList.remove("d-none");
    overlay.style.display = "none";


    // To handle the bar and cross icon at the same time
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

$(".collapseContents2 > li").click(function () {
    // To collapse contents in mobile view when some content item is selected / clicked
    $("#collapseContents2").collapse('hide');
});

$("#collapsibleBlogCategories .row > div").click(function () {
    // To collapse contents in mobile view when some blog category is selected / clicked
    toggleContents(document.getElementById('handleBlogCategories'));
    $("#collapsibleBlogCategories").collapse('hide');
    $("#collapsibleBlogCategories .row > div").removeClass("active mo-active");
    $(this).addClass("active mo-active");
    var blog_select_id = this.id;
    if(blog_select_id.split('_')[1] == '0' || blog_select_id.split('_')[1] == '1'){
        getAllBlogs();
    }
    else{
        document.location.href = "category.html?category=" + blog_select_id.split('_')[1];
    }
});

function toggleContents(x) {
    // To handle the upward and downward arrow icon of the contents section in blogs
    x.classList.toggle("fa-chevron-up");
}

function displayPortfolio() {
    $('#portfolioSection').owlCarousel({
        loop: true,
        autoplay: true,
        // autoplayTimeout: 3000,
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
            },
            560: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    });
}


const searches = document.querySelectorAll('.searches');
searches.forEach(el => el.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
        document.location.href = "searchedBlogs.html?search=" + el.value;
    }
}));

function search(id){
    var keyword = document.getElementById(id + 'i').value;
    document.location.href = "searchedBlogs.html?search=" + keyword;
}

















// Blog section on index page
function getFeaturedBlogs() {
  var request = new XMLHttpRequest();
  request.open(urlSet.get_featuredblogApi.method, urlSet.get_featuredblogApi.url + "?index=0&limit=5", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    var blogSlider = document.getElementById('blogSlider');
    for (i = 0; i < data.length; i++) {
      blogSlider.innerHTML += `<label for="s${i}" id="slide${i}">
                     <div class="blogcardimage">
                        <a href="blog.html?id=${data[i]['_id']}">
                           <img src=${data[i]['headerImage']['image']} height="100%" width="100%">
                        </a>
                     </div>
                     <div class="blog-body">
                        <div class="fo-21 fw-700 mfo-12">${data[i]['title']}</div>
                        <div class="fo-14 txtco mt-3 fw-400 mfo-11">${data[i]['summary']}</div>
                        <div class="mt-4">
                           <a href="blog.html?id=${data[i]['_id']}" class="fo-12 fw-600 bco mfo-11">READ MORE >></a>
                        </div>
                     </div>
                     <div class="blog-footer fo-12 mfo-11">${data[i]['date']}</div>
                  </label>`
    }
  }
}

function prevBlog() {
  v = parseInt($("#blogSlider input[name='blogSlider']:checked").val()) - 1;
  if (v < 1) {
    v = 5;
  }
  document.getElementById('s' + v).checked = true;
}

function nextBlog() {
  v = parseInt($("#blogSlider input[name='blogSlider']:checked").val()) + 1;
  if (v > 5) {
    v = 1;
  }
  document.getElementById('s' + v).checked = true;
}