function viewoptiMessages(){
	var request = new XMLHttpRequest();
	request.open(urlSet.getMessagesApi.method, urlSet.getMessagesApi.url, true);
	request.setRequestHeader("Accept", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var message_list = document.getElementById('message_list');
		message_list.innerHTML = "";

		for(i = 0; i < data.length; i++){
			var istDate = new Date(data[i]['createdAt']).toLocaleString(undefined, {
				timeZone: 'Asia/Kolkata'
			});
			var td1 = document.createElement('td');
			td1.append(istDate);
			
			var td2 = document.createElement('td');
			td2.append(data[i]['name']);

			var td3 = document.createElement('td');
			td3.append(data[i]['phone']);

			var td4 = document.createElement('td');
			td4.append(data[i]['email']);

			var td5 = document.createElement('td');
			td5.append(data[i]['message']);

			var td6 = document.createElement('td');
			td6.innerHTML = `<button class="btn btn-dark" onclick="deleteHandler(this.id);" id="deleteMessage_${data[i]['_id']}">DELETE</button>`;

			var tr = document.createElement('tr');
			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tr.append(td5);
			tr.append(td6);

			message_list.append(tr);
		}
	}
}

function deleteMessages(id){
	id = id.id;
	var request = new XMLHttpRequest();
	request.open(urlSet.deleteMessagesApi.method, urlSet.deleteMessagesApi.url + id.split('_')[1], true);
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("authorization", authtoken);
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		$('#confirmDeletion').modal('hide');
		if(data['message'] == "Message Deleted"){
			alert("Message has been deleted.");
			viewoptiMessages();
		}
		else{
			alert("Could not delete this message.");
		}
	}
}

function viewpwMessages(){
	var request = new XMLHttpRequest();
	request.open(urlSet.getMessagesPwApi.method, urlSet.getMessagesPwApi.url, true);
	request.setRequestHeader("Accept", "application/json");
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var message_list = document.getElementById('message_list_pw');
		message_list.innerHTML = "";

		for(i = 0; i < data.length; i++){
			var istDate = new Date(data[i]['createdAt']).toLocaleString(undefined, {
				timeZone: 'Asia/Kolkata'
			});
			var td1 = document.createElement('td');
			td1.append(istDate);
			
			var td2 = document.createElement('td');
			td2.append(data[i]['name']);

			var td3 = document.createElement('td');
			td3.append(data[i]['phone']);

			var td4 = document.createElement('td');
			td4.append(data[i]['email']);

			var td5 = document.createElement('td');
			td5.append(data[i]['message']);

			var td6 = document.createElement('td');
			td6.innerHTML = `<button class="btn btn-dark" onclick="deleteHandler(this.id);" id="deleteMessagePw_${data[i]['_id']}">DELETE</button>`;

			var tr = document.createElement('tr');
			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tr.append(td5);
			tr.append(td6);

			message_list.append(tr);
		}
	}
}

function deleteMessagesPw(id){
	id = id.id;
	var request = new XMLHttpRequest();
	request.open(urlSet.deleteMessagesPwApi.method, urlSet.deleteMessagesPwApi.url + id.split('_')[1], true);
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("authorization", authtoken);
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		$('#confirmDeletion').modal('hide');
		if(data['message'] == "Feedback Deleted"){
			alert("Message has been deleted.");
			viewpwMessages();
		}
		else{
			alert("Could not delete this message.");
		}
	}
}