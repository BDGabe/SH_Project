var markers = [];
var locations = [
    { lat: 25.7574, lng: -80.3733 },
    { lat: 27, lng: -81 },
    { lat: 25, lng: -80 },
    { lat: 26.3, lng: -80 },
    { lat: 41, lng: -90.489 },
    { lat: 41, lng: -90.5 },
    { lat: 25.7572, lng: -80.38 },
    { lat: 30.5, lng: -85 },
    { lat: 31, lng: -85.3 },
    { lat: 25, lng: -80.2 },
    { lat: 25.6, lng: -80 },
    { lat: 50.487, lng: -95.3 },
    { lat: 25.4, lng: -81 },
    { lat: 25.759, lng: -80.37 },
    { lat: 25.758, lng: -80.38 },
    { lat: 50.5, lng: -95.3 },
    { lat: 41.01, lng: -90.509 },
    { lat: 27.4, lng: -80 },
    { lat: 25.7, lng: -80.5 },
    { lat: 25, lng: -84 },
    { lat: 26, lng: -80 },
    { lat: 29, lng: -81 },
    { lat: 23, lng: -78 }
]

// Initialize and add the map
function initMap() {
    var image = {
        url: "./recycleFav.png",
        scaledSize: new google.maps.Size(25, 25)
    };
    var location = { lat: 25.7574, lng: -80.3733 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });

    if (document.getElementById('check')) {
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
                label: labels[i % labels.length],
                icon: image
            });
        });

        var markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }); //Do not fix
    }
    else
    {
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        var markers = locations.map(function (location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
                icon: image
            });
        });

        var markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }); //Do not fix
    }
}
function clicked() {
    var latid = markers[0].getPosition().lat();
    var long = markers[0].getPosition().lng();
    locations.push({ lat: latid, lng: long });
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

function pay()
{
    document.getElementById('ThankYou').innerHTML = 'Thank you for the contribution!';
}