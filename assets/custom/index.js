
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
var commercial;
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
	
	commercial = L.layerGroup([comFr, aoiLayer]).addTo(map);

	salesLayer = L.geoJSON(sales_sector, {
		style: styleSaleArea,
		onEachFeature: onEachSaleArea,
	}).addTo(map);

	

	// overlays['Secteur Scierie France'] = aoiLayer;
	overlays['Carte commerciale scierie France'] = commercial;
	overlays['Service commercial Distribution'] = salesLayer;
	overlays['Atelier'] = pointsLayer;
	layerControl = L.control.layers(baseLayers, overlays).addTo(map);

	console.log(layerControl._layers);

});


L.easyButton('fa-home fa-lg', function () {
	map.setView([46.2276, 2.2137], 5);
}).addTo(map);

var layerOpacity = L.control({ position: 'topright' });

layerOpacity.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info slide');
    this._div.innerHTML = '<div id="slideDiv"><input id="slide" type="range" min="0" max="1" step="0.1" value="1" onchange="updateOpacity(this.value)"><br>Opacity</div>';
    return this._div;
};

layerOpacity.addTo(map);


function updateOpacity(value) {
	aoiLayer.setStyle({ opacity: value});
	salesLayer.setStyle({fillOpacity: value, opacity: value});
	comFr.setStyle({fillOpacity: value, opacity: value});
	// pointsLayer.setStyle({fillOpacity: value, opacity: value});
}

var container = document.getElementById("slideDiv");
if (!L.Browser.touch) {
  L.DomEvent
    .disableClickPropagation(container)
    .disableScrollPropagation(container);
} else {
  L.DomEvent.disableClickPropagation(container);
}