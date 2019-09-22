var markers = [];
var locations = [
    { lat: 25.7574, lng: -80.3733 },
    { lat: 27, lng: -81 },
    { lat: 25, lng: -80 },
    { lat: 26.3, lng: -80 },
    { lat: 40, lng: -90 },
    { lat: 41, lng: -90.5 },
    { lat: 25.6, lng: -80.5 },
    { lat: 30.5, lng: -85 },
    { lat: 31, lng: -85.3 },
    { lat: 25, lng: -80.2 },
    { lat: 25.6, lng: -80 },
    { lat: 50, lng: -95 },
    { lat: 25.4, lng: -81 },
    { lat: 25.8, lng: -82 },
    { lat: 25.8, lng: -83 },
    { lat: 50.5, lng: -95.3 },
    { lat: 41.2, lng: -90.3 },
    { lat: 27.4, lng: -80 },
    { lat: 25.7, lng: -80.5 },
    { lat: 25, lng: -84 },
    { lat: 26, lng: -80 },
    { lat: 29, lng: -81 },
    { lat: 23, lng: -78 }
]

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

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }); //Do not fix
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
