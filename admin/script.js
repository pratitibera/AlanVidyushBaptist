var contentList = [];
var gallery = [];

function addContents(){
	var content = document.getElementById('content').value;
	contentList.push(content);
	document.getElementById('contentList').innerHTML = "";
	for(i = 0; i < contentList.length; i++){
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2">${contentList[i]}<span class="ml-3 cursor-pointer" id="blogContent_${i}" onclick="removeContent(this.id)">x</span></div>`;
	}
	document.getElementById('content').value = "";
}

function removeContent(id){
	var id = parseInt(id.split('_')[1]);
	contentList.splice(id, 1);
	document.getElementById('contentList').innerHTML = "";
	for(i = 0; i < contentList.length; i++){
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2">${contentList[i]}<span class="ml-3 cursor-pointer" id="blogContent_${i}" onclick="removeContent(this.id)">x</span></div>`;
	}
	document.getElementById('content').value = "";
}

function addImage(){
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
	for(i = 0; i < galleryList['gallery'].length; i++){
		document.getElementById('galleryList').innerHTML += `<div class="col-sm-2">
                     <div>${galleryList['gallery'][i]['title']}<span class="ml-3 float-right cursor-pointer" id="gallery_${i}" onclick="removeImage(this.id)">x</span></div>
                     <img src=${galleryList['gallery'][i]['image']} class="w-100">
                  </div>`
	}
}

function removeImage(id){
	var id = parseInt(id.split('_')[1]);
	galleryList['gallery'].splice(id, 1);
	document.getElementById('galleryList').innerHTML = "";
	for(i = 0; i < galleryList['gallery'].length; i++){
		document.getElementById('galleryList').innerHTML += `<div class="col-sm-2">
                     <div>${galleryList['gallery'][i]['title']}<span class="ml-3 float-right cursor-pointer" id="gallery_${i}" onclick="removeImage(this.id)">x</span></div>
                     <img src=${galleryList['gallery'][i]['image']} class="w-100">
                  </div>`
	}
}

function addBlog(){
	var headerimageurl = document.getElementById('headerimageurl').value;
	var headerimagetitle = document.getElementById('headerimagetitle').value;
	var client = document.getElementById('client').value;
	var blogtitle = document.getElementById('blogtitle').value;
	var blogdate = document.getElementById('blogdate').value;
	var blogcontent = document.getElementById('blogcontent').value;
	var blogsummary = document.getElementById('blogsummary').value;
	var blogcategory = document.getElementById('blogcategory').value;
	var blogsubcategory = document.getElementById('blogsubcategory').value;
	if(headerimageurl != '' && headerimagetitle != '' && client != '' && blogtitle != '' && blogdate != '' && blogcontent != '' && blogsummary != '' && blogcategory != '' && blogsubcategory != '' && contentList.length > 0 && galleryList['gallery'].length > 0){
		console.log("okay");
	}
	else{
		alert("Please fill all details")
	}
}