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
    if(blog_select_id.split('_')[0] == 'category'){
        getBlogCategoryWise(blog_select_id.split('_')[1]);
    }
    else{
        getBlogSubcategoryWise(blog_select_id.split('_')[1]);
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


function showPricing(){
    $('#pricingCarousel').owlCarousel({
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
            }
        }
    });
}

function readMoreBlogs(){
    $(".partners-section2 .col-6").removeClass('d-none');
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