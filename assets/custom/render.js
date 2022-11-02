function highlightFeature(e) {
    var layer = e.target;
    // console.log(layer);
    layer.setStyle({
        weight: 3,
        color: '#22FFEE',
        fillOpacity: 0,
        fillColor: '#f22a77'
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

}

function resetHighlight(e) {
    comFr.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachComFr(feature, layer) {

    var popup = L.popup();
    let str_popup = '';
    // Commercial route
	str_popup += '<span class="text-center"><b>'+ feature.properties.com_value1 +'</b><br>'+ feature.properties.com_value2 +' '+ feature.properties.com_value3 + ' </span>';
	// Responsable
	str_popup += '<p><b>'+ feature.properties.com_type_name4 +'</b><br>'+ feature.properties.com_value4 +'<br>'+ feature.properties.com_value5 + ' '+ feature.properties.com_value6 + '<br>'+ feature.properties.com_value7 + ' '+ feature.properties.com_value8 + '</p>';
    // ADV
	str_popup += '<p><b>'+ feature.properties.com_type_name9 +'</b><br>'+ feature.properties.com_value9 +' <br> '+ feature.properties.com_value10 + ' '+ feature.properties.com_value11 + '</p>';
    // Alternant
	str_popup += '<p><b>'+ feature.properties.com_type_name12 +'</b><br>'+ feature.properties.com_value12 +' <br> '+ feature.properties.com_value13 + ' '+ feature.properties.com_value14 + '</p>';
    // Navette
	str_popup += '<p><b>'+ feature.properties.com_type_name15 +'</b><br>'+ feature.properties.com_value15 +' <br> '+ feature.properties.com_value16 + '<br>'+ feature.properties.com_value17 + ' '+ feature.properties.com_value18 + '</p>';
	str_popup += '<p>'+ feature.properties.com_value19 +' <br> '+ feature.properties.com_value20 + '<br>'+ feature.properties.com_value21 + ' '+ feature.properties.com_value22 + '</p>';
	str_popup += '<p>'+ feature.properties.com_value23 +' <br> '+ feature.properties.com_value24 + '<br>'+ feature.properties.com_value25 + ' '+ feature.properties.com_value26 + '</p>';

	
    str_popup += '<table style="width: 100%">';
    str_popup += '<tr><td class="text-center">' + feature.properties.cca_2 + ', ' + feature.properties.name_2 + '</td></tr>';
    str_popup += '<tr><td class="text-center"></td></tr>';
    str_popup += '<tr><td class="text-center">' + feature.properties.name_1 + '</td></tr>';
    str_popup += '</table>';



    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);


    layer.on({
        // mouseover: highlightFeature,
        // mouseout: resetHighlight,
        click: zoomToFeature
    });

    layer.bindTooltip(layer.feature.properties.cca_2, {
        permanent: true,
        direction: "center",
        opacity: .5,
        className: 'label-tooltip'
    });



     layer.on('mouseover', function (e) {
         var popup = e.target.getPopup();
         popup.setLatLng(e.latlng).openOn(map);
        // info.update(str_popup);
     });

     layer.on('mouseout', function (e) {
         e.target.closePopup();
        // info.update('');
     });
}
function onEachPoint(feature, layer){

    var icon = GoogleIcon('<span class="g-icon"><i class="fa fa-map-marker" style="font-size:24px; color: #d7ea04"></i></span>');
    layer.setIcon(icon);

    var popup = L.popup();
    let str_popup = feature.properties.name;

    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);


    layer.on('mouseover', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
    });

    layer.on('mouseout', function (e) {
        e.target.closePopup();
    });

}

function onEachSaleArea(feature, layer){
    
    var popup = L.popup();
    let str_popup = '';
    str_popup += '<span class="text-center"><b>'+ feature.properties.name_2 + ', ' + feature.properties.name_1 + 
    ' (' + feature.properties.cca_2 + ')</b><br><b>'+ feature.properties.area_name +'</br> '+ feature.properties.type + '</b><br>'+
    '<b>Phone: </b>'+ feature.properties.phone + '<br><b>Email: </b>'+ feature.properties.email +
    ' </span>';

    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);

    layer.on('mouseover', function (e) {
        // info.update(str_popup);
        var popup = e.target.getPopup();
         popup.setLatLng(e.latlng).openOn(map);
    });

    layer.on('mouseout', function (e) {
        // info.update('');
        e.target.closePopup();
    });

    layer.bindTooltip(layer.feature.properties.cca_2, {
        permanent: true,
        direction: "center",
        opacity: .6,
        className: 'label-tooltip'
    });

}



