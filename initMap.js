function initMap() {
    var options = 
	{
		zoom: 12,
        center: {lat: 32.3792, lng: -86.3077}
	}
		
	//creates the map
    var map = new google.maps.Map(document.getElementById('map'),options);
	

	
	//the markers for each location
	var adamsDrugsCop = new google.maps.Marker({position:{lat: 32.375827, lng: -86.171495}, map:map, title: 'Adams Drugs - Copperfield'});
	var costcoPharmacy = new google.maps.Marker({position:{lat: 32.363955, lng: -86.150702}, map:map, title: 'Costco Pharmacy'});
	var walgreensPharmacy = new google.maps.Marker({position:{lat: 32.375827, lng: -86.171495}, map:map, title: 'Adams Drugs - Copperfield'});
	var adamsDrugsEast = new google.maps.Marker({position:{lat: 32.383216, lng: -86.243842}, map:map, title: 'Adams Drugs - East'});
	var adamsDrugsVR = new google.maps.Marker({position:{lat: 32.338825, lng: -86.170829}, map:map, title: 'Adams Drugs - Vaughn Road'});
	var adamsDrugsChantilly = new google.maps.Marker({position:{lat: 32.360497, lng: -86.137779}, map:map, title: 'Adams Drugs - Chantilly Corner'});
	var cvsPharmacy = new google.maps.Marker({position:{lat: 32.360263, lng: -86.162838}, map:map, title: 'CVS Pharmacy'});
	var walmartPharmacy = new google.maps.Marker({position:{lat: 32.354805, lng: -86.134936}, map:map, title: 'Walmart Pharmacy'});
	var adamsDrugsSouth = new google.maps.Marker({position:{lat: 32.337123, lng: -86.259811}, map:map, title: 'Adams Drugs - South'});
	var jonesDrugs = new google.maps.Marker({position:{lat: 32.385249, lng: -86.284295}, map:map, title: 'Jones Drugs'});
	var adamsStreetDrugs = new google.maps.Marker({position:{lat: 32.375435, lng: -86.295996}, map:map, title: 'Adams Street Drugs'});
	var boonesPharmacy = new google.maps.Marker({position:{lat: 32.326526, lng: -86.303366}, map:map, title: 'Boones Pharmacy'});
	var cityDrug = new google.maps.Marker({position:{lat: 32.377466, lng: -86.308574}, map:map, title: 'City Drug'});
	var eastsideUrgent= new google.maps.Marker({position:{lat: 32.379157, lng: -86.174595}, map:map, title:'Eastside Urgent Care'});
	var vaughnUrgent= new google.maps.Marker({position:{lat: 32.339673, lng: -86.147774}, map:map, title:'Vaughn Urgent Care'});
	var americanFamilyCare= new google.maps.Marker({position:{lat: 32.360074, lng: -86.162794}, map:map, title:'American Family Care'});
	var firstChoiceWomen= new google.maps.Marker({position:{lat: 32.378407, lng: -86.201984}, map:map, title:'First Choice Women’s Medical Center'});
	var ourMed= new google.maps.Marker({position:{lat: 32.360512, lng: -86.137199}, map:map, title:'OurMed'});
	var jacksonClinic= new google.maps.Marker({position:{lat: 32.366654, lng: -86.284253}, map:map, title:'The Jackson Clinic and Urgent Care'});
	
	var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() { geocodeAddress(geocoder, map);});
		

      function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
           /* 
			    Not Needed
			var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location 
            }); */
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
	};

	
	
	
	
	
	
	
};	
