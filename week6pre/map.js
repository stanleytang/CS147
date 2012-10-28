function MapModule(id) {
  this.mapCanvas = document.getElementById(id);
  this.map = new google.maps.Map(
    this.mapCanvas,
    {
      zoom: 14,
      // initially center on Stanford
      center: new google.maps.LatLng(37.4225, -122.1653),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: true,
      zoomControlOptions: {
         style: google.maps.ZoomControlStyle.LARGE
      }
    }
  );
  
  this.buildMap();
  this.fetchAndShowStopsInArea();
}

MapModule.prototype.fetchAndShowStopsInArea = function() {  
  var stop1 = {
    latitude: 37.4419,
    longitude: -122.1649,
  };

  var stop2 = {
    latitude: 37.4292,
    longitude: -122.1706,
  };

  var stop3 = {
    latitude: 37.4221,
    longitude: -122.1624,
  };
  
  var stop4 = {
    latitude: 37.4292,
    longitude: -122.1650,
  };

  var stopArray = [stop1, stop2, stop3, stop4];

  this.displayStopsOnMap(stopArray);
}

// Set the map canvas's height/width (Google Maps needs inline height/width)
MapModule.prototype.buildMap = function() {
	// Regular web browser
	if (("standalone" in window.navigator) && !window.navigator.standalone) {
    var height = $(window).height() - $("div[data-role='header']").height() + 60;
  
  // In app
  } else {
	  var height = $(window).height() - $("div[data-role='header']").height();
  }	  
	  
	this.mapCanvas.style.width = '100%';
	this.mapCanvas.style.height = height + 'px';
}

MapModule.prototype.displayStopsOnMap = function(stopsInfoArray) {  
  for (index in stopsInfoArray) {
    var stop = stopsInfoArray[index];
    var stopLatLng = new google.maps.LatLng(stop.latitude, stop.longitude);
    
    // Create marker
    var stopMarker = new google.maps.Marker({
      position: stopLatLng,
      map: this.map
    });

    // Create popup window
    var stopInfoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(stopMarker, 'click', function() {
      var content = "<b>Location</b><br>(" + this.position.Ya + ", " 
        + this.position.Za + ")";
      stopInfoWindow.setContent(content);
      stopInfoWindow.open(this.map, this);
    });
  }
}

