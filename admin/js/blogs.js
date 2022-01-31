var index = 0;
var limit = 10;

function getAllBlogs(){
	var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + "?index=" + index + "&limit=" + limit, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    if(data.length > 0){
    	index = data.length;
	    var allBlogs = document.getElementById('allBlogs');
	    for (i = 0; i < data.length; i++) {
	    	if(data[i]['featured'] == true){
	    		allBlogs.innerHTML += `<tr>
	                      <td>${data[i]['title']}</td>
	                      <td><button class="btn btn-dark" id="delete_${data[i]['_id']}" onclick="handleFeatures(this.id)">DELETE FROM FEATURED</button></td>
	                      <td><a href="#editBlog"><button class="btn btn-dark" id="editBlog_${data[i]['_id']}" onclick="editBlog(this.id)">EDIT</button></a></td>
	                      <td><button class="btn btn-dark" id="deleteBlog_${data[i]['_id']}" onclick="deleteBlog(this.id)">DELETE</button></td>
	                    </tr>`;
	    	}
	    	else{
	    		allBlogs.innerHTML += `<tr>
	                      <td>${data[i]['title']}</td>
	                      <td><button class="btn btn-dark" id="add_${data[i]['_id']}" onclick="handleFeatures(this.id)">ADD TO FEATURED</button></td>
	                      <td><a href="#editBlog"><button class="btn btn-dark" id="editBlog_${data[i]['_id']}" onclick="editBlog(this.id)">EDIT</button></a></td>
	                      <td><button class="btn btn-dark" id="deleteBlog_${data[i]['_id']}" onclick="deleteBlog(this.id)">DELETE</button></td>
	                    </tr>`;
	    	}
	    }
    }
    else{
      document.getElementById('readmorebutton').innerHTML = `<div class="fo-20 fw-600 text-center"><p>That's all we have</p></div>`;
    }
  }
}

function handleFeatures(id){
	if(id.split('_')[0] == "add"){
		var request = new XMLHttpRequest();
		  request.open(urlSet.add_blog_to_featuredApi.method, urlSet.add_blog_to_featuredApi.url + id.split('_')[1], true);
		  request.setRequestHeader("Accept", "application/json");
		  request.setRequestHeader("authorization", authtoken);
		  request.send();
		  request.onload = function () {
		    var data = JSON.parse(this.response);
		    console.log(data);
		    if(data['message'] == "Blog added to Featured"){
		    	alert("Blog added to Featured");
		    }
		    document.getElementById(id).setAttribute('id', 'delete_' + id.split('_')[1]);
		    document.getElementById('delete_' + id.split('_')[1]).innerHTML = "DELETE FROM FEATURED";
		}
	}
	else{
		var request = new XMLHttpRequest();
		  request.open(urlSet.delete_blog_from_featuredApi.method, urlSet.delete_blog_from_featuredApi.url + id.split('_')[1], true);
		  request.setRequestHeader("Accept", "application/json");
		  request.setRequestHeader("authorization", authtoken);
		  request.send();
		  request.onload = function () {
		    var data = JSON.parse(this.response);
		    console.log(data);
		    if(data['message'] == "Blog removed from Featured"){
		    	alert("Blog removed from Featured");
		    }
		    document.getElementById(id).setAttribute('id', 'add_' + id.split('_')[1]);
		    document.getElementById('add_' + id.split('_')[1]).innerHTML = "ADD TO FEATURED";
		}
	}
}

var s_index = 0;
var s_limit = 50;


// Search blogs
function searchBlog() {
	var searched_blog = document.getElementById('searched_blog').value;
	var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + "?index=" + s_index + "&limit=" + s_limit + "&searchQuery=" + searched_blog, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    if(data.length > 0){
    	s_index = data.length;
	    var allBlogs = document.getElementById('allBlogs');
	    allBlogs.innerHTML = "";
	    for (i = 0; i < data.length; i++) {
	    	if(data[i]['featured'] == true){
	    		allBlogs.innerHTML += `<tr>
	                      <td>${data[i]['title']}</td>
	                      <td><button class="btn btn-dark" id="delete_${data[i]['_id']}" onclick="handleFeatures(this.id)">DELETE FROM FEATURED</button></td>
	                      <td><a href="#editBlog"><button class="btn btn-dark" id="editBlog_${data[i]['_id']}" onclick="editBlog(this.id)">EDIT</button></a></td>
	                      <td><button class="btn btn-dark" id="deleteBlog_${data[i]['_id']}" onclick="deleteBlog(this.id)">DELETE</button></td>
	                    </tr>`;
	    	}
	    	else{
	    		allBlogs.innerHTML += `<tr>
	                      <td>${data[i]['title']}</td>
	                      <td><button class="btn btn-dark" id="add_${data[i]['_id']}" onclick="handleFeatures(this.id)">ADD TO FEATURED</button></td>
	                      <td><a href="#editBlog"><button class="btn btn-dark" id="editBlog_${data[i]['_id']}" onclick="editBlog(this.id)">EDIT</button></a></td>
	                      <td><button class="btn btn-dark" id="deleteBlog_${data[i]['_id']}" onclick="deleteBlog(this.id)">DELETE</button></td>
	                    </tr>`;
	    	}
	    }
    }
    else{
    	alert("No search results found");
      //document.getElementById('readmorebutton').innerHTML = `<div class="fo-20 fw-600 text-center"><p>That's all we have</p></div>`;
    }
  }
}

// Data interval
function edit_data_interval(){
	var data_interval = document.getElementById('edit_data_interval').value;
	var json = {
	  "data_interval": parseInt(data_interval)
	}
	var request = new XMLHttpRequest();
	request.open(urlSet.data_intervalApi.method, urlSet.data_intervalApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['message'] == "Data Interval Updated"){
			alert("Data Interval Updated");
		}
		else{
			alert("Could not update data interval");
		}
	}
}