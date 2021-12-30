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

$("#collapsibleBlogCategories .col-sm-2").click(function () {
    // To collapse contents in mobile view when some blog category is selected / clicked
    toggleContents(document.getElementById('handleBlogCategories'));
    $("#collapsibleBlogCategories").collapse('hide');
    $("#collapsibleBlogCategories .col-sm-2").removeClass("active mo-active");
    $(this).addClass("active mo-active");
});

function toggleContents(x) {
    // To handle the upward and downward arrow icon of the contents section in blogs
    x.classList.toggle("fa-chevron-up");
}

function manageBlogs() {
    document.getElementById("navItems").style.display = "contents";
    document.getElementById("contentItems").style.display = "none";

    var distance = $('.blogContents').offset().top;
    $(window).scroll(function () {
        if (screen.width < 577) {
            if ($(this).scrollTop() >= distance) {
                document.getElementById("navItems").style.display = "none";
                document.getElementById("contentItems").style.display = "block";
                document.getElementById("contentItems").style.width = "100%";
                $("nav").removeClass("bg-dark");
                $("nav").addClass("bg-white");
            } else {
                document.getElementById("navItems").style.display = "contents";
                document.getElementById("contentItems").style.display = "none";
                $("nav").removeClass("bg-white");
                $("nav").addClass("bg-dark");
            }
        }
    });

    window.addEventListener("scroll", () => {
        let scrollPercentRounded = Math.round((window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100);
        document.getElementById('blogContentProgress').style.width = scrollPercentRounded + "%";
    });

    if (screen.width >= 577) {
        $("#collapseContents1").addClass("show");
        toggleContents(document.getElementById('toggleDesktopContent'));
    }

    $('#blogsSection').owlCarousel({
        loop: true,
        autoplay: true,
        // autoplayTimeout: 3000,
        autoPlaySpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
}

function displayPortfolio() {
    $('#blogsSection').owlCarousel({
        loop: true,
        autoplay: true,
        // autoplayTimeout: 3000,
        autoPlaySpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
}