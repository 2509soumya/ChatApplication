<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Chat application</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<style>
#container {
	margin: 0px auto;
	width: 1010px;
	height: 375px;
	border: 10px #333 solid;
}
#videoElement1 {
	width: 500px;
	height: 375px;
	background-color: #666;
}

#videoElement2 {
	width: 500px;
	height: 375px;
	background-color: #666;
}

.flex-container {
  height: 100%;
  width: 100%;
  display: flex;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
li {
cursor: pointer;
}

.notification {
  background-color: #555;
  color: white;
  text-decoration: none;
  padding: 15px 26px;
  position: relative;
  border-radius: 2px;
}

.notification:hover {
  background: red;
}

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 100%;
  background: red;
  color: white;
}


</style>

<body>

<div id="firstscreen">
Enter your username : <input type="text" id="username" name="name"/><br>
<input type="button" value="Enter chat"  onclick="loadonlineusers(document.getElementById('username').value)" />
</div>

<!--  <div id="thirdscreen" style="display: none">
<span id="chattext"></span><br>
<input type="text" id="chatbox" style="width: 300px;height: 20px;" name="box"/>
<input type="button" value="Send"  onclick="broadcast(document.getElementById('chatbox').value)" />
</div>
-->


<div id="secondscreen" style="display: none">
<span id="loggedininfo"></span><br>
<div id="flexbox" class="flex-container">
<div id="userscreen" style="width: 20%;border-style: solid;">
<span>List of online users :</span>

<ul id="listuser">
</ul>

</div>
<div id="chatscreen" style="width: 80%">
<span id="chattingwith"></span><br>
<span id="chattext"></span><br>
<input type="text" id="chatbox" style="width: 300px;height: 20px;" name="box"/>
<input type="button" value="Send"  onclick="broadcast(document.getElementById('chatbox').value)" />
<input type="button" value="Video Call" onclick="shareuserscreen()">
</div>
</div>
</div>

<dialog id="myFirstDialog" style="width:50%;background-color:#F4FFEF;border:1px dotted black;">  
<p id="dialogtext"></p>  
<button id="dialogclose">Close</button>  
<button id="dialogaccept">Accept</button>  
</dialog>


<div id="container" style="display: none">
	<video autoplay="true" id="videoElement1"></video>	
	<img id="videoElement2"/>
</div>

</body>
<script>
var context="<%=request.getContextPath()%>";
var webSocketURL=null;
var user;
var socketmessage={};
var receiver;
var videoSocketURL=null;

document.getElementById('dialogclose').onclick = function() {    
    document.getElementById('myFirstDialog').close();
}; 

document.getElementById('dialogaccept').onclick = function() {   
	shareuserscreen();
	document.getElementById('myFirstDialog').close();
}; 

function getFrame(){
	var video = document.querySelector('#videoElement1');
	var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    var data = canvas.toDataURL('image/jpeg');
    return data;
}

function startvideostream(){
	
	//videoSocketURL = new WebSocket("wss://appservice07.azurewebsites.net/video/"+user+"/"+receiver);
	videoSocketURL=new WebSocket("ws://localhost:8080/ChatApplication/video/"+user+"/"+receiver);
	videoSocketURL.onopen = function () {
        console.log("Openened connection to videowebsocket");
    }
	videoSocketURL.onmessage = function(msg) {
		var target = document.getElementById("videoElement2");
	    url = window.webkitURL.createObjectURL(msg.data);
	    target.onload = function() {
	          window.webkitURL.revokeObjectURL(url);
	    };
	    target.src = url;
	}
	
	videoSocketURL.onclose = function (closeEvent) {
		console.log("inside onclose for websocket");
	};
	
	videoSocketURL.onerror = function (errorEvent) {
		console.log("inside onerror for websocket");
	};

	
	setInterval(()=>{
    var newblob = convertToBinary(getFrame());
    videoSocketURL.send(newblob);     
    }, 1000 / 10); 
    
}

function convertToBinary (dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var bb = new Blob([ab]);
    return bb;
}

function newfunc(username){
	user=username;
	document.getElementById("firstscreen").style.display = "none";
	setupwebsocket();
	document.getElementById("secondscreen").style.display = "block";
}

function broadcast(chattext){
	socketmessage.hasVideo=false;
	socketmessage.payload=chattext;
	webSocketURL.send(JSON.stringify(socketmessage));
	document.getElementById('chatbox').value='';
}


function shareuserscreen(){
	console.log("sender: " + user + ",receiver: " + receiver);
	document.getElementById("container").style.display = "block";
	var video = document.querySelector("#videoElement1");
	if (navigator.mediaDevices.getUserMedia) {
	  navigator.mediaDevices.getUserMedia({ video: true ,audio: true})
	    .then(function (stream) {
	      console.log(stream);
	      video.srcObject = stream;
	      startvideostream();
	    })
	    .catch(function (err0r) {
	      console.log("Something went wrong!");
	    });
	}
}


function loadonlineusers(username){	
	var userlist=[];
	document.getElementById('loggedininfo').innerHTML="Logged in user is : " + username;
	user=username;
	document.getElementById("firstscreen").style.display = "none";
	document.getElementById("secondscreen").style.display = "block";
	setupwebsocket();
	poller();
	
	/*setInterval(function(){
		poller();
	},5000);*/
}

window.onbeforeunload = function () {
	//webSocketURL.send(user+" left the room");
	
};



function poller(){
	$.ajax(context+'/chat/fetchusers', 
			{
			    dataType: 'json',
			    async: false,
			    success: function (data) {
			    	userlist=data;
			    },
			    error: function (errorMessage) {
			    	alert('failures e')
			        console.log('Error: ' + errorMessage);
			    }
			});
	
	var ul = document.getElementById("listuser");
	$("#listuser").empty();
	
	for(var i=0	;i<userlist.length;i++){
	var li = document.createElement("li");
	li.className = "notification";
	
	
	var text=document.createElement("span");
	text.innerHTML = userlist[i];
	text.id="t_"+userlist[i];
	li.appendChild(text);
	
	/*var badge=document.createElement("span");
	badge.className = "badge";
	badge.id="b_"+userlist[i];
	badge.innerHTML = "0";
	
	li.appendChild(badge);*/
	
	ul.appendChild(li);
	}
	
	$("#listuser li").click(function() {
	    socketmessage.senderName=user;
	   // receiver=$(this).text();
	    receiver=$(this)[0].childNodes[0].innerText;
	    document.getElementById('chattingwith').innerHTML="Conversation with : "+receiver;
		socketmessage.receiverName=receiver;
		//document.getElementById("secondscreen").style.display = "none";
		//document.getElementById("thirdscreen").style.display = "block";
	});
}

function setupwebsocket(){
//webSocketURL = new WebSocket("wss://appservice07.azurewebsites.net/chat/"+user);
webSocketURL = new WebSocket("ws://localhost:8080/ChatApplication/chat/"+user);
webSocketURL.onopen = function(openEvent) {
	console.log("inside onopen for websocket");
    console.log("WebSocket OPEN: " + JSON.stringify(openEvent, null, 4));
};
webSocketURL.onclose = function (closeEvent) {
	console.log("inside onclose for websocket");
	alert("You have been logged out kindly log back in");
	document.getElementById("secondscreen").style.display = "none";
	document.getElementById("firstscreen").style.display = "block";
    console.log("WebSocket CLOSE: " + JSON.stringify(closeEvent, null, 4));
};
webSocketURL.onerror = function (errorEvent) {
	console.log("inside onerror for websocket");
    console.log("WebSocket ERROR: " + JSON.stringify(errorEvent, null, 4));
};
webSocketURL.onmessage = function (messageEvent) {
	console.log("inside onmessage for websocket");
    var wsMsg = JSON.parse(messageEvent.data);
    if((wsMsg.receiverName==receiver && wsMsg.senderName==user) || (wsMsg.receiverName==user && wsMsg.senderName==receiver))
    {
    	if(wsMsg.hasVideo)
    	{	
    	document.getElementById('myFirstDialog').show();
    	document.getElementById('dialogtext').innerHTML=wsMsg.payload;
    	//shareuserscreen();
    	}
    	else{
        console.log("WebSocket MESSAGE: " + wsMsg);
        var oldval=document.getElementById('chattext').innerHTML;
        document.getElementById('chattext').innerHTML=oldval+"<br>"+wsMsg.senderName + " : " + wsMsg.payload;
    	}
    }
};

}
</script>
</html>