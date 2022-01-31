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

function saveEditedBlog(){}

function editBlog(id) {
	var editBlogid = id.split('_')[1];
	var request = new XMLHttpRequest();
	  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + editBlogid, true);
	  request.setRequestHeader("Content-Type", "application/json");
	  request.setRequestHeader("authorization", authtoken);
	  request.send();
	  request.onload = function () {
	    var data = JSON.parse(this.response);
	    console.log(data);
	}
}