import { Col, Row } from 'antd';
import { Lists } from './Lists';
import { MapContainer } from './MapContainer';
import './css/RecordPage.css';
import { MapContext } from './../../../hook/MapContext';
import React, { useRef, useState, useEffect } from "react";
import { fromLonLat } from "ol/proj";

const gridStyle = {
  borderTop: "10px solid #f5f5f5",
  borderBottom: "10px solid #f5f5f5",
  paddingInline: "3.5vw",
}


const RecordPage = () => {
  const mapRef = useRef();
  // Avoid accessing window during SSR by using default values
  const [ windowSize, setWindowSize ] = useState({ innerWidth: 1024, innerHeight: 768 });
  const [ map, setMap ] = useState(null);
  const [ mapView, setMapView ] = useState(false);
  const [ center, setCenter ] = useState(fromLonLat([120.97986041534145, 23.9748311775491]));
  const [ zoom, setZoom ] = useState(7);
  const [ isDraw, setIsDraw ] = useState(false);
  const [ userCoord, setUserCoord ] = useState([]);
  const [ recordCoords, setRecordCoords ] = useState([]);

  var map_width = (mapView) ? 24 : 12;

  // Set windowSize on mount and on resize
  useEffect(() => {
    const getWindowSize = () => {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    };
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };
    setWindowSize(getWindowSize());
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // Set mapView based on windowSize
  useEffect(() => {
    setMapView(windowSize.innerWidth < 768);
  }, [windowSize]);

  return (
    <MapContext.Provider value={
      { 
        map, 
        mapRef, 
        zoom, 
        center, 
        setCenter, 
        setMap, 
        setZoom, 
        isDraw, 
        setIsDraw, 
        userCoord, 
        setUserCoord,
        recordCoords,
        setRecordCoords, 
      }
    }>
       <Row style={gridStyle}>
        <Col xs={24} md={12} style={{display: (mapView)? "none": "block"}}>
          <Lists />
        </Col>
        <Col xs={24} md={map_width}>
          <MapContainer mapView={mapView} setMapView={setMapView} />
        </Col>
      </Row>
    </MapContext.Provider>
  );
};

export { RecordPage }