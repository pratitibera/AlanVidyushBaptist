try{
	var url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
    search_keyword = data["search"];
    searchBlogs(search_keyword);
  }
}
catch{
	document.getElementById('blogAvailable').style.display = "none";
    document.getElementById('blogNotAvailable').style.display = "block";
	console.log("error");
}


function searchBlogs(){
	document.getElementById('searched_keyword').append("\"" + search_keyword + "\"");
	document.getElementById('blogAvailable').style.display = "block";
    document.getElementById('blogNotAvailable').style.display = "none";
}