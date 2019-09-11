<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyACS_5aVObr9rpAgwNDl5y0NYm1VUbtVKI&callback=initMap" type="text/javascript"></script>
<style type="text/css">
#map{
width: 400px;
height: 400px;
}
</style>	
<script type="text/javascript">
    x=navigator.geolocation;
	var optn = {
			enableHighAccuracy: true,
			timeout: Infinity,
			maximumAge: 0	
				};
	//var watchID = navigator.geolocation.watchPosition(success, failure, optn);	
	x.getCurrentPosition(success,failure);
	function success(position){
		var mylat=position.coords.latitude;
		var mylong=position.coords.longitude;	
		console.log(mylat + "-" + mylong);
		var coords=new google.maps.LatLng(20,77);
		var mapOpts={
				zoom: 9,
				center: coords,
				mapTypeId: google.maps.MapTypeId.ROADMAP			
		}		
		var map=new google.maps.Map(document.getElementById("map"),mapOpts);
		var marker=new google.maps.Marker({map: map,position: coords});	
	}
	function failure(){}	

	$("button").click(function(){		 
		if(watchID)
		navigator.geolocation.clearWatch(watchID);	 
		watchID = null;
		return false;
	});
	
	</script>
</head>
<body>
<div id="map"></div>
<button>Stop</button>
</body>
</html>
