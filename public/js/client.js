"use strict";function init(){console.log("load"),clickToViewMap()}function clickToViewMap(){$(".mapView").on("click",function(){loadMap()})}function loadMap(){map=new google.maps.Map(document.getElementById("map"),{zoom:14,center:new google.maps.LatLng(42.331429,-83.045753)})}function showGridHideNav(){$(".show-grid").on("load",function(){console.log("fuck a-duck")})}$(document).ready(function(){$(".button-collapse").sideNav()});var map=void 0;$(init);