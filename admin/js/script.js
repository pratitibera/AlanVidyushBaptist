var authtoken;

function signin() {
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
		if (data['message'] == "User logged in.") {
			localStorage.setItem("authtoken", data['token']);
			document.location.href = "index.html";
		} else {
			alert("Login failed! Username or Password is wrong.")
		}
	}
}

function checkLoginStatus() {
	var token = localStorage.getItem("authtoken");
	if (token == null) {
		document.location.href = "login.html";
	} else {
		authtoken = token;
		getBlogCategory();
		getBlogSubcategory('Weight Loss_0');
		getAllBlogs();
		getAllServices();
	}
}

var blog_data;

function checkLoginStatus2() {
	var token = localStorage.getItem("authtoken");
	if (token == null) {
		document.location.href = "login.html";
	} else {
		try {
			var url = document.location.href,
				params = url.split("?")[1].split("&"),
				data = {},
				tmp;
			for (var i = 0, l = params.length; i < l; i++) {
				tmp = params[i].split("=");
				data[tmp[0]] = tmp[1];
				blog_id = data["id"];

				var request = new XMLHttpRequest();
				request.open(urlSet.get_blogApi.method, urlSet.get_blogApi.url + blog_id, true);
				request.setRequestHeader("Content-Type", "application/json");
				request.setRequestHeader("authorization", authtoken);
				request.send();
				request.onload = function () {
					blog_data = JSON.parse(this.response);
					console.log(blog_data);
					displayBlogData();
				}

				authtoken = token;
				getBlogCategory();
				getBlogSubcategory('Weight Loss_0');
			}
		} catch {
			document.location.href = "index.html";
		}
	}
}

function changepassword() {
	var password = document.getElementById('password').value;
	var c_password = document.getElementById('c_password').value;

	if (password === c_password) {
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
			if (data['message'] == "Admin Updated") {
				alert("Credentials Updated");
			} else {
				alert("Sorry! Could not update new credentials");
			}
		}
	} else {
		alert("Password mismatch");
	}
}


function logout() {
	localStorage.removeItem("authtoken");
	document.location.href = "login.html";
}


function deleteHandler(func_id){
	$("#confirmDeletion").modal()
	var r_id = func_id.split('_')[0];
	if(r_id == "deleteBlog"){
		document.getElementById("confirmDeletionButton").setAttribute('onclick', `deleteBlog(` + func_id + `)`);
	}
	else if(r_id == "deleteMainServ" || r_id == "deleteServ" || r_id == "deleteSubserv_$"){
		document.getElementById("confirmDeletionButton").setAttribute('onclick', `deleteService(` + func_id + `)`);
	}
	else if(r_id == "delete"){
		document.getElementById("confirmDeletionButton").setAttribute('onclick', `deletePricingDetails(` + func_id + `)`);
	}
	else if(r_id == "coupon"){
		document.getElementById("confirmDeletionButton").setAttribute('onclick', `deleteCoupon(` + func_id + `)`);
	}
}


function editHandler(func_id){
	$("#confirmEditing").modal()
	var r_id = func_id.split('_')[0];
	if(r_id == "saveEditedBlog"){
		document.getElementById("confirmEditButton").setAttribute('onclick', `saveEditedBlog()`);
	}
	else if(r_id == "editServiceFeature"){
		document.getElementById("confirmEditButton").setAttribute('onclick', `editServicesSave()`);
	}
	else if(r_id == "editOffer"){
		document.getElementById("confirmEditButton").setAttribute('onclick', `saveOffer()`);
	}
}