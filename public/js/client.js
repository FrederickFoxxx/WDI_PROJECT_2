"use strict";function init(){console.log("load"),clickToViewMap()}function clickToViewMap(o){$("#mapView").click(loadMap())}function loadMap(){console.log("where is map"),map=new google.maps.Map(document.getElementById("map"),{zoom:14,center:new google.maps.LatLng(51.515113,-.072051)})}var map=void 0;$(init);