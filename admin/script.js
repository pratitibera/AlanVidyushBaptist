var contentList = [];
var gallery = [];
var listOfContents = []

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
	var index = val.split('_')[1];
	var blogsubcategory_select = document.getElementById('blogsubcategory');
	blogsubcategory_select.innerHTML = "";
	for (i = 0; i < blogCatandSub[index]['subcategory'].length; i++) {
		var subcat_option = document.createElement('option');
		subcat_option.value = blogCatandSub[index]['subcategory'][i];
		subcat_option.append(blogCatandSub[index]['subcategory'][i]);
		blogsubcategory_select.append(subcat_option);
	}
}

function addContents() {
	var content = document.getElementById('content').value;
	contentList.push(content);
	document.getElementById('contentList').innerHTML = "";
	for (i = 0; i < contentList.length; i++) {
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">${contentList[i]}<span class="ml-3 cursor-pointer" id="blogContent_${i}" onclick="removeContent(this.id)">x</span></div>`;
	}
	document.getElementById('content').value = "";
}

function removeContent(id) {
	var id = parseInt(id.split('_')[1]);
	contentList.splice(id, 1);
	document.getElementById('contentList').innerHTML = "";
	for (i = 0; i < contentList.length; i++) {
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">${contentList[i]}<span class="ml-3 cursor-pointer" id="blogContent_${i}" onclick="removeContent(this.id)">x</span></div>`;
	}
	document.getElementById('content').value = "";
}

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

function addBlog() {
	for (i = 0; i < contentList.length; i++) {
		dic = {
			"id": "topic" + i,
			"title": contentList[i]
		}
		listOfContents.push(dic);
	}

	var headerimageurl = document.getElementById('headerimageurl').value;
	var headerimagetitle = document.getElementById('headerimagetitle').value;
	var client = document.getElementById('client').value;
	var blogtitle = document.getElementById('blogtitle').value;
	var blogdate = document.getElementById('blogdate').value;
	var blogcontent = document.getElementById('blogcontent').value;
	var blogsummary = document.getElementById('blogsummary').value;
	var blogcategory = (document.getElementById('blogcategory').value).split('_')[0];
	var blogsubcategory = document.getElementById('blogsubcategory').value;

	var slug = blogtitle.replace(/[^a-zA-Z0-9 ]/g, "");
	var slug = slug.replaceAll(" ", "_");
	var slug = encodeURIComponent(slug);
	console.log(slug);


	if (headerimageurl != '' && headerimagetitle != '' && client != '' && blogtitle != '' && blogdate != '' && blogcontent != '' && blogsummary != '' && blogcategory != '' && blogsubcategory != '' && contentList.length > 0 && galleryList['gallery'].length > 0) {
		var json = {
			"date": blogdate,
			"title": blogtitle,
			"headerImage": {
				"title": headerimagetitle,
				"image": headerimageurl
			},
			"slug": slug,
			"summary": blogsummary,
			"body": blogcontent,
			"category": blogcategory,
			"subcategory": blogsubcategory,
			"client": client,
			"content": listOfContents,
			"gallery": galleryList['gallery']
		}
		console.log(json);
		var request = new XMLHttpRequest();
		request.open(urlSet.post_blogApi.method, urlSet.post_blogApi.url, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(json));
		request.onload = function () {
			var data = JSON.parse(this.response);
			console.log(data);
			if (data['message'] == "Blog has been added") {
				alert("Blog successfully added");
			} else {
				alert("Could not add blog");
			}
		}
	} else {
		alert("Please fill all details")
	}
}