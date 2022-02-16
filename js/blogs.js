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
  if (page == 'blog_page') {
    // <div class="fo-30 fw-600 text-center mt-2 mfo-20">${data[0]['summary']}</div>
    document.getElementById('blog_page_cover').innerHTML = `<img src="${data[0]['headerImage'][0]['image']}" class="w-100">
            <div class="imageOverlay">
               <div class="fo-52 fw-600 text-center mfo-20">${data[0]['title']}</div>
               <div class="text-center mt-3 mt-md-5">
                  <a href="blog.html?id=${data[0]['slug']}">
                     <button class="btn website-button bg-dark text-white">READ MORE</button>
                  </a>
               </div>
            </div>`

  }

  var displayAllBlogs = document.getElementById('displayAllBlogs');
  for (i = 0; i < data.length; i++) {
    displayAllBlogs.innerHTML += `<div class="col-6 col-sm-4 mb-4"><a href="blog.html?id=${data[i]['slug']}">
             <img src="${data[i]['headerImage'][0]['image']}" class="w-100">
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
                  <a href="blog.html?id=${data[0]['slug']}">
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
  try {
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

    window.addEventListener("scroll", () => {
      let scrollPercentRounded = Math.round((window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100);
      document.getElementById('blogContentProgress').style.width = scrollPercentRounded + "%";
    });

    if (screen.width >= 577) {
      $("#collapseContents1").addClass("show");
      toggleContents(document.getElementById('toggleDesktopContent'));
    }
  } catch {
    document.getElementById('blogAvailable').style.display = "none";
    document.getElementById('blogNotAvailable').style.display = "block";
    console.log("Error");
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
      var contentList2 = document.getElementById('contentList2');
      for (i = 0; i < data['content'].length; i++) {
        contentList2.innerHTML += `<li class="fo-16">
                           <a href="#${data['content'][i]['id']}">
                              <i class="fas fa-circle fo-6 mr-2 bco fw-600"></i>${data['content'][i]['title']}
                           </a>
                        </li>`;
      }
      // Header image

      for (m = 0; m < data['headerImage'].length; m++) {
        if (m == 0) {
          document.getElementById('blogImageContainer').innerHTML += `<div class="carousel-item active" data-interval="${data['data_interval']}">
                        <img src="${data['headerImage'][m]['image']}" alt="${data['headerImage'][m]['title']}" width="1100" height="500">
                     </div>`;
        } else {
          document.getElementById('blogImageContainer').innerHTML += `<div class="carousel-item" data-interval="${data['data_interval']}">
                        <img src="${data['headerImage'][m]['image']}" alt="${data['headerImage'][m]['title']}" width="1100" height="500">
                     </div>`;
        }
      }
      // client info
      document.getElementById('blogWriter').innerHTML = data['client'];
      // Coaches
      if(data['coach'].length == 1){
        document.getElementById('coaches').innerHTML = `<div class="row m-0 p-500 mt-3">
                     <div class="col-12 col-sm-12 p-0">
                        <img src="${data['coach'][0]['image']}">                
                        <div class="mt-3 fw-700 mfo-12">${data['coach'][0]['designation']} : ${data['coach'][0]['name']}</div>
                     </div>
                  </div>`
      }
      else if(data['coach'].length == 2){
          document.getElementById('coaches').innerHTML = `<div class="row m-0 p-300 mt-3">
                     <div class="col-6 col-sm-6 p-0">
                        <img src="${data['coach'][0]['image']}">                
                        <div class="mt-3 fw-700 mfo-12">${data['coach'][0]['designation']} : ${data['coach'][0]['name']}</div>
                     </div>
                     <div class="col-6 col-sm-6 p-0">
                        <img src="${data['coach'][1]['image']}">                
                        <div class="mt-3 fw-700 mfo-12">${data['coach'][1]['designation']} : ${data['coach'][1]['name']}</div>
                     </div>
                  </div>`
        }
          else if(data['coach'].length == 3){
            document.getElementById('coaches').innerHTML = `<div class="text-center fw-700 mt-3 mfo-12">COACH</div>
                  <div class="row m-0 mt-3">
                     <div class="col-4 col-sm-4 p-0">
                        <img src="${data['coach'][0]['image']}">                
                        <div class="mt-3 fw-700 mfo-12">${data['coach'][0]['designation']} : ${data['coach'][0]['name']}</div>
                     </div>
                     <div class="col-4 col-sm-4 p-0">
                        <img src="${data['coach'][1]['image']}">                
                        <div class="mt-3 fw-700 mfo-12">${data['coach'][1]['designation']} : ${data['coach'][1]['name']}</div>
                     </div>
                     <div class="col-4 col-sm-4 p-0">
                        <img src="${data['coach'][2]['image']}">                
                        <div class="mt-3 fw-700 mfo-12">${data['coach'][2]['designation']} : ${data['coach'][2]['name']}</div>
                     </div>
                  </div>`
          }
      // Brands
      document.getElementById('brands').innerHTML = "BRANDS: " + data['brands'];
      // Blog heading
      document.getElementById('blogHeading').append(data['title']);
      // Blog date
      document.getElementById('blogdate').append(data['date']);

      // Blog content
      for(i = 0; i < data['body'].length; i++){
        document.getElementById('blogContent').innerHTML += `<div class="blogContent fw-600 fo-30 mfo-18 mb-3" id="topic${data['body'][i]['id']}">${data['body'][i]['heading']}</div>
        <div class="blogContent fo-17 mfo-15">${data['body'][i]['paragraph']}</div>`;
      }

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
          960: {
            items: 4
          }
        }
      });

      var postUrl = `https://alanvidyushbaptist.com/blog.html?id=` + data['slug'];
      var postTitle = data['summary'];

      console.log(postUrl);
      console.log(postTitle);

      document.getElementById('shareBlog').innerHTML = `<div class="col-1 d-block d-sm-none"></div>
                           <div class="col-2 text-center mb-5">
                              <a href="https://www.facebook.com/sharer/sharer.php?u=${postUrl}"e=${postTitle} ${postUrl}" target="_blank">
                                 <i class="fab fa-facebook fw-600 fo-26 text-dark mfo-20"></i>
                              </a>
                           </div>
                           <div class="col-2 text-center mb-5">
                              <a href="https://www.instagram.com/alan_baptist/" target="_blank">
                                 <i class="fab fa-instagram text-dark fw-600 fo-26 mfo-20"></i>
                              </a>
                           </div>
                           <div class="col-2 text-center mb-5">
                              <a href="https://www.linkedin.com/shareArticle/?mini=true&url=${postUrl}&title=${postTitle}?&source=${postUrl}" target="_blank">
                                 <i class="fab fa-linkedin-in text-dark fw-600 fo-26 mfo-20"></i>
                              </a>
                           </div>
                           <div class="col-2 text-center mb-5">
                              <a href="https://mail.google.com/mail/u/0/?tf=cm&su=ALAN+BAPTIST&body=${postTitle}+${postUrl}" target="_blank">
                                 <i class="fas fa-envelope text-dark fw-600 fo-26 mfo-20"></i>
                              </a>
                           </div>
                           <div class="col-2 text-center mb-5">
                              <a href="https://api.whatsapp.com/send?text=${postTitle} ${postUrl}" target="_blank">
                                 <i class="fab fa-whatsapp text-dark fw-600 fo-26 mfo-20"></i>
                              </a>
                           </div>
                           <div class="col-1 d-block d-sm-none"></div>`;
      document.getElementById('blogAvailable').style.display = "block";
      document.getElementById('blogNotAvailable').style.display = "none";

      var x = $("#stickyContents").offset();
      x = x.top - 150;

      var header = document.getElementById("stickyContents");

      window.onscroll = function() {
        if(screen.width > 500){
          if (window.pageYOffset > x) {
            header.classList.add("sticky2");
          } else {
            header.classList.remove("sticky2");
          }
        }
        else{
          header.classList.add("sticky2");
        }
      };
    } catch {
      document.getElementById('blogAvailable').style.display = "none";
      document.getElementById('blogNotAvailable').style.display = "block";
      console.log("Error");
    }
  }
}


// Partner blogs
var partner_name;

function getAllPartnerBlogs() {
  try {
    var url = document.location.href,
      params = url.split("?")[1].split("&"),
      data = {},
      tmp;
    for (var i = 0, l = params.length; i < l; i++) {
      tmp = params[i].split("=");
      data[tmp[0]] = tmp[1];
      partner_name = data["partner"];
    }
  } catch {
    partner_name = "Vivek_Baptist";
  }
  partner_name = partner_name.replaceAll('_', ' ');
  document.getElementById('partner_name').innerHTML = "BLOGS BY " + partner_name.toUpperCase();
  console.log(partner_name);
  getBlogsByPartner();
}

function getBlogsByPartner() {
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