
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Display Webcam Stream</title>

</head>
<body>
<video id="peer2-to-peer1" autoplay controls style="width:40%;"></video>
<video id="peer1-to-peer2" autoplay controls style="width:40%;"></video>

<script>
 var mediaConstraints = {
     optional: [],
     mandatory: {
         OfferToReceiveAudio: true,
         OfferToReceiveVideo: true
     }
 };

 var offerer, answerer;
 var offererToAnswerer = document.getElementById('peer1-to-peer2');
 var answererToOfferer = document.getElementById('peer2-to-peer1');

 window.RTCPeerConnection = window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
 window.RTCSessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription;
 window.RTCIceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate;

navigator.getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

window.URL = window.webkitURL || window.URL;

 window.iceServers = {
     iceServers: [{
         url: 'stun:23.21.150.121'
     }]
 };

 /* offerer */

 function offererPeer(stream) {
	 
	 console.log('inside offererPeer : ' + stream );
     offerer = new RTCPeerConnection(window.iceServers);
     offerer.addStream(stream);

     offerer.onaddstream = function (event) {
         offererToAnswerer.srcObject = stream;
         offererToAnswerer.play();
     };

     offerer.onicecandidate = function (event) {
         if (!event || !event.candidate) return;
         answerer.addIceCandidate(event.candidate);
     };

     offerer.createOffer(function (offer) {
    	 console.log('offer created: ' + offer);
    	 debugger;
         offerer.setLocalDescription(offer);
         answererPeer(offer, stream);
     }, onSdpError, mediaConstraints);
 }


 /* answerer */

 function answererPeer(offer, stream) {
	 console.log('inside answererPeer : ' + stream );
     answerer = new RTCPeerConnection(window.iceServers);
     answerer.addStream(stream);

     answerer.onaddstream = function (event) {
         answererToOfferer.srcObject = stream;
         answererToOfferer.play();
     };

     answerer.onicecandidate = function (event) {
         if (!event || !event.candidate) return;
         offerer.addIceCandidate(event.candidate);
     };

     answerer.setRemoteDescription(offer, onSdpSucces, onSdpError);
     answerer.createAnswer(function (answer) {
         answerer.setLocalDescription(answer);
         offerer.setRemoteDescription(answer, onSdpSucces, onSdpError);
     }, onSdpError, mediaConstraints);
 }
 
 if (navigator.mediaDevices.getUserMedia) {
	  navigator.mediaDevices.getUserMedia({ video: true })
	    .then(function (stream) {
	    	offererPeer(stream);
	      
	    })
	    .catch(function (err0r) {
	      console.log("Something went wrong!");
	    });
	}



 function onSdpError(e) {
     console.error('onSdpError', e);
 }

 function onSdpSucces() {
     console.log('onSdpSucces');
 }
</script>
</body>