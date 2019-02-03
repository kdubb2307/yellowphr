 var map;
 var service;
 
 
 function initMap() {
	 var montomgery= new google.maps.LatLng(32.3792, -86.3077);
	 
	 map= new google.maps.Map(document.getElementById('map'), {
		 center: montomgery,
		 zoom:13
	 });
	 
	 //information for the nearbySearch
	 var request={
		 location:montomgery,
		 radius: '4000',
		 type: 'pharmacy'
	 };
	 
	 //creates Google Place Service
	 service = new google.maps.places.PlacesService(map);
	 service.nearbySearch(request, callback);
 
 
 function callback(results, status){
	 if (status == google.maps.places.PlacesServiceStatus.OK) {
		 for (var i= 0; i < results.length; i++) {
			 var place = results[i];
			 createMarker (results[i]);
		 }
	 }
 }
 
 function createMarker(place) {
	 var marker = new google.maps.Marker ({
		 map:map,
		 title: place.name,
		 position: place.geometry.location});
		 
		 var infowindow = new google.maps.InfoWindow();
		 
		 google.maps.event.addListener(marker, 'click', function(){
			 infowindow.setContent(place.name);
			 infowindow.open(map, this);
		 });
 }//end createMarker
 
 }//end initMap
 
 
 
 function parkMarkers(){
	 
	var montomgery= new google.maps.LatLng(32.3792, -86.3077);
	 
	 map= new google.maps.Map(document.getElementById('map'), {
		 center: montomgery,
		 zoom:13
	 });
	 
	 //information for the nearbySearch
	 var request={
		 location:montomgery,
		 radius: '4000',
		 type: 'park'
	 };
	 
	 //creates Google Place Service
	 service = new google.maps.places.PlacesService(map);
	 service.nearbySearch(request, callback);
 
 
 function callback(results, status){
	 if (status == google.maps.places.PlacesServiceStatus.OK) {
		 for (var i= 0; i < results.length; i++) {
			 var place = results[i];
			 createMarker (results[i]);
		 }
	 }
 }
 
 function createMarker(place) {
	 var marker = new google.maps.Marker ({
		 map:map,
		 title: place.name,
		 position: place.geometry.location});
		 
		 var infowindow = new google.maps.InfoWindow();
		 
		 google.maps.event.addListener(marker, 'click', function(){
			 infowindow.setContent(place.name);
			 infowindow.open(map, this);
		 });
 }//end createMarker 
	 
 }//end parkMarkers
 
 function gymMarkers(){
	 
	var montomgery= new google.maps.LatLng(32.3792, -86.3077);
	 
	 map= new google.maps.Map(document.getElementById('map'), {
		 center: montomgery,
		 zoom:13
	 });
	 
	 //information for the nearbySearch
	 var request={
		 location:montomgery,
		 radius: '4000',
		 type: 'gym'
	 };
	 
	 //creates Google Place Service
	 service = new google.maps.places.PlacesService(map);
	 service.nearbySearch(request, callback);
 
 
 function callback(results, status){
	 if (status == google.maps.places.PlacesServiceStatus.OK) {
		 for (var i= 0; i < results.length; i++) {
			 var place = results[i];
			 createMarker (results[i]);
		 }
	 }
 }
 
 function createMarker(place) {
	 var marker = new google.maps.Marker ({
		 map:map,
		 title: place.name,
		 position: place.geometry.location});
		 
		 var infowindow = new google.maps.InfoWindow();
		 
		 google.maps.event.addListener(marker, 'click', function(){
			 infowindow.setContent(place.name);
			 infowindow.open(map, this);
		 });
 }//end createMarker 
	 
 }//end gymMarkers