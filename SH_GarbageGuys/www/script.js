var markers = [];

// Initialize and add the map
function initMap() {
    var location = { lat: 25.7574, lng: -80.3733 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });

    map.addListener('click', function (e) {
        placeMarkerAndPanTo(e.latLng, map);
    });
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++)
    {
        markers[i].setMap(map);
    }
}

function placeMarkerAndPanTo(latLng, map) {
    var image = {
        url: "./recycleFav.png",
        scaledSize: new google.maps.Size(25, 25)
    };

    setMapOnAll(null);
    markers = [];

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: true,
        icon: image,
        title: 'Location'
    });

    markers.push(marker);
    map.panTo(latLng);
}
