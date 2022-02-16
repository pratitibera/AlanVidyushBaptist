try{
	var url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
    var search_keyword = data["search"];
    searchBlogs();
  }
}
catch{
	document.getElementById('blogAvailable').style.display = "none";
  document.getElementById('blogNotAvailable').style.display = "block";
}


function searchBlogs(){
  var request = new XMLHttpRequest();
  request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + "?index=" + index + "&limit=" + limit + "&searchQuery=" + search_keyword, true);
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    if(data.length > 0){
      if(index == 0){
        document.getElementById('searched_keyword').append("\"" + search_keyword + "\"");
        document.getElementById('blogAvailable').style.display = "block";
        document.getElementById('blogNotAvailable').style.display = "none";
      }
      index = data.length;
      displayBlogs(data);
    }
    else{
      if(index == 0){
        document.getElementById('blogAvailable').style.display = "none";
        document.getElementById('blogNotAvailable').style.display = "block";
      }
      else{
        document.getElementById('readmorebutton').innerHTML = `<div class="fo-20 fw-600 text-center"><p>That's all we have</p></div>`;
      }
    }
  }
}