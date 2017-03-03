var locations = [
    [
        "Clearihue",
        48.464111, 
        -123.310460
    ],
    [
    		"University Centre",
        48.464943,
        -123.311104
    ],
    [
           "Maclaurin Building",
           48.462411,
           -123.314301
    ],
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var count = 0;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function(){
          console.log (marker.position.lat(), marker.position.lng());
          count++;
          infowindow.setContent(locations[i][0]+"  "+marker.position.lat()+marker.position.lng()+"  count:"+count);
          infowindow.open(map, marker);
        }
      })(marker, i));
    
    }