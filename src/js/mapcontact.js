var locations = [
  ['Sofia', 42.68882989999999, 23.313602899999978],
  ['Dimitrovgrad', 42.05167420000001, 25.59726790000002],
  ['Varna', 43.2140504, 27.914733299999966],
  ['Pleven', 43.4170423, 24.60668469999996],
  ['Ruse', 43.8566119, 25.984418600000026]
];

var map = new google.maps.Map(document.getElementById('mapcontact'), {
  zoom: 10,
  center: new google.maps.LatLng(42.658812000, 23.461617000000),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    animation: google.maps.Animation.DROP,
    map: map,
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map-contact, marker);
    };
  })(marker, i));
}
