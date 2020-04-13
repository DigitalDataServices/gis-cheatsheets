require([
	"esri/Map",
	"esri/layers/GeoJSONLayer",
	"esri/layers/support/LabelClass",
	"esri/widgets/BasemapToggle",
	"esri/views/MapView"
], function(Map, GeoJSONLayer, LabelClass, BasemapToggle, MapView) {
// If GeoJSON files are not on the same domain as your website, a CORS enabled server or a proxy is required.
	const url = "https://www.geowidgets.io/maps/data/world_utm_zones.geojson";

	const labels = new LabelClass({
		labelExpressionInfo: { expression: "$feature.label" },
		labelPlacement: "always-horizontal",
		symbol: {
			type: "text",
			color: "black",
			haloSize: 1,
			haloColor: "white"
		}
	});
	
	const linkEPSGio = {
		title: "EPSG.io",
		id: "linkToEPSGio",
		className: "esri-icon-link"
	};
	
	const popupTemplate = {
		title: "UTM Zone {label}",
		content: [{
			type: "fields",
			fieldInfos: [
				{
					fieldName: "label",
					visible: true,
					label: "Zone"
				},{
					fieldName: "cm",
					visible: true,
					label: "Central Meridian"
				},{
					fieldName: "lon_west",
					visible: true,
					label: "West Longitude"
				},{
					fieldName: "lon_east",
					visible: true,
					label: "East Longitude"
				}
			]
		}],
		actions: [linkEPSGio]
	};

	const renderer = {
		type: "unique-value",
		field: "symbol",
		defaultSymbol: { type: "simple-fill" },
		uniqueValueInfos: [
			{
				value: 0,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [141, 211, 199, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 1,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [255, 255, 179, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 2,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [190, 186, 218, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 3,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [251,128,114, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 4,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [128,177,211, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 5,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [253,180,98, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 6,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [179,222,105, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 7,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [252,205,229, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 8,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [217,217,217, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			},
			{
				value: 9,
				field: "symbol",
				symbol: {
					type: "simple-fill",
					color: [188,128,189, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			}
		]
	};
	
	function redirectToEPSGio(){
		var zone = view.popup.selectedFeature.attributes.label
		if (zone.substring(0, 1) === "0") {
			zone = zone.substring(1, zone.length)
		}
		var win = window.open('http://epsg.io/?q=UTM+zone+' + zone, '_blank');
		win.focus()
	};

	const geojsonLayer = new GeoJSONLayer({
		url: url,
		copyright: "Digital Data Services, Inc. & geoWidgets",
		labelingInfo: [labels],
		popupTemplate: popupTemplate,
		renderer: renderer
	});

	const map = new Map({
		basemap: "gray",
		layers: [geojsonLayer]
	});

	const view = new MapView({
		container: "viewDiv",
		map: map,
		center: [-98.583, 39.833],
		zoom: 4,
	});
	
	const basemapGallery = new BasemapToggle({
		view: view,
	});
	
	view.ui.add(basemapGallery, {
		position: "top-right"
	});
	
	view.popup.on("trigger-action", function(event) {
		if (event.action.id === "linkToEPSGio"){
			redirectToEPSGio();
		}
	});
});
