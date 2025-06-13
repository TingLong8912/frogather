import React, { useContext, useEffect } from "react";
import MapContext from "../../hook/MapContext";
import OLVectorLayer from "ol/layer/Vector";

const RecordVectorLayer = ({ name, source, style, visible, zIndex = 0 }) => {
	const { map, recordCoords } = useContext(MapContext);

	useEffect(()=>{
		if (!map) return;
		let vectorLayer = new OLVectorLayer({
			name,
			source,
			style,
			visible
		});
		map.getLayers().forEach((layer) => {
			var lname = layer?.get("name");
			if (lname === "recordLayer") map.removeLayer(layer);
		});
		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);
	}, [recordCoords, visible]);

	return null;
};

export default RecordVectorLayer;