function initMap() {
    var options = 
	{
		zoom: 12,
        center: {lat: 32.3792, lng: -86.3077}
	}
		
	//creates pharmacy map
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
	
	
	/*.......................................................................*/
	var options2 = 
	{
		zoom: 12,
        center: {lat: 32.3792, lng: -86.3077}
	}
	
	//creates map for park locations
	var parks= new google.maps.Map(document.getElementById('parksMap'),options2);
	
	
	var blountPark= new google.maps.Marker({position:{lat:32.351860,lng:-86.206010}, map:parks, title:'Blount Cultural Park'});
	var shakespeare= new google.maps.Marker({position:{lat:32.349907,lng:-86.212830}, map:parks, title:'Alabama Shakespeare Festival'});
	var idaBellYoung= new google.maps.Marker({position:{lat:32.341910,lng:-86.214550}, map:parks, title:'Ida Bell Young Park'});
	var vaughnRoad= new google.maps.Marker({position:{lat:32.350050,lng:-86.245010}, map:parks, title:'Vaughn Road Park'});
	var hannahDaye= new google.maps.Marker({position:{lat:32.341710,lng:-86.205350}, map:parks, title:'Hannah Daye Ridling Bark Park'});
	var woodmere= new google.maps.Marker({position:{lat:,lng:}, map:parks, title:'Woodmere Park'});
	var gateway= new google.maps.Marker({position:{lat:32.354600,lng:-86.209790}, map:parks, title:'Gateway Park'});
	var cloverdale= new google.maps.Marker({position:{lat:32.350180,lng:-86.292440}, map:parks, title:'Cloverdale Road Park'});
	var oakPark= new google.maps.Marker({position:{lat:32.368150,lng:-86.287370}, map:parks, title:'Oak Park'});
	var brendaBonner= new google.maps.Marker({position:{lat:32.367550,lng:-86.248650}, map:parks, title:'Brenda Bonner Park'});
	var riverFront= new google.maps.Marker({position:{lat:32.379370,lng:-86.311120}, map:parks, title:'Riverfront Park'});
	var legrandePark= new google.maps.Marker({position:{lat:32.351540,lng:-86.298880}, map:parks, title:'LeGrande Park'});
	var woodsRvPark= new google.maps.Marker({position:{lat:32.323450,lng:-86.331340}, map:parks, title:'The Woods Rv Park'});
	var audobonPark= new google.maps.Marker({position:{lat:32.348540,lng:-86.292900}, map:parks, title:'Audobon Park'});
	var cloverdalePark= new google.maps.Marker({position:{lat:32.355440,lng:-86.292290}, map:parks, title:'Cloverdale Park'});
	var darringtonPark= new google.maps.Marker({position:{lat:32.321810,lng:-86.259340}, map:parks, title:'Darrington/Ritchie (Dorchester) Park'});
	var deanFainPark= new google.maps.Marker({position:{lat:32.359920,lng: -86.142520}, map:parks, title:'Dean Fain Park'});
	var powderPark= new google.maps.Marker({position:{lat:32.380830,lng:-86.328030}, map:parks, title:'Powder Magazine Park'});
	var dannellyPark= new google.maps.Marker({position:{lat:32.344150,lng:-86.260860}, map:parks, title:'Dannelly Park'});
	/*.......................................................................*/
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
