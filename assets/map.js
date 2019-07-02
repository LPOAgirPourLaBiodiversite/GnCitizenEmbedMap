if (citizenType == "observations") {
    var dataUrl = citizenUrl + "/programs/" + citizenProgram + "/" + citizenType;
} else if (citizenType == "sites") {
    var dataUrl = citizenUrl + "/" + citizenType + "/programs/" + citizenProgram;
}

if (citizenProgram == "all") {
    var programUrl = citizenUrl + "/programs" + "?with_geom=true";
}
else {
    var programUrl = citizenUrl + "/programs/" + citizenProgram;
}
var map = L.map("map").setView([45, 5], 10);
L.tileLayer(tileLayer, {
    attribution: tileLayerAttribution
}).addTo(map);

function zoomToFeature(e) {
    console.log(L.latLngBounds(e.target.getLatLng()));
    map.fitBounds(L.latLngBounds(e.target.getLatLng()));
}

// attach the event handlers to events
function onEachFeature(feature, layer) {
    // if (feature.properties && feature.properties.popupContent) {
    //   popupContent += feature.properties.popupContent;
    // }
    layer.on("click", function(e) {
        //  zoomToFeature(e); // ev is an event object (MouseEvent in this case)
    });
}

function SiteData(json) {
    // assign colors to each "COALIT" (a.k.a. neighborhood coalition)
    // add the data to the map
    siteGeoJson = L.geoJSON(json, {
            // both `style` and `onEachFeature` want a function as a value
            // the function for `style` is defined inline (a.k.a. an "anonymous function")
            // the function for `onEachFeature` is defined earlier in the file
            // so we just set the value to the function name
            pointToLayer: function(feature, latlng) {
                var smallIcon = new L.Icon({
                    iconSize: [34, 43],
                    iconAnchor: [17, 43],
                    popupAnchor: [0, -25],
                    iconUrl: dataMarker
                });
                return L.marker(latlng, { icon: smallIcon });
            },
            onEachFeature: onEachFeature // call onEachFeature
        })
        .bindPopup(function(layer) {
            var popupContent = "";
            console.log(layer.feature.properties);
            if (citizenType == "sites") {
                popupContent =
                    "#" +
                    layer.feature.properties.id_site +
                    " <b>" +
                    layer.feature.properties.name +
                    "</b>";
            } else if (citizenType == "observations") {
                popupContent =
                    "#" +
                    layer.feature.properties.date +
                    " <b>" +
                    layer.feature.properties.common_name +
                    "</b>";
            }
            return popupContent; // use the NAME property as the popup value
        })
        .addTo(map); // add it to the map
}

function AreaData(json) {
    // assign colors to each "COALIT" (a.k.a. neighborhood coalition)
    // add the data to the map
    AreaGeoJson = L.geoJSON(json, {
        // both `style` and `onEachFeature` want a function as a value
        // the function for `style` is defined inline (a.k.a. an "anonymous function")
        // the function for `onEachFeature` is defined earlier in the file
        // so we just set the value to the function name
        pointToLayer: function(feature, latlng) {
            var smallIcon = new L.Icon({
                iconSize: [34, 43],
                iconAnchor: [13, 27],
                popupAnchor: [1, -24],
                iconUrl: "assets/images/pointer-green.png"
            });
            return L.marker(latlng, { icon: smallIcon });
        },
        onEachFeature: onEachFeature,
        style: {
            color: "#1779ba" /* Couleur des polygones */ ,
            weight: 2 /* Epausseur de la bordure */ ,
            opacity: 0.8 /* Transparence de la bordure */ ,
            fillOpacity: 0.05 /* Transparence du fond des polygones */
        } // call onEachFeature
    }).addTo(map); // add it to the map
}

fetch(
        programUrl // this URL is provided in the assets directory
    )
    .then(function(response) {
        console.log(programUrl)
        return response.json();
    })
    .then(function(json) {
        // this is where we do things with data
        AreaData(json);
        console.log('Bounds', AreaGeoJson.getBounds());
        map.fitBounds(AreaGeoJson.getBounds());
    });

fetch(
        dataUrl // this URL is provided in the assets directory
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // this is where we do things with data
        SiteData(json);
        //map.fitBounds(geojson.getBounds());
    });