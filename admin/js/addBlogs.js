// Blog categories and subcategories

var blogCatandSub = [{
		"category": "Fitness",
		"subcategory": ["Weight Loss", "Muscle Gain", "Body Recomposition", "Sports Performance", "Fitness Modelling", "Fitness Myths"]
	},
	{
		"category": "Nutrition",
		"subcategory": ["Weight Loss", "Weight Gain", "Nutrition Concepts", "Recipes", "Nutrition Myths"]

	},
	{
		"category": "Education",
		"subcategory": ["Career", "Skills"]

	},
	{
		"category": "Psychology",
		"subcategory": ["Sex", "Relationships", "Communication", "Psychology Concepts", "Philosophy", "Spirituality"]

	},
	{
		"category": "Finance",
		"subcategory": ["Taxation", "Investment", "Business", "Commerce", "Economics"]

	}
]

function getBlogCategory() {
	var blogcategory_select = document.getElementById('blogcategory');
	for (i = 0; i < blogCatandSub.length; i++) {
		var cat_option = document.createElement('option');
		cat_option.value = blogCatandSub[i]['category'] + "_" + i;
		cat_option.append(blogCatandSub[i]['category']);
		blogcategory_select.append(cat_option);
	}
}

function getBlogSubcategory(val) {
	var indexx = val.split('_')[1];
	var blogsubcategory_select = document.getElementById('blogsubcategory');
	blogsubcategory_select.innerHTML = "";
	for (i = 0; i < blogCatandSub[indexx]['subcategory'].length; i++) {
		var subcat_option = document.createElement('option');
		subcat_option.value = blogCatandSub[indexx]['subcategory'][i];
		subcat_option.append(blogCatandSub[indexx]['subcategory'][i]);
		blogsubcategory_select.append(subcat_option);
	}
}

var cover = []; // Stores the cover images list
var coach = []; // Stores the coach images list
var content = []; // Stores the blog body list
var contentList = []; // Stores the blog contents
var gallery = []; // Stores the gallery images

// Cover image
function addCoverImage(){
	var headerimageurl = document.getElementById('headerimageurl').value;
	var headerimagetitle = document.getElementById('headerimagetitle').value;
	dic = {
		"image": headerimageurl,
		"title": headerimagetitle
	}
	cover.push(dic);
	coverList = {
		"cover": cover
	}
	document.getElementById('headerimageurl').value = "";
	document.getElementById('headerimagetitle').value = "";

	document.getElementById('headerimageList').innerHTML = "";
	console.log(coverList['cover']);
	for (i = 0; i < coverList['cover'].length; i++) {
		document.getElementById('headerimageList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${coverList['cover'][i]['title']}<span class="ml-3 float-right cursor-pointer" id="cover_${i}" onclick="removeCoverImage(this.id)">x</span></div>
                     <img src=${coverList['cover'][i]['image']} class="w-100">
                  </div>`
	}
}

function removeCoverImage(id) {
	var id = parseInt(id.split('_')[1]);
	coverList['cover'].splice(id, 1);
	document.getElementById('headerimageList').innerHTML = "";
	for (i = 0; i < coverList['cover'].length; i++) {
		document.getElementById('headerimageList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${coverList['cover'][i]['title']}<span class="ml-3 float-right cursor-pointer" id="cover_${i}" onclick="removeImage(this.id)">x</span></div>
                     <img src=${coverList['cover'][i]['image']} class="w-100">
                  </div>`
	}
}


// Coach image
function addCoachImage(){
	var coachname = document.getElementById('coachname').value;
	var coachimage = document.getElementById('coachimage').value;
	var coachdesignation = document.getElementById('coachdesignation').value;
	dic = {
		"image": coachimage,
		"name": coachname,
		"designation": coachdesignation
	}
	coach.push(dic);
	coachList = {
		"coach": coach
	}
	document.getElementById('coachimage').value = "";
	document.getElementById('coachname').value = "";
	document.getElementById('coachdesignation').value = "";

	document.getElementById('coachList').innerHTML = "";
	for (i = 0; i < coachList['coach'].length; i++) {
		document.getElementById('coachList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${coachList['coach'][i]['name']} - ${coachList['coach'][i]['designation']}<span class="ml-3 float-right cursor-pointer" id="coach_${i}" onclick="removecoachImage(this.id)">x</span></div>
                     <img src=${coachList['coach'][i]['image']} class="w-100">
                  </div>`
	}
}

function removecoachImage(id) {
	var id = parseInt(id.split('_')[1]);
	coachList['coach'].splice(id, 1);
	document.getElementById('coachList').innerHTML = "";
	for (i = 0; i < coachList['coach'].length; i++) {
		document.getElementById('coachList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${coachList['coach'][i]['name']} - ${coachList['coach'][i]['designation']}<span class="ml-3 float-right cursor-pointer" id="coach_${i}" onclick="removeImage(this.id)">x</span></div>
                     <img src=${coachList['coach'][i]['image']} class="w-100">
                  </div>`
	}
}



// Blog body
function addBlogBody(){
	var contentid = document.getElementById('contentid').value;
	var contentheading = document.getElementById('contentheading').value;
	var contentpara = document.getElementById('contentpara').value;
	dic = {
		"id": parseInt(contentid),
		"heading": contentheading,
		"paragraph": contentpara
	}
	content.push(dic);
	content.sort(function(a, b) {
		return a.id - b.id;
	});
	blogcontentList = {
		"content": content
	}
	var contentid = document.getElementById('contentid').value = "";
	var contentheading = document.getElementById('contentheading').value = "";
	var contentpara = document.getElementById('contentpara').value = "";

	document.getElementById('blogcontent').innerHTML = "";
	console.log(blogcontentList['content']);
	for (i = 0; i < blogcontentList['content'].length; i++) {
		document.getElementById('blogcontent').innerHTML += `<div class="col-sm-12 mb-5">
                     <div class="font-weight-bolder">${blogcontentList['content'][i]['id']} - ${blogcontentList['content'][i]['heading']}<span class="ml-3 float-right cursor-pointer" id="content_${i}" onclick="removecontentImage(this.id)">x</span></div>
                     <div>${blogcontentList['content'][i]['paragraph']}</div>
                  </div>`
	}
}

function removecontentImage(id) {
	var id = parseInt(id.split('_')[1]);
	blogcontentList['content'].splice(id, 1);
	document.getElementById('blogcontent').innerHTML = "";
	for (i = 0; i < blogcontentList['content'].length; i++) {
		document.getElementById('blogcontent').innerHTML += `<div class="col-sm-12 mb-5">
                     <div class="font-weight-bolder">${blogcontentList['content'][i]['id']} - ${blogcontentList['content'][i]['heading']}<span class="ml-3 float-right cursor-pointer" id="content_${i}" onclick="removecontentImage(this.id)">x</span></div>
                     <div>${blogcontentList['content'][i]['paragraph']}</div>
                  </div>`
	}
}

// Blog contents
function addContents() {
	var content = document.getElementById('content').value;
	contentList.push(content);
	document.getElementById('contentList').innerHTML = "";
	for (i = 0; i < contentList.length; i++) {
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">
               <span class="contentsPage">${contentList[i]}</span>
               <span class="ml-3 cursor-pointer" id="blogContent2_${i}" onclick="removeContent(this.id)">x</span>
            </div>`;
	}
	document.getElementById('content').value = "";
}

function removeContent(id) {
	var id = parseInt(id.split('_')[1]);
	contentList.splice(id, 1);
	document.getElementById('contentList').innerHTML = "";
	for (i = 0; i < contentList.length; i++) {
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">
               <span class="contentsPage">${contentList[i]}</span>
               <span class="ml-3 cursor-pointer" id="blogContent2_${i}" onclick="removeContent(this.id)">x</span>
            </div>`;
	}
	document.getElementById('content').value = "";
}


// Gallery images
function addImage() {
	var gallerytitle = document.getElementById('gallerytitle').value;
	var galleryimage = document.getElementById('galleryimage').value;
	dic = {
		"image": galleryimage,
		"title": gallerytitle
	}
	gallery.push(dic);
	galleryList = {
		"gallery": gallery
	}
	document.getElementById('gallerytitle').value = "";
	document.getElementById('galleryimage').value = "";

	document.getElementById('galleryList').innerHTML = "";
	for (i = 0; i < galleryList['gallery'].length; i++) {
		document.getElementById('galleryList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${galleryList['gallery'][i]['title']}<span class="ml-3 float-right cursor-pointer" id="gallery_${i}" onclick="removeImage(this.id)">x</span></div>
                     <img src=${galleryList['gallery'][i]['image']} class="w-100">
                  </div>`
	}
}

function removeImage(id) {
	var id = parseInt(id.split('_')[1]);
	galleryList['gallery'].splice(id, 1);
	document.getElementById('galleryList').innerHTML = "";
	for (i = 0; i < galleryList['gallery'].length; i++) {
		document.getElementById('galleryList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${galleryList['gallery'][i]['title']}<span class="ml-3 float-right cursor-pointer" id="gallery_${i}" onclick="removeImage(this.id)">x</span></div>
                     <img src=${galleryList['gallery'][i]['image']} class="w-100">
                  </div>`
	}
}



// Add blog
function addBlog() {
	var listOfContents = []; // Stores the final blog contents

	for (i = 0; i < contentList.length; i++) {
		dic = {
			"id": "topic" + i,
			"title": contentList[i]
		}
		listOfContents.push(dic);
	}

	var client = document.getElementById('client').innerHTML;
	var brands = document.getElementById('brands').value;
	var author = document.getElementById('author').value;
	var blogtitle = document.getElementById('blogtitle').value;
	var blogdate = document.getElementById('blogdate').value;
	var blogsummary = document.getElementById('blogsummary').value;
	var blogcategory = (document.getElementById('blogcategory').value).split('_')[0];
	var blogsubcategory = document.getElementById('blogsubcategory').value;
	var blogtarget = document.getElementById('blogtarget').value;

	var slug = blogtitle.replace(/[^a-zA-Z0-9 ]/g, "");
	var slug = slug.replaceAll(" ", "_");
	var slug = encodeURIComponent(slug);

	if (client != '' && blogtitle != '' && blogdate != '' && blogsummary != '' && blogcategory != '' && blogsubcategory != '' && contentList.length > 0 && galleryList['gallery'].length > 0  && coverList['cover'].length > 0 && blogcontentList['content'].length > 0) {
		var json = {
			"date": blogdate,
			"title": blogtitle,
			"author": author,
			"headerImage": coverList['cover'],
			"slug": slug,
			"summary": blogsummary,
			"body": blogcontentList['content'],
			"category": blogcategory,
			"subcategory": blogsubcategory,
			"client": client,
			"brands": brands,
			"coach": coachList['coach'],
			"content": listOfContents,
			"gallery": galleryList['gallery'],
			"target": blogtarget
		}
		console.log(json);
		var request = new XMLHttpRequest();
		request.open(urlSet.post_blogApi.method, urlSet.post_blogApi.url, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.setRequestHeader("authorization", authtoken);
		request.send(JSON.stringify(json));
		request.onload = function () {
			var data = JSON.parse(this.response);
			console.log(data);
			if (data['message'] == "Blog has been added") {
				alert("Blog successfully added");
				location.reload();
			} else {
				alert("Could not add blog");
			}
		}
	} else {
		alert("Please fill all details")
	}
}