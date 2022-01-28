function editBlog(id) {
	var editBlogid = id.split('_')[1];
	var request = new XMLHttpRequest();
	  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + editBlogid, true);
	  request.setRequestHeader("Content-Type", "application/json");
	  request.send();
	  request.onload = function () {
	    var data = JSON.parse(this.response);
	    console.log(data);
	}
}