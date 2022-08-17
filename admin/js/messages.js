function viewMessages(){
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
			// var istDate = new Date(data[i]['date']).toLocaleString(undefined, {
			// 	timeZone: 'Asia/Kolkata'
			// });
			var td1 = document.createElement('td');
			// td1.append(istDate);
			td1.append("Date");

			var td2 = document.createElement('td');
			td2.append(data[i]['email']);

			var td3 = document.createElement('td');
			td3.append(data[i]['message']);

			var tr = document.createElement('tr');
			tr.append(td1);
			tr.append(td2);
			tr.append(td3);

			message_list.append(tr);
		}
	}
}