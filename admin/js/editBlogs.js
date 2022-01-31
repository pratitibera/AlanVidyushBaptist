var body_count = 0;

function deleteBlog(id){
	var request = new XMLHttpRequest();
	request.open(urlSet.delete_blogApi.method, urlSet.delete_blogApi.url + id.split('_')[1], true);
	request.setRequestHeader("authorization", authtoken);
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['message'] == "Blog has been deleted"){
			alert("Blog has been deleted");
			location.reload();
		}
		else{
			alert("Could not delete blog");
		}
	}
}

function editBlog(id) {
	document.location.href = "editBlog.html?id=" + id.split('_')[1];
}

function saveEditedBlog(){
	content = [];
	for(i = 0; i < body_count; i++){
		var contentid = document.getElementById('index_' + i).innerHTML;
		var contentheading = document.getElementById('heading_' + i).innerHTML;
		var contentpara = document.getElementById('para_' + i).innerHTML;
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
	}

	console.log(blogcontentList);
}






















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

function displayBlogData(){
	cover = blog_data['headerImage'];
	coach = blog_data['coach'];
	content = blog_data['body'];
	contentList = [];
	for(i = 0; i < blog_data['content'].length; i++){
		contentList.push(blog_data['content'][i]['title']);
	}
	gallery = blog_data['gallery'];

	// Cover images
	coverList = {
		"cover": cover
	}
	document.getElementById('headerimageList').innerHTML = "";
	for (i = 0; i < coverList['cover'].length; i++) {
		document.getElementById('headerimageList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${coverList['cover'][i]['title']}<span class="ml-3 float-right cursor-pointer" id="cover_${i}" onclick="removeCoverImage(this.id)">x</span></div>
                     <img src=${coverList['cover'][i]['image']} class="w-100">
                  </div>`
	}

	// Client info
	document.getElementById('client').innerHTML = blog_data['client'];

	// Brands
	document.getElementById('brands').value = blog_data['brands'];

	// Coach
	coachList = {
		"coach": coach
	}
	document.getElementById('coachList').innerHTML = "";
	for (i = 0; i < coachList['coach'].length; i++) {
		document.getElementById('coachList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${coachList['coach'][i]['name']}<span class="ml-3 float-right cursor-pointer" id="coach_${i}" onclick="removecoachImage(this.id)">x</span></div>
                     <img src=${coachList['coach'][i]['image']} class="w-100">
                  </div>`
	}

	// Author
	document.getElementById('author').value = blog_data['author'];

	// Title
	document.getElementById('blogtitle').value = blog_data['title'];

	// Date
	document.getElementById('blogdate').value = blog_data['date'];

	// Blog body
	for(j = 0; j < blog_data['body'].length; j++){
		var body = document.createElement('div');
		body.setAttribute('class', 'font-weight-bolder text-danger fo-30');
		body.setAttribute('id', 'index_' + body_count);
		// body.setAttribute('contenteditable', true);
		body.innerHTML = blog_data['body'][j]['id'];

		document.getElementById('blogcontent').append(body);

		var body = document.createElement('div');
		body.setAttribute('class', 'font-weight-bolder');
		body.setAttribute('id', 'heading_' + body_count);
		body.setAttribute('contenteditable', true);
		body.innerHTML = blog_data['body'][j]['heading'];

		document.getElementById('blogcontent').append(body);

		var body = document.createElement('div');
		body.setAttribute('id', 'para_' + body_count);
		body.setAttribute('contenteditable', true);
		body.innerHTML = blog_data['body'][j]['paragraph'];

		document.getElementById('blogcontent').append(body);

		var body = document.createElement('div');
		body.setAttribute('class', 'mb-5 text-right');
		var bodybutton = document.createElement('button');
		bodybutton.setAttribute('class', 'btn btn-dark');
		bodybutton.setAttribute('id', 'newbody_' + body_count++);
		bodybutton.setAttribute('onclick', `addNewContent(this.id)`);
		bodybutton.append('ADD NEW CONTENT');
		body.append(bodybutton);

		document.getElementById('blogcontent').append(body);
	}

	// Summary
	document.getElementById('blogsummary').value = blog_data['summary'];

	// Category
	$("#blogcategory option").filter(function() {
		return $(this).text() == blog_data['category'];
	}).prop("selected", true);

	// Subcategory
	$("#blogsubcategory option").filter(function() {
		return $(this).text() == blog_data['subcategory'];
	}).prop("selected", true);

	// Contents
	document.getElementById('contentList').innerHTML = "";
	for (i = 0; i < contentList.length; i++) {
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">${contentList[i]}<span class="ml-3 cursor-pointer" id="blogContent_${i}" onclick="removeContent(this.id)">x</span></div>`;
	}

	// Gallery
	galleryList = {
		"gallery": gallery
	}
	document.getElementById('galleryList').innerHTML = "";
	for (i = 0; i < galleryList['gallery'].length; i++) {
		document.getElementById('galleryList').innerHTML += `<div class="col-sm-2 mb-2">
                     <div>${galleryList['gallery'][i]['title']}<span class="ml-3 float-right cursor-pointer" id="gallery_${i}" onclick="removeImage(this.id)">x</span></div>
                     <img src=${galleryList['gallery'][i]['image']} class="w-100">
                  </div>`
	}

	// Target url
	document.getElementById('blogtarget').value = blog_data['target'];
}

function edit_addBlogBody() {
	var contentid = document.getElementById('contentid').value;
	var contentheading = document.getElementById('contentheading').value;
	var contentpara = document.getElementById('contentpara').value;

	var body = document.createElement('div');
	body.setAttribute('class', 'font-weight-bolder text-danger fo-30');
	body.setAttribute('id', 'index_' + body_count);
	// body.setAttribute('contenteditable', true);
	body.innerHTML = contentid;

	document.getElementById('blogcontent').append(body);

	var body = document.createElement('div');
	body.setAttribute('class', 'font-weight-bolder');
	body.setAttribute('id', 'heading_' + body_count);
	body.setAttribute('contenteditable', true);
	body.innerHTML = contentheading;

	document.getElementById('blogcontent').append(body);

	var body = document.createElement('div');
	body.setAttribute('id', 'para_' + body_count);
	body.setAttribute('contenteditable', true);
	body.innerHTML = contentpara;

	document.getElementById('blogcontent').append(body);

	var body = document.createElement('div');
	body.setAttribute('class', 'mb-5 text-right');
	var bodybutton = document.createElement('button');
	bodybutton.setAttribute('class', 'btn btn-dark');
	bodybutton.setAttribute('id', 'newbody_' + body_count++);
	bodybutton.setAttribute('onclick', `addNewContent(this.id)`);
	bodybutton.append('ADD NEW CONTENT');
	body.append(bodybutton);

	document.getElementById('blogcontent').append(body);

	var contentid = document.getElementById('contentid').value = "";
	var contentheading = document.getElementById('contentheading').value = "";
	var contentpara = document.getElementById('contentpara').value = "";
}
function addNewContent(id){
	$("#editBlogModal").modal();

	$('#saveContent').click(function(){
		$("#editBlogModal").modal("hide");
		var new_content = document.getElementById('newContent').value;
		if(new_content != ''){
			document.getElementById('para_' + id.split('_')[1]).innerHTML = new_content;
		}
	});
}