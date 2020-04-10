require([
	"esri/Map",
	"esri/layers/GeoJSONLayer",
	"esri/layers/support/LabelClass",
	"esri/widgets/BasemapToggle",
	"esri/views/MapView"
], function(Map, GeoJSONLayer, LabelClass, BasemapToggle, MapView) {
// If GeoJSON files are not on the same domain as your website, a CORS enabled server or a proxy is required.
	const url = "https://www.geowidgets.io/maps/data/us_stateplane_zones_nad83.geojson";

	const labels = new LabelClass({
		labelExpressionInfo: { expression: "$feature.zone" },
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
		title: "{label}",
		content: [{
			type: "fields",
			fieldInfos: [
				{
					fieldName: "state",
					visible: true,
					label: "State"
				},{
					fieldName: "zone",
					visible: true,
					label: "Zone"
				},{
					fieldName: "fips",
					visible: true,
					label: "FIPS Code"
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
					color: [31, 120, 180, 0.25],
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
					color: [166, 206, 227, 0.25],
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
					color: [178, 223, 138, 0.25],
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
					color: [255,127,0, 0.25],
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
					color: [253,191,111, 0.25],
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
					color: [51,160,44, 0.25],
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
					color: [202,178,214, 0.25],
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
					color: [227,26,28, 0.25],
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
					color: [251,154,153, 0.25],
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
					color: [106,61,154, 0.25],
					outline: {
						width: 0.5,
						color: [255, 255, 255, 1]
					}
				}
			}
		]
	};
	
	function redirectToEPSGio(){
		var fips = view.popup.selectedFeature.attributes.fips
		var win = window.open('https://epsg.io/?q=NAD+1983+FIPS+' + fips, '_blank');
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
		zoom: 5,
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
