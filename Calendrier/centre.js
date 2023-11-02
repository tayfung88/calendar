mapboxgl.accessToken = 'pk.eyJ1IjoiY2hjYXJwZW50aWVyIiwiYSI6ImNrMXQ4dGUzNTBtbWUzZm51OHdmbmt1azcifQ.AbWWx7kFHxTx71GwJToVpA';
var map = new mapboxgl.Map({
style: 'mapbox://styles/mapbox/light-v10',
center: [6.138736482626881, 48.775738051943335],
zoom: 18.5,
pitch: 80,
bearing: 25,
container: 'map',
antialias: true
});

var markerData = [
    { lngLat: [6.138624449459143, 48.77609559543457], popupText: 'SD-Innovation' },
    { lngLat: [6.139321386573697, 48.776629194243064], popupText: 'AFPA - Centre de Pompey' },
    { lngLat: [6.1398694633351925, 48.776501368860906], popupText: 'AFPA - Centre de Pompey' },
    { lngLat: [6.139783755859998, 48.77592912333588], popupText: 'Graphaconcept' }
];

// Ajouter des marqueurs à partir du tableau de données
markerData.forEach(function (data) {
    var marker = new mapboxgl.Marker()
        .setLngLat(data.lngLat) // Coordonnées du marqueur
        .setPopup(new mapboxgl.Popup().setHTML(data.popupText)) // Infobulle
        .addTo(map);
});

 
// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
// Insert the layer beneath any symbol layer.
var layers = map.getStyle().layers;
 
var labelLayerId;
for (var i = 0; i < layers.length; i++) {
if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
labelLayerId = layers[i].id;
break;
}
}
 
map.addLayer({
'id': '3d-buildings',
'source': 'composite',
'source-layer': 'building',
'filter': ['==', 'extrude', 'true'],
'type': 'fill-extrusion',
'minzoom': 15,
'paint': {
'fill-extrusion-color': '#aaa',
 
// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
'fill-extrusion-height': [
"interpolate", ["linear"], ["zoom"],
15, 0,
15.05, ["get", "height"]
],
'fill-extrusion-base': [
"interpolate", ["linear"], ["zoom"],
15, 0,
15.05, ["get", "min_height"]
],
'fill-extrusion-opacity': .6
}
}, labelLayerId);
});

