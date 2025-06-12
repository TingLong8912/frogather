import React, { useEffect, useContext, useCallback } from "react";
import MapContext from "hook/MapContext";
import * as ol from "ol";
import { Icon, Style } from "ol/style";
import PinRed from 'assets/pin_red.svg';
import PinGreen from 'assets/pin_green.svg';

const selectStyle = new Style({
	image: new Icon({
		anchor: [0.5, 16],
		anchorXUnits: 'fraction',
		anchorYUnits: 'pixels',
		src: PinRed,
		width: 50,
		height: 50,
	}),
});

const notselectStyle = new Style({
	image: new Icon({
		anchor: [0.5, 16],
		anchorXUnits: 'fraction',
		anchorYUnits: 'pixels',
		src: PinGreen,
		width: 40,
		height: 40,
	}),
});

const Map = ({ children }) => {
	const { map, mapRef, zoom, setZoom, center, setCenter, setMap } = useContext(MapContext);

	// on component mount
	useEffect(() => {
		let options = { 
			view: new ol.View({ zoom, center }),
			layers: [],
			controls: [],
			overlays: [],
		};
		
		let mapObject = new ol.Map(options);

		mapObject.setTarget(mapRef.current);
		mapObject.on('click', (evt) => handleSingleClick(mapObject,  evt));
		mapObject.on('pointermove', (evt) => handleHover(mapObject, evt))
		setMap(mapObject);

		return () => {
			mapObject.setTarget(undefined);
		}
	}, []);

	// zoom change handler
	useEffect(() => {
		if (!map) return;
		map.getView().setZoom(zoom);
	}, [zoom]);

	// center change handler
	useEffect(() => {
		if (!map) return;
		map.getView().setCenter(center);
	}, [center]);

	/* MAP CLICK EVENT */
	const handleClickScroll = (id) => {
    var element = document.getElementById(id);
    if (element) {
			var container = document.getElementById("list");
			// element.style.background = "gray";
    	container.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

	const handleSingleClick = useCallback((mapObject, evt) => {
		const { coordinate, pixel } = evt;
		const feature = mapObject.forEachFeatureAtPixel(pixel, (feature) => {
			return feature;
		}, 
		{ layerFilter: (layer) => {
			return (layer.get('name') === 'recordLayer') ;
		}});
		if (feature) {
			var id = feature.getProperties()["id"];
			handleClickScroll(id);
			setCenter(coordinate);
			setZoom(11);
		}
  }, []);

	/* MAP HOVER EVENT */
	const handleHover = useCallback((mapObject,  evt) => {
		const { pixel } = evt;

		mapObject.getLayers().forEach(function(el) {
			if (el.get('name') === 'recordLayer') {
				el.getSource().forEachFeature( (feature) => {
					feature.setStyle(notselectStyle);
				});
			}
		})
		var feature = mapObject.forEachFeatureAtPixel(pixel, (feature) => {			
			return feature;
		}, {
			layerFilter: (layer) => {
				return (layer.get('name') === 'recordLayer') ;
			}
		});	

		if (feature) feature.setStyle(selectStyle);
	}, []);


	return (
		<div ref={mapRef} className="map" >
			{children}
		</div>
	)
}

export { Map };