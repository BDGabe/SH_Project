// Initialize and add the map
/*function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 }
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, map);
    });
}
function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}*/

function initMap()
{
    // The location of Uluru
    var uluru = {lat: 25.7574, lng: -80.3733};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 12, center: uluru});
    // The marker, positioned at Uluru
    var image = {
        url: "./recycleFav.png",
        scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        draggable: true,
        icon: image,
        title: 'Hello World!'
    });
}