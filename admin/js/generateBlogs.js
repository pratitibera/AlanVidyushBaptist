async function copyToClipboard(id) {
	var e = document.getElementById(id).value;
	t = document.createElement("textarea");
	document.body.appendChild(t);
	t.setAttribute("id", "dummy_id");
	document.getElementById("dummy_id").value = e;
	await t.select();
	await document.execCommand("copy");
	document.body.removeChild(t);
	document.getElementById(id).value = "";
}

var clientHtml = "";

function addClientInfo() {
	var clientField = document.getElementById('clientField').value;
	var clientFieldData = document.getElementById('clientFieldData').value;

	if (clientField != "" && clientFieldData != "") {
		clientHtml += `<div class="text-center fw-700 mfo-12">${clientField}: ${clientFieldData}</div>`;
		document.getElementById('clientInfoData').value = `${clientHtml}`;
	} else {
		alert("Enter all fields");
	}
	document.getElementById('clientField').value = "";
	document.getElementById('clientFieldData').value = "";
}


// Blog body
var blogContentBody = "";
var blogBodyImageCount = 0;

function addParas() {
	var paras = document.getElementById('paras').value;
	if (paras != "") {
		blogContentBody = document.getElementById('blogContentData').value;
		blogContentBody += paras
		document.getElementById('blogContentData').value = blogContentBody;
		document.getElementById('paras').value = "";
	} else {
		alert("Enter paragraph");
	}
}

function changeParas() {
	blogContentBody = document.getElementById('blogContentData').value;
	blogContentBody += `<br><br>`;
	document.getElementById('blogContentData').value = blogContentBody;
}

function addImages() {
	var imageurl = document.getElementById('imageurl').value;
	var imagelabel = document.getElementById('imageLabel').value;
	if (imageurl != "") {
		blogContentBody = document.getElementById('blogContentData').value;
		blogContentBody += `<div class="text-center mt-4">
            <img src="${imageurl}" class="w-70 mow-100" id="blogBodyImage_${blogBodyImageCount++}">
            <br><div class="text-center fo-13 mt-2">${imagelabel}</div>
         </div>`;
		document.getElementById('blogContentData').value = blogContentBody;
		document.getElementById('imageurl').value = "";
		document.getElementById('imageLabel').value = "";
	} else {
		alert("Enter image url");
	}
}

function addLink(){
	var linktext = document.getElementById('linktext').value;
	var linkurl = document.getElementById('linkurl').value;
	if(linktext != "" && linkurl != ""){
		blogContentBody = document.getElementById('blogContentData').value;
		blogContentBody += `<a href="${linkurl}">${linktext}</a>`;
		document.getElementById('blogContentData').value = blogContentBody;
		document.getElementById('linktext').value = "";
		document.getElementById('linkurl').value = "";
	}
	else{
		alert("Enter all hyperlink details");
	}
}