var limit = 6;
var index = 0;

function getAllBlogs(page) {
  var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + "?index=" + index + "&limit=" + limit, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    if (data.length > 0) {
      index = data.length;
      displayBlogs(data, page);
    } else {
      document.getElementById('readmorebutton').innerHTML = `<div class="fo-20 fw-600 text-center"><p>That's all we have</p></div>`;
    }
  }
}

function displayBlogs(data, page) {
  if(page == 'blog_page'){
    document.getElementById('blog_page_cover').innerHTML = `<img src="${data[0]['headerImage']['image']}" class="w-100">
            <div class="imageOverlay">
               <div class="fo-52 fw-600 text-center mfo-30">${data[0]['title']}</div>
               <div class="fo-30 fw-600 text-center mt-2 mfo-20">${data[0]['summary']}</div>
               <div class="text-center mt-5">
                  <a href="blog.html?id=${data[0]['_id']}">
                     <button class="btn website-button bg-dark text-white">READ MORE</button>
                  </a>
               </div>
            </div>`

  }

  var displayAllBlogs = document.getElementById('displayAllBlogs');
  for (i = 0; i < data.length; i++) {
    displayAllBlogs.innerHTML += `<div class="col-6 col-sm-4 mb-4"><a href="blog.html?id=${data[i]['_id']}">
             <img src="${data[i]['headerImage']['image']}" class="w-100">
             <div class="partners_latest_blogs_title fo-20 fw-600 text-center mfo-14 text-dark">${data[i]['title']}</div>
             <div class="partners_latest_blogs_subtitle fo-14 fw-400 text-center mfo-11 text-dark">${data[i]['summary']}</div>
          </a></div>`
  }
}



























// Category.html

var category;
var subcategory;

var blogCatandSub = {
  "Fitness": ["Weight Loss", "Muscle Gain", "Body Recomposition", "Sports Performance", "Fitness Modelling", "Fitness Myths"],
  "Nutrition": ["Weight Loss", "Weight Gain", "Nutrition Concepts", "Recipes", "Nutrition Myths"],
  "Education": ["Career", "Skills"],
  "Psychology": ["Sex", "Relationships", "Communication", "Psych Concepts", "Philosophy", "Spirituality"],
  "Finance": ["Taxation", "Investment", "Business", "Commerce", "Economics"]
}

function getAllCategoryBlogs() {
  try {
    var url = document.location.href,
      params = url.split("?")[1].split("&"),
      data = {},
      tmp;
    for (var i = 0, l = params.length; i < l; i++) {
      tmp = params[i].split("=");
      data[tmp[0]] = tmp[1];
      category = data["category"];
    }
  } catch {
    category = "Fitness";
  }

  getCategorisedBlogs();

  var collapsibleBlogCategoriesContainer = document.getElementById('collapsibleBlogCategoriesContainer');
  collapsibleBlogCategoriesContainer.innerHTML = `<div id="subcategory_0" class="active d-none d-sm-block">TOPICS</div>
               <div id="subcategory_1" class="mo-active"><i class="fas fa-dumbbell mr-2"></i>ALL</div>`;
  for (i = 0; i < blogCatandSub[category].length; i++) {
    collapsibleBlogCategoriesContainer.innerHTML += `<div id="subcategory_${blogCatandSub[category][i]}"><i class="fas fa-dumbbell mr-2"></i>${blogCatandSub[category][i]}</div>`;
  }

  $("#collapsibleBlogCategoriesContainer > div").click(function () {
    toggleContents(document.getElementById('handleBlogCategories'));
    $("#collapsibleBlogCategories").collapse('hide');
    $("#collapsibleBlogCategories .row > div").removeClass("active mo-active");
    $(this).addClass("active mo-active");
    var blog_select_id = this.id;
    subcategory = blog_select_id.split('_')[1];
    index = 0;
    limit = 6;
    document.getElementById('displayAllBlogs').innerHTML = "";
    if (subcategory == '0' || subcategory == '1') {
      document.getElementById('readmorebutton').innerHTML = `<button class="btn website-button bg-dark text-white" onclick="getCategorisedBlogs();">READ MORE</button>`;
      getCategorisedBlogs();
      // getBlogCategoryWise(blog_select_id.split('_')[1]);
    } else {
      document.getElementById('readmorebutton').innerHTML = `<button class="btn website-button bg-dark text-white" onclick="getSubcategorisedBlogs();">READ MORE</button>`;
      getSubcategorisedBlogs();
    }
  });
}

function getCategorisedBlogs() {
  var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + "?index=" + index + "&limit=" + limit + "&category=" + category, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    if (index == 0) {
      document.getElementById('blogPage_heading').innerHTML = category;
      document.getElementById('blog_page_cover').innerHTML = `<img src="${data[0]['headerImage']['image']}" class="w-100">
            <div class="imageOverlay">
               <div class="fo-52 fw-600 text-center mfo-30">${data[0]['title']}</div>
               <div class="fo-30 fw-600 text-center mt-2 mfo-20">${data[0]['summary']}</div>
               <div class="text-center mt-5">
                  <a href="blog.html?id=${data[0]['_id']}">
                     <button class="btn website-button bg-dark text-white">READ MORE</button>
                  </a>
               </div>
            </div>`
    }

    if (data.length > 0) {
      if (index == 0) {
        document.getElementById('category_heading').innerHTML = "Blogs on " + category;
        document.getElementById('readmorebutton').innerHTML = `<button class="btn website-button bg-dark text-white" onclick="getCategorisedBlogs();">READ MORE</button>`
      }
      index = data.length;
      displayBlogs(data);
    } else {
      if (index > 0) {
        document.getElementById('readmorebutton').innerHTML = `<div class="fo-20 fw-600 text-center"><p>That's all we have</p></div>`;
      } else {
        document.getElementById('category_heading').innerHTML = "";
        document.getElementById('readmorebutton').innerHTML = "";
      }
    }
  }
}

function getSubcategorisedBlogs() {
  var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + "?index=" + index + "&limit=" + limit + "&category=" + category + "&subcategory=" + subcategory, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    if (index == 0) {
      document.getElementById('blogPage_heading').innerHTML = subcategory;
    }

    if (data.length > 0) {
      if (index == 0) {
        document.getElementById('category_heading').innerHTML = "Blogs on " + subcategory;
      }
      index = data.length;
      displayBlogs(data);
    } else {
      if (index > 0) {
        document.getElementById('readmorebutton').innerHTML = `<div class="fo-20 fw-600 text-center"><p>That's all we have</p></div>`;
      } else {
        document.getElementById('category_heading').innerHTML = "";
        document.getElementById('readmorebutton').innerHTML = "";
      }
    }
  }
}




























// Single blog
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
    try {
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
            items: 1,
            autoWidth: false
          },
          // 320: {
          //   items: 1
          // },
          // 560: {
          //   items: 2
          // },
          960: {
            items: 3
          }
        }
      });
      document.getElementById('blogAvailable').style.display = "block";
      document.getElementById('blogNotAvailable').style.display = "none";
    } catch {
      document.getElementById('blogAvailable').style.display = "none";
      document.getElementById('blogNotAvailable').style.display = "block";
      console.log("Error");
    }
  }
}































// Partner blogs
var partner_name;

function getAllPartnerBlogs(){
  try{
    var url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
    for (var i = 0, l = params.length; i < l; i++) {
      tmp = params[i].split("=");
      data[tmp[0]] = tmp[1];
      partner_name = data["partner"];
    }
  }
  catch{
    partner_name = "Vivek_Baptist";
  }
  partner_name = partner_name.replaceAll('_', ' ');
  document.getElementById('partner_name').innerHTML = "BLOGS BY " + partner_name.toUpperCase();
  console.log(partner_name);
  getBlogsByPartner();
}

function getBlogsByPartner(){
  var request = new XMLHttpRequest();
  request.open(urlSet.get_AuthorblogApi.method, urlSet.get_AuthorblogApi.url + "?index=" + index + "&limit=" + limit + "&author=" + partner_name, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    if (data.length > 0) {
      index = data.length;
      displayBlogs(data);
    } else {
      document.getElementById('readmorebutton').innerHTML = `<div class="fo-20 fw-600 text-center"><p>That's all we have</p></div>`;
    }
  }
}