var limit = 6;
var index = 0;

function manageBlogs() {
  var url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
    blog_id = data["id"];
  }

  displaySingleBlog(blog_id);
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
}

function displaySingleBlog(blog_id) {
  var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + blog_id, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    // Contents 
    var contentList1 = document.getElementById('contentList1');
    var contentList2 = document.getElementById('contentList2');
    for (i = 0; i < data['content'].length; i++) {
      contentList1.innerHTML += `<li class="fo-16">
                           <a href="#${data['content'][i]['id']}">
                              <i class="fas fa-circle fo-6 mr-2 bco fw-600"></i>${data['content'][i]['title']}
                           </a>
                        </li>`;
      contentList2.innerHTML += `<li class="fo-16">
                           <a href="#${data['content'][i]['id']}">
                              <i class="fas fa-circle fo-6 mr-2 bco fw-600"></i>${data['content'][i]['title']}
                           </a>
                        </li>`;
    }
    // Header image
    document.getElementById('blogImageContainer').src = data['headerImage']['image'];
    //Client info
    document.getElementById('blogWriter').innerHTML = data['client'];
    // Blog heading
    document.getElementById('blogHeading').append(data['title']);
    // Blog date
    document.getElementById('blogdate').append(data['blogdate']);

    // Blog content
    document.getElementById('blogContent').innerHTML = data['body'];

    // Gallery
    var blogsSection = document.getElementById('blogsSection');
    for (i = 0; i < data['gallery'].length; i++) {
      blogsSection.innerHTML += `<div class="p-2">
                     <div class="card p-0">
                        <img src=${data['gallery'][i]['image']} class="w-100">
                     </div>  
                  </div> `
    }
    $('#blogsSection').owlCarousel({
      loop: true,
      autoplay: true,
      autoWidth: true,
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
          items: 6
        }
      }
    });
  }
}

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

function getAllBlogs() {
  var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + "?index=" + index + "&limit=" + limit, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    index = data.length;
    var displayAllBlogs = document.getElementById('displayAllBlogs');
    for (i = 0; i < data.length; i++) {
      displayAllBlogs.innerHTML += `<div class="col-6 col-sm-4 mb-4"><a href="blog.html?id=${data[i]['_id']}">
               <img src="${data[i]['image']}" class="w-100">
               <div class="partners_latest_blogs_title fo-20 fw-600 text-center mfo-14 text-dark">${data[i]['title']}</div>
               <div class="partners_latest_blogs_subtitle fo-14 fw-400 text-center mfo-11 text-dark">${data[i]['summary']}</div>
            </a></div>`
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