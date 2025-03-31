import { useContext, useEffect } from "react";
import { message } from 'antd';
import MapContext from "./../../hook/MapContext";
import { Vector as VectorLayer } from 'ol/layer.js';
import Draw from 'ol/interaction/Draw.js';

const DrawVectorLayer = ({ name, source, style, zIndex }) => {
	const { map, isDraw, setIsDraw, userCoord, setUserCoord } = useContext(MapContext);

	useEffect(()=>{
		if (!map) return;
		let vectorLayer = new VectorLayer({
			name,
			source,
			style
		});
		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);
		addInteraction();

		return () => {
			if (map) {
				map.removeLayer(vectorLayer);
			}
		};
	}, [map]);

	useEffect(()=>{
		if (!map) return;
		clearLayer();
		let vectorLayer = new VectorLayer({
			name,
			source,
			style
		});
		map.addLayer(vectorLayer);
	}, [userCoord]);

	let draw; // global so we can remove it later
	const addInteraction = () => {
		draw = new Draw({
			source: source,
			type: "Point",
		});
		draw.on('drawend', function(evt) {
			map?.removeInteraction(draw);
			var feature = evt.feature;
			var coords = feature.getGeometry().getCoordinates();
			setUserCoord(coords);
			message.success("繪製成功，請回到表單填寫地點名稱")
		}, this);
		if (isDraw) {
			map?.addInteraction(draw);
		}
	};

	const clearLayer = () => {
		map.getLayers().forEach((layer) => {
			if (layer.get('name') === 'draw') {
				layer.getSource().clear();
			}
		});
	};

  useEffect(()=>{
		if (isDraw) {
			clearLayer();
			addInteraction();
			setIsDraw(false);
		}
  }, [isDraw]);

	return null;
};

export default DrawVectorLayer;