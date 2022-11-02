
const fetchText = async (url) => {
	const response = await fetch(url);
	return await response.text();
}
const csvUrl = 'assets/data/loc_info.csv';
const pointsUrl = 'assets/data/point_info.csv';
const salesUrl = 'assets/data/sales-info.csv';

// --------------------------------------------------------------------

var aoiLayer = L.geoJSON(outline, {
	style: styleAoi,
	// onEachFeature: onEachAoi,
	interactive: false
});


var map = L.map('map', {
	// maxBounds: aoiLayer.getBounds(),
	// maxBoundsViscosity: 1.0,
	layers: [basemapCarto]
}).setView([46.2276, 2.2137], 5);
map.options.minZoom = 5;
map.options.maxZoom = 20;
// map.fitBounds(aoiLayer.getBounds());
L.Control.geocoder().addTo(map);
const info = L.control();

var baseLayers = {
	'Carto': basemapCarto,
	'Google': googleTerrain,
	'Street': Esri_WorldStreetMap,
};

let layerControl;
let pointsLayer;
let salesLayer;
let overlays = {};

let comFr = { "type": "FeatureCollection" };

fetchText(csvUrl).then(text => {
	let pois = d3.csvParse(text);
	// console.log(pois);

	for (i = 0; i < com_fr.features.length; i++) {
		let adata = _.filter(pois, function (r) {
			return parseInt(r.id) == parseInt(com_fr.features[i].properties.id); // -1 means not present
		});
		// console.log(adata);

		com_fr.features[i].properties["name_1"] = adata[0].name_1;
		com_fr.features[i].properties["name_2"] = adata[0].name_2;
		com_fr.features[i].properties["cca_2"] = adata[0].cca_2;
		com_fr.features[i].properties["type"] = adata[0].type;
		com_fr.features[i].properties["type_2"] = adata[0].type_2;

		// com_fr.features[i].properties["com_type"] = adata[0].com_type;
		// com_fr.features[i].properties["value"] = adata[0].value;
		// com_fr.features[i].properties["com_type_no"] = adata[0].com_type_no;
		// com_fr.features[i].properties["com_type_no2"] = adata[0].com_type_no2;
		// com_fr.features[i].properties["com_type_no3"] = adata[0].com_type_no3;


		com_fr.features[i].properties["com_type_name1"] = adata[0].com_type_name1;
		com_fr.features[i].properties["com_value1"] = adata[0].com_value1;
		com_fr.features[i].properties["com_type_name2"] = adata[0].com_type_name2;
		com_fr.features[i].properties["com_value2"] = adata[0].com_value2;
		com_fr.features[i].properties["com_type_name3"] = adata[0].com_type_name3;
		com_fr.features[i].properties["com_value3"] = adata[0].com_value3;
		com_fr.features[i].properties["com_type_name4"] = adata[0].com_type_name4;
		com_fr.features[i].properties["com_value4"] = adata[0].com_value4;
		com_fr.features[i].properties["com_type_name5"] = adata[0].com_type_name5;
		com_fr.features[i].properties["com_value5"] = adata[0].com_value5;
		com_fr.features[i].properties["com_type_name6"] = adata[0].com_type_name6;
		com_fr.features[i].properties["com_value6"] = adata[0].com_value6;
		com_fr.features[i].properties["com_type_name7"] = adata[0].com_type_name7;
		com_fr.features[i].properties["com_value7"] = adata[0].com_value7;
		com_fr.features[i].properties["com_type_name8"] = adata[0].com_type_name8;
		com_fr.features[i].properties["com_value8"] = adata[0].com_value8;
		com_fr.features[i].properties["com_type_name9"] = adata[0].com_type_name9;
		com_fr.features[i].properties["com_value9"] = adata[0].com_value9;
		com_fr.features[i].properties["com_type_name10"] = adata[0].com_type_name10;
		com_fr.features[i].properties["com_value10"] = adata[0].com_value10;
		com_fr.features[i].properties["com_type_name11"] = adata[0].com_type_name11;
		com_fr.features[i].properties["com_value11"] = adata[0].com_value11;
		com_fr.features[i].properties["com_type_name12"] = adata[0].com_type_name12;
		com_fr.features[i].properties["com_value12"] = adata[0].com_value12;
		com_fr.features[i].properties["com_type_name13"] = adata[0].com_type_name13;
		com_fr.features[i].properties["com_value13"] = adata[0].com_value13;
		com_fr.features[i].properties["com_type_name14"] = adata[0].com_type_name14;
		com_fr.features[i].properties["com_value14"] = adata[0].com_value14;
		com_fr.features[i].properties["com_type_name15"] = adata[0].com_type_name15;
		com_fr.features[i].properties["com_value15"] = adata[0].com_value15;
		com_fr.features[i].properties["com_type_name16"] = adata[0].com_type_name16;
		com_fr.features[i].properties["com_value16"] = adata[0].com_value16;
		com_fr.features[i].properties["com_type_name17"] = adata[0].com_type_name17;
		com_fr.features[i].properties["com_value17"] = adata[0].com_value17;
		com_fr.features[i].properties["com_type_name18"] = adata[0].com_type_name18;
		com_fr.features[i].properties["com_value18"] = adata[0].com_value18;
		com_fr.features[i].properties["com_type_name19"] = adata[0].com_type_name19;
		com_fr.features[i].properties["com_value19"] = adata[0].com_value19;
		com_fr.features[i].properties["com_type_name20"] = adata[0].com_type_name20;
		com_fr.features[i].properties["com_value20"] = adata[0].com_value20;
		com_fr.features[i].properties["com_type_name21"] = adata[0].com_type_name21;
		com_fr.features[i].properties["com_value21"] = adata[0].com_value21;
		com_fr.features[i].properties["com_type_name22"] = adata[0].com_type_name22;
		com_fr.features[i].properties["com_value22"] = adata[0].com_value22;
		com_fr.features[i].properties["com_type_name23"] = adata[0].com_type_name23;
		com_fr.features[i].properties["com_value23"] = adata[0].com_value23;
		com_fr.features[i].properties["com_type_name24"] = adata[0].com_type_name24;
		com_fr.features[i].properties["com_value24"] = adata[0].com_value24;
		com_fr.features[i].properties["com_type_name25"] = adata[0].com_type_name25;
		com_fr.features[i].properties["com_value25"] = adata[0].com_value25;
		com_fr.features[i].properties["com_type_name26"] = adata[0].com_type_name26;
		com_fr.features[i].properties["com_value26"] = adata[0].com_value26;



	}

	comFr = L.geoJSON(com_fr, {
		style: styleComFr,
		onEachFeature: onEachComFr,
	});


	comFr.addTo(map);
	aoiLayer.addTo(map);


	// // Add markers
	//     // position we will use later
	// 	//48.01889281221366, 0.11363929811168137
	//     var lat_trange = 48.01889281221366;
	//     var lon_trange = 0.11363929811168137;

	// 	//45.77589614317896, 4.214680199179003
	//     var lat_epercieux = 45.77589614317896;
	//     var lon_epercieux = 4.214680199179003;

	// 	//48.706413222085985, 7.760882599218421
	//     var lat_geudertheim = 48.706413222085985;
	//     var lon_geudertheim = 7.760882599218421;

	// 	//44.40682727061503, 0.2934339279967747
	//     var lat_tonneins = 44.406827270615033;
	//     var lon_tonneins = 0.2934339279967747;

	// 	//49.795620275206744, 4.626402071670263
	//     var lat_charleville = 49.795620275206744;
	//     var lon_charleville = 4.626402071670263;

	//     marker_trange = L.marker([lat_trange, lon_trange]).addTo(map);
	// 	marker_epercieux = L.marker([lat_epercieux, lon_epercieux]).addTo(map);
	// 	marker_geudertheim = L.marker([lat_geudertheim, lon_geudertheim]).addTo(map);
	// 	marker_tonneins = L.marker([lat_tonneins, lon_tonneins]).addTo(map);
	// 	marker_charleville = L.marker([lat_charleville, lon_charleville]).addTo(map);

	//     // add popup to the marker
	//     marker_trange.bindPopup("<b>Trangé</b>").openPopup();
	//     marker_epercieux.bindPopup("<b>Epercieux-Saint-Paul</b>").openPopup();
	//     marker_geudertheim.bindPopup("<b>Geudertheim</b>").openPopup();
	//     marker_tonneins.bindPopup("<b>Tonneins</b>").openPopup();
	//     marker_charleville.bindPopup("<b>Charleville-Mezieres</b>").openPopup();


	var controlSearch = new L.Control.Search({
		// position:'topright',	
		layer: comFr,
		initial: false,
		zoom: 12,
		// marker: true,
		collapsed: true,
		textPlaceholder: 'Rechercher un departement',
		propertyName: 'name_2',
		hideMarkerOnCollapse: true,
	});

	map.addControl(controlSearch);

});

let points_lg = L.layerGroup();
var points_geojson = { "type": "FeatureCollection" }
let points = [];

fetchText(pointsUrl).then(text => {
	let pois = d3.csvParse(text);
	for (i = 0; i < pois.length; i++) {
		let feature = {
			"type": "Feature",
			"properties": {
				"id": pois[i].id,
				"name": pois[i].name,
			},
			"geometry": { "type": "Point", "coordinates": [parseFloat(pois[i].lon), parseFloat(pois[i].lat)] }
		};

		points.push(feature);
	}

	points_geojson.features = points;

	pointsLayer = L.geoJSON(points_geojson, {
		onEachFeature: onEachPoint,
	}).addTo(map);

});

fetchText(salesUrl).then(text => {
	let pois = d3.csvParse(text);
	for (i = 0; i < sales_sector.features.length; i++) {
		let d = _.where(pois, {id: sales_sector.features[i].properties.sales_info_id+''});

		if(d.length>0){
			sales_sector.features[i].properties['area_name'] = d[0].area_name;
			sales_sector.features[i].properties['type'] = d[0].type;
			sales_sector.features[i].properties['phone'] = d[0].phone;
			sales_sector.features[i].properties['email'] = d[0].email;
		}

	}

	salesLayer = L.geoJSON(sales_sector, {
		style: styleSaleArea,
		onEachFeature: onEachSaleArea,
	}).addTo(map);

	overlays['Secteur Scierie France'] = aoiLayer;
	overlays['Carte commerciale scierie France'] = comFr;
	overlays['Atelier'] = pointsLayer;
	overlays['Service commercial Distribution'] = salesLayer;
	layerControl = L.control.layers(baseLayers, overlays).addTo(map);

	info.addTo(map);

});

info.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update('');
	return this._div;
};

info.update = function (html) {
	this._div.innerHTML = html;
};

L.easyButton('fa-home fa-lg', function () {
	// map.fitBounds(comFr.getBounds());
	map.setView([46.2276, 2.2137], 5);
}).addTo(map);

function updateOpacity(value) {
	salesLayer.setStyle({fillOpacity: value, opacity: value});;
}


// let getLegendString = function(){
//     let labels = [];
//     str = '<h4 align="center">Carte commerciale scierie France</h4>';
//     for (var i = 0; i < legendValue.length; i++) {
//         labels.push(
//             '<i style="background:' + getFillColor(legendValue[i]) + '"></i> ' + legendValue[i]);
//     }
//     str += labels.join('<br>');
//     return str;
// }



// Activer ou non la legende


// var legend = L.control({position: 'bottomright'});

	// legend.onAdd = function (map) {

		// var div = L.DomUtil.create('div', 'info legend');

		// var labels = [];

		// for (var i = 0; i < legendValue.length; i++) {

			// labels.push(
				// '<i style="background:' + getFillColor(legendValue[i]) + '"></i> <b>' + legendValue[i] + '</b> ' + legendValue2[i]);
		// }

		// div.innerHTML = labels.join('<br>');
		// return div;
	// };

	// legend.addTo(map);

