var body_count = 0;
var deletion_id;

function deleteBlog(id) {
	id = id.id;
	var request = new XMLHttpRequest();
	request.open(urlSet.delete_blogApi.method, urlSet.delete_blogApi.url + id.split('_')[1], true);
	request.setRequestHeader("authorization", authtoken);
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		$('#confirmDeletion').modal('hide');
		if (data['message'] == "Blog has been deleted") {
			alert("Blog has been deleted");
			location.reload();
		} else {
			alert("Could not delete blog");
		}
	}
}

function editBlog(id) {
	document.location.href = "editBlog.html?id=" + id.split('_')[1];
}

function saveEditedBlog() {
	var client = document.getElementById('client').innerHTML;
	var brands = document.getElementById('brands').value;
	var author = document.getElementById('author').value;
	var blogtitle = document.getElementById('blogtitle').value;
	var blogdate = document.getElementById('blogdate').value;
	var blogsummary = document.getElementById('blogsummary').value;
	var blogcategory = (document.getElementById('blogcategory').value).split('_')[0];
	var blogsubcategory = document.getElementById('blogsubcategory').value;
	var blogtarget = document.getElementById('blogtarget').value;
	var blogsequence = document.getElementById('blogsequence').value;

	// Blog body
	content = [];
	for (i = 0; i < body_count; i++) {
		var contentid = document.getElementById('index_' + i).innerHTML;
		var contentheading = document.getElementById('heading_' + i).innerHTML;
		var contentpara = document.getElementById('para_' + i).innerHTML;
		dic = {
			"id": parseInt(contentid),
			"heading": contentheading,
			"paragraph": contentpara
		}
		content.push(dic);
		content.sort(function (a, b) {
			return a.id - b.id;
		});
		blogcontentList = {
			"content": content
		}
	}

	// Blog contents
	var listOfContents = []; // Stores the final blog contents
	var contents_count = 0;
	$('.contentsPage').each(function () {
		dic = {
			"id": "topic" + contents_count++,
			"title": $(this).html()
		}
		listOfContents.push(dic);
	});

	// Slug
	var slug = blogtitle.replace(/[^a-zA-Z0-9 ]/g, "");
	var slug = slug.replaceAll(" ", "_");
	var slug = encodeURIComponent(slug);

	var story = document.getElementById('isStory').value;
	var storyImage = document.getElementById('storyImage').value;
	if(story == "No"){
		story = false;
	}
	else{
		story = true;
	}

	if (blogtitle != '' && blogdate != '' && blogsummary != '' && blogcategory != '' && blogsubcategory != '' && contentList.length > 0 && galleryList['gallery'].length > 0  && coverList['cover'].length > 0 && blogcontentList['content'].length > 0) {
		if(blogsequence != '' && blogsequence > 0 && blogsequence != blog_data['sequence']){
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
				"target": blogtarget,
				"sequence": parseInt(blogsequence),
				"transformation_story": story,
				"transformation_image": storyImage
			}
			console.log(json);
			var request = new XMLHttpRequest();
			request.open(urlSet.edit_blogApi.method, urlSet.edit_blogApi.url + blog_data['_id'], true);
			request.setRequestHeader("Content-Type", "application/json");
			request.setRequestHeader("authorization", authtoken);
			request.send(JSON.stringify(json));
			request.onload = function () {
				var data = JSON.parse(this.response);
				console.log(data);
				if (data['message'] == "Blog has been Updated") {
					alert("Blog has been Updated");
					location.reload();
				} 
				else if(data['error'] == "Two Blogs cannot have same sequence"){
					alert("Two Blogs cannot have same sequence");
				} else {
					alert("Could not add blog");
				}
			}
		}
		else if(blogsequence == '' || blogsequence == blog_data['sequence']){
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
				"target": blogtarget,
				"transformation_story": story,
				"transformation_image": storyImage
			}
			console.log(json);
			var request = new XMLHttpRequest();
			request.open(urlSet.edit_blogApi.method, urlSet.edit_blogApi.url + blog_data['_id'], true);
			request.setRequestHeader("Content-Type", "application/json");
			request.setRequestHeader("authorization", authtoken);
			request.send(JSON.stringify(json));
			request.onload = function () {
				var data = JSON.parse(this.response);
				console.log(data);
				if (data['message'] == "Blog has been Updated") {
					alert("Blog has been Updated");
					location.reload();
				} 
				else if(data['error'] == "Two Blogs cannot have same sequence"){
					alert("Two Blogs cannot have same sequence");
				} else {
					alert("Could not add blog");
				}
			}
		}
		else{
			alert("Blog sequence should be greater than 0");
		}
	} else {
		alert("Please fill all details")
	}
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

function displayBlogData() {
	cover = blog_data['headerImage'];
	coach = blog_data['coach'];
	content = blog_data['body'];
	contentList = [];
	for (i = 0; i < blog_data['content'].length; i++) {
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
                     <div>${coachList['coach'][i]['name']} - ${coachList['coach'][i]['designation']}<span class="ml-3 float-right cursor-pointer" id="coach_${i}" onclick="removecoachImage(this.id)">x</span></div>
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
	for (j = 0; j < blog_data['body'].length; j++) {
		var body = document.createElement('div');
		body.setAttribute('class', 'font-weight-bolder text-danger fo-30');
		body.setAttribute('id', 'index_' + body_count);
		body.setAttribute('contenteditable', true);
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
		body.setAttribute('style', 'padding: 15px')
		body.setAttribute('contenteditable', true);
		body.innerHTML = blog_data['body'][j]['paragraph'];

		document.getElementById('blogcontent').append(body);

		var body = document.createElement('div');
		body.setAttribute('class', 'mb-5 text-right');

		var bodydelete = document.createElement('button');
		bodydelete.setAttribute('class', 'btn btn-dark mr-4');
		bodydelete.setAttribute('id', 'deletebody_' + body_count);
		bodydelete.setAttribute('onclick', `deleteContent(this.id)`);
		bodydelete.append('DELETE SECTION');

		var bodybutton = document.createElement('button');
		bodybutton.setAttribute('class', 'btn btn-dark');
		bodybutton.setAttribute('id', 'newbody_' + body_count++);
		bodybutton.setAttribute('onclick', `addNewContent(this.id)`);
		bodybutton.append('ADD NEW CONTENT');

		body.append(bodydelete);
		body.append(bodybutton);

		document.getElementById('blogcontent').append(body);
	}

	// Summary
	document.getElementById('blogsummary').value = blog_data['summary'];

	// Category
	$("#blogcategory option").filter(function () {
		return $(this).text() == blog_data['category'];
	}).prop("selected", true);

	// Subcategory
	$("#blogsubcategory option").filter(function () {
		return $(this).text() == blog_data['subcategory'];
	}).prop("selected", true);

	// Contents
	document.getElementById('contentList').innerHTML = "";
	for (i = 0; i < contentList.length; i++) {
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">
               <span class="contentsPage" contenteditable="true">${contentList[i]}</span>
               <span class="ml-3 cursor-pointer" id="blogContent2_${i}" onclick="edit_removeContent(this.id)">x</span>
            </div>`;
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
	document.getElementById('blogsequence').value = blog_data['sequence'];

	if(blog_data['transformation_story'] == true){
		document.getElementById('aStory').setAttribute('selected', true);
		document.getElementById('storyImage').value = blog_data['transformation_image'];
	}
	else{
		document.getElementById('notAStory').setAttribute('selected', true);
	}
}

function edit_addBlogBody() {
	var contentid = document.getElementById('contentid').value;
	var contentheading = document.getElementById('contentheading').value;
	var contentpara = document.getElementById('contentpara').value;

	dic = {
		"id": parseInt(contentid),
		"heading": contentheading,
		"paragraph": contentpara
	}
	content.push(dic);

	edit_addContents(contentheading);

	var body = document.createElement('div');
	body.setAttribute('class', 'font-weight-bolder text-danger fo-30');
	body.setAttribute('id', 'index_' + body_count);
	body.setAttribute('contenteditable', true);
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


	var bodydelete = document.createElement('button');
	bodydelete.setAttribute('class', 'btn btn-dark mr-4');
	bodydelete.setAttribute('id', 'deletebody_' + body_count);
	bodydelete.setAttribute('onclick', `deleteContent(this.id)`);
	bodydelete.append('DELETE SECTION');

	var bodybutton = document.createElement('button');
	bodybutton.setAttribute('class', 'btn btn-dark');
	bodybutton.setAttribute('id', 'newbody_' + body_count++);
	bodybutton.setAttribute('onclick', `addNewContent(this.id)`);
	bodybutton.append('ADD NEW CONTENT');

	body.append(bodydelete);
	body.append(bodybutton);

	document.getElementById('blogcontent').append(body);

	var contentid = document.getElementById('contentid').value = "";
	var contentheading = document.getElementById('contentheading').value = "";
	var contentpara = document.getElementById('contentpara').value = "";
}

function addNewContent(id) {
	$("#editBlogModal").modal();

	$('#saveContent').click(function () {
		$("#editBlogModal").modal("hide");
		var new_content = document.getElementById('newContent').value;
		if (new_content != '') {
			document.getElementById('para_' + id.split('_')[1]).innerHTML = new_content;
		}
	});
}

function deleteContent(id) {
	$("#confirmDelete").modal();
	deletion_id = id;
	$('.confirmDelete').click(function () {
		$("#confirmDelete").modal("hide");
		var id = parseInt(deletion_id.split('_')[1]);

		content = [];
		for (i = 0; i < body_count; i++) {
			var contentid = document.getElementById('index_' + i).innerHTML;
			var contentheading = document.getElementById('heading_' + i).innerHTML;
			var contentpara = document.getElementById('para_' + i).innerHTML;
			dic = {
				"id": parseInt(contentid),
				"heading": contentheading,
				"paragraph": contentpara
			}
			content.push(dic);
			content.sort(function (a, b) {
				return a.id - b.id;
			});
			blogcontentList = {
				"content": content
			}
		}

		console.log(blogcontentList);

		blogcontentList['content'].splice(id, 1);
		document.getElementById('blogcontent').innerHTML = "";
		body_count = 0;

		for (j = 0; j < blogcontentList['content'].length; j++) {
			var body = document.createElement('div');
			body.setAttribute('class', 'font-weight-bolder text-danger fo-30');
			body.setAttribute('id', 'index_' + body_count);
			body.setAttribute('contenteditable', true);
			body.innerHTML = blogcontentList['content'][j]['id'];

			document.getElementById('blogcontent').append(body);

			var body = document.createElement('div');
			body.setAttribute('class', 'font-weight-bolder');
			body.setAttribute('id', 'heading_' + body_count);
			body.setAttribute('contenteditable', true);
			body.innerHTML = blogcontentList['content'][j]['heading'];

			document.getElementById('blogcontent').append(body);

			var body = document.createElement('div');
			body.setAttribute('id', 'para_' + body_count);
			body.setAttribute('contenteditable', true);
			body.innerHTML = blogcontentList['content'][j]['paragraph'];

			document.getElementById('blogcontent').append(body);

			var body = document.createElement('div');
			body.setAttribute('class', 'mb-5 text-right');

			var bodydelete = document.createElement('button');
			bodydelete.setAttribute('class', 'btn btn-dark mr-4');
			bodydelete.setAttribute('id', 'deletebody_' + body_count);
			bodydelete.setAttribute('onclick', `deleteContent(this.id)`);
			bodydelete.append('DELETE SECTION');

			var bodybutton = document.createElement('button');
			bodybutton.setAttribute('class', 'btn btn-dark');
			bodybutton.setAttribute('id', 'newbody_' + body_count++);
			bodybutton.setAttribute('onclick', `addNewContent(this.id)`);
			bodybutton.append('ADD NEW CONTENT');

			body.append(bodydelete);
			body.append(bodybutton);

			document.getElementById('blogcontent').append(body);
		}
	});
}

function edit_addContents(content_text) {
	if(content_text == undefined){
		var content = document.getElementById('content').value;
		contentList.push(content);
		document.getElementById('contentList').innerHTML = "";
		for (i = 0; i < contentList.length; i++) {
			document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">
	               <span class="contentsPage" contenteditable="true">${contentList[i]}</span>
	               <span class="ml-3 cursor-pointer" id="blogContent2_${i}" onclick="edit_removeContent(this.id)">x</span>
	            </div>`;
		}
		document.getElementById('content').value = "";
	}
	else{
		contentList.push(content_text);
		document.getElementById('contentList').innerHTML = "";
		for (i = 0; i < contentList.length; i++) {
			document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">
	               <span class="contentsPage" contenteditable="true">${contentList[i]}</span>
	               <span class="ml-3 cursor-pointer" id="blogContent2_${i}" onclick="edit_removeContent(this.id)">x</span>
	            </div>`;
		}
		document.getElementById('content').value = "";
	}
}

function edit_removeContent(id) {
	var id = parseInt(id.split('_')[1]);
	contentList.splice(id, 1);
	document.getElementById('contentList').innerHTML = "";
	for (i = 0; i < contentList.length; i++) {
		document.getElementById('contentList').innerHTML += `<div class="bg-dark pt-2 pb-2 pr-3 pl-3 mr-2 mb-2">
               <span class="contentsPage" contenteditable="true">${contentList[i]}</span>
               <span class="ml-3 cursor-pointer" id="blogContent2_${i}" onclick="edit_removeContent(this.id)">x</span>
            </div>`;
	}
	document.getElementById('content').value = "";
}
