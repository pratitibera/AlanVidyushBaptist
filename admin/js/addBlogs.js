var clientHtml = "";
var coachdata = "";


async function copyToClipboard(id) {
	 var e = document.getElementById(id).value;
	 t = document.createElement("textarea");
	 document.body.appendChild(t);
	 t.setAttribute("id", "dummy_id");
	 document.getElementById("dummy_id").value = e;
	 await t.select();
	 await document.execCommand("copy");
	 document.body.removeChild(t);
}


function addClientInfo(){
	var clientField = document.getElementById('clientField').value;
	var clientFieldData = document.getElementById('clientFieldData').value;
	if(clientField != "" && clientFieldData != ""){
		if(coachdata == ""){
			clientHtml += `<div class="text-center fw-700 mfo-12">${clientField}: ${clientFieldData}</div>`;
			document.getElementById('clientInfoData').value = `<div>${clientHtml}</div>`;
		}
		else{
			document.getElementById('clientInfoData').value = `<div>${clientHtml}<div class="text-center fw-700 mt-3 mfo-12">COACH</div></div>${coachdata}
			<div class="text-center fw-700 mfo-12 mt-5">${clientField}: ${clientFieldData}</div>`;
			coachdata = "";
			clientHtml = "";
		}
	}
	else{
		alert("Enter all fields");
	}
	document.getElementById('clientField').value = "";
	document.getElementById('clientFieldData').value = "";
}

function addCoachInfo(){
	var coachimg1 = document.getElementById('coachimg1').value;
	var coachname1 = document.getElementById('coachname1').value;
	var coachimg2 = document.getElementById('coachimg2').value;
	var coachname2 = document.getElementById('coachname2').value;
	var coachimg3 = document.getElementById('coachimg3').value;
	var coachname3 = document.getElementById('coachname3').value;
	if(coachimg1 != "" && coachname1 != "" && coachimg2 == "" && coachname2 == "" && coachimg3 == "" && coachname3 == ""){
		coachdata = `<div class="row m-0 p-500">
            <div class="col-12 col-sm-12 p-0">
               <img src="${coachimg1}">
               <div class="mt-3 fw-700 mfo-12">${coachname1}</div>
            </div>
         </div>`;
        document.getElementById('clientInfoData').value = `<div>${clientHtml}<div class="text-center fw-700 mt-3 mfo-12 mb-3">COACH</div></div>${coachdata}`;
	}
	else if(coachimg1 != "" && coachname1 != "" && coachimg2 != "" && coachname2 != "" && coachimg3 == "" && coachname3 == ""){
		coachdata = `<div class="row m-0 p-300">
            <div class="col-6 col-sm-6 p-0">
               <img src="${coachimg1}">
               <div class="mt-3 fw-700 mfo-12">${coachname1}</div>
            </div>
            <div class="col-6 col-sm-6 p-0">
               <img src="${coachimg2}">
               <div class="mt-3 fw-700 mfo-12">${coachname2}</div>
            </div>
         </div>`;
      document.getElementById('clientInfoData').value = `<div>${clientHtml}<div class="text-center fw-700 mt-3 mfo-12 mb-3">COACH</div></div>${coachdata}`;
	}
	else if(coachimg1 != "" && coachname1 != "" && coachimg2 != "" && coachname2 != "" && coachimg3 != "" && coachname3 != ""){
		coachdata = `<div class="row m-0 p-150">
            <div class="col-4 col-sm-4 p-0">
               <img src="${coachimg1}">
               <div class="mt-3 fw-700 mfo-12">${coachname1}</div>
            </div>
            <div class="col-4 col-sm-4 p-0">
               <img src="${coachimg2}">
               <div class="mt-3 fw-700 mfo-12">${coachname2}</div>
            </div>
            <div class="col-4 col-sm-4 p-0">
               <img src="${coachimg2}">
               <div class="mt-3 fw-700 mfo-12">${coachname2}</div>
            </div>
         </div>`;
      document.getElementById('clientInfoData').value = `<div>${clientHtml}<div class="text-center fw-700 mt-3 mfo-12 mb-3">COACH</div></div>${coachdata}`;
	}
	else{
		alert("Enter all fields");
	}
	document.getElementById('coachimg1').value = "";
	document.getElementById('coachname1').value = "";
	document.getElementById('coachimg2').value = "";
	document.getElementById('coachname2').value = "";
}













// Blog body
var blogContentBody = "";
var blogHeadingCount = 0;

function addHeading(){
	var heading = document.getElementById('heading').value;
	if(heading != ""){
		blogContentBody += `<div class="blogContent fw-600 fo-30 mfo-18" id="topic${blogHeadingCount++}">${heading}</div>`;
		document.getElementById('blogContentData').value = blogContentBody;
	}
	else{
		alert("Enter heading");
	}
	document.getElementById('heading').value = "";
}

function addParas(){
	var paras = document.getElementById('paras').value;
	if(paras != ""){
		blogContentBody += `<div class="blogContent fo-17 mfo-15 mt-2">${paras}</div>`;
		document.getElementById('blogContentData').value = blogContentBody;
	}
	else{
		alert("Enter paragraph");
	}
	document.getElementById('paras').value = "";
}

function addImages(){
	var imageurl = document.getElementById('imageurl').value;
	if(imageurl != ""){
		blogContentBody += `<div class="text-center mt-4">
            <img src="${imageurl}" class="w-70 mow-100">
         </div>`;
		document.getElementById('blogContentData').value = blogContentBody;
	}
	else{
		alert("Enter image url");
	}
	document.getElementById('imageurl').value = "";
}