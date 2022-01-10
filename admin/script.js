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
		else{}
	}
}