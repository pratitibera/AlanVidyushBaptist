function signin(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var json = {
		"username": username,
		"password": password
	}
	console.log(json);
	var request = new XMLHttpRequest();
	request.open(urlSet.adminLoginApi.method, urlSet.adminLoginApi.url, true);
	request.setRequestHeader("Content-Type", "application/json");
	request.send(JSON.stringify(json));
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['error'] == "Username or Password is wrong"){
			alert("Login failed! Username or Password is wrong.")
		}
		else{
			localStorage.setItem("username", username);
			document.location.href = "admin.html";
		}
	}
}

function checkLoginStatus(){
	var token = localStorage.getItem("username");
	if(token == null){
		document.location.href = "login.html";
	}
	else{
		getBlogCategory();
		getBlogSubcategory('Weight Loss_0');
		getAllBlogs();
	}
}