// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


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
        items: 3
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

$(".navbar-nav > li").click(function(){
    $(".navbar-nav > li > a").removeClass('active');
    $(this).children('a').addClass('active');
    $(".collapse").collapse('hide');
});