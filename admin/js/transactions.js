function viewTransactions(){
	var request = new XMLHttpRequest();
	request.open(urlSet.viewTransactionsApi.method, urlSet.viewTransactionsApi.url, true);
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("authorization", authtoken);
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		var transaction_details = document.getElementById('transaction_details');
		transaction_details.innerHTML = "";

		for(i = 0; i < data.length; i++){
			var istDate = new Date(data[i]['date']).toLocaleString(undefined, {
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

			var ul = document.createElement('ul');
			for(j = 0; j < data[i]['offers'].length; j++){
				var service_details = data[i]['offers'][j]['offer_name'].replaceAll('_',' - ') + " - " + data[i]['offers'][j]['duration'];
				ul.innerHTML += `<li>${service_details}</li>`;
			}

			var td5 = document.createElement('td');
			td5.append(ul);

			var td6 = document.createElement('td');
			td6.append(data[i]['amount']);

			var td7 = document.createElement('td');
			td7.append(data[i]['transaction_type']);

			var td8 = document.createElement('td');
			td8.append(data[i]['status']);

			var td9 = document.createElement('td');
			td9.innerHTML = `<button class="btn btn-dark" onclick="editTransaction(this.id);" id="edittrans_${data[i]['_id']}">EDIT</button>`;

			var td10 = document.createElement('td');
			td10.innerHTML = `<button class="btn btn-dark" onclick="deleteTransaction(this.id);" id="deletetrans_${data[i]['_id']}">DELETE</button>`;

			var tr = document.createElement('tr');
			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tr.append(td5);
			tr.append(td6);
			tr.append(td7);
			tr.append(td8);
			tr.append(td9);
			tr.append(td10);

			transaction_details.append(tr);
		}
	}
}

function editTransaction(id){
	console.log(id);
}

function deleteTransaction(id){
	var request = new XMLHttpRequest();
	request.open(urlSet.deleteTransactionsApi.method, urlSet.deleteTransactionsApi.url + id.split('_')[1], true);
	request.setRequestHeader("Accept", "application/json");
	request.setRequestHeader("authorization", authtoken);
	request.send();
	request.onload = function () {
		var data = JSON.parse(this.response);
		console.log(data);
		if(data['message'] == "Transaction has been deleted."){
			alert("Transaction has been deleted.");
			document.location.href = "index.html";
		}
		else{
			alert("Could not delete this transaction.");
		}
	}
}