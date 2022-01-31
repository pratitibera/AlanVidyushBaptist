var authtoken;

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
		if(data['message'] == "User logged in."){
			localStorage.setItem("authtoken", data['token']);
			document.location.href = "admin.html";
		}
		else{
			alert("Login failed! Username or Password is wrong.")
		}
	}
}

function checkLoginStatus(){
	var token = localStorage.getItem("authtoken");
	if(token == null){
		document.location.href = "login.html";
	}
	else{
		authtoken = token;
		getBlogCategory();
		getBlogSubcategory('Weight Loss_0');
		getAllBlogs();
		getAllServices();
	}
}

function changepassword(){
	var password = document.getElementById('password').value;
	var c_password = document.getElementById('c_password').value;

	if(password === c_password){
		var json = {
			"username": username,
			"password": password
		}
		console.log(json);
		var request = new XMLHttpRequest();
		request.open(urlSet.adminUpdateApi.method, urlSet.adminUpdateApi.url, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.setRequestHeader("authorization", authtoken);
		request.send(JSON.stringify(json));
		request.onload = function () {
			var data = JSON.parse(this.response);
			console.log(data);
			if(data['message'] == "Admin Updated"){
				alert("Credentials Updated");
			}
			else{
				alert("Sorry! Could not update new credentials");
			}
		}
	}
	else{
		alert("Password mismatch");
	}
}


function logout(){
	localStorage.removeItem("authtoken");
	document.location.href = "login.html";
}