import React, { useContext, useEffect, useState } from "react";
import { Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { fromLonLat, toLonLat } from "ol/proj";
import { Map } from "components/Map/Map";
import { Layers, MapBoxLayer, VectorLayer, DrawVectorLayer, RecordVectorLayer } from "components/Layers";
import Geolocation from 'ol/Geolocation.js';
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Circle as CircleStyle, Style, Fill, Stroke } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import { vector } from "components/Sources";
import PinRed from 'assets/pin_red.svg';
import PinGreen from 'assets/pin_green.svg';
import MapContext from "hook/MapContext";
import { TbLayersOff, TbLayersSubtract } from "react-icons/tb";

const ViewButton = styled(Button)`
  position: absolute;
  bottom: 15px;
  right: 5px;
  background: #ffffff70;
  backdrop-filter: blur(5px);
  color: #161616;
  align-items: center;
  display: flex;
  z-index: 2;
  &>span{
    align-items: center;
    display: flex;
  }
`;

const MapContainer = ({mapView, setMapView}) => {
  const { userCoord, recordCoords } = useContext(MapContext);
  const [ isShowRecordVectorLayer, setIsShowRecordVectorLayer ] = useState(true);

  const handleViewButtonClick = () => {
    setIsShowRecordVectorLayer(!isShowRecordVectorLayer);
  };
  
  // Geolocation
  const geolocation = new Geolocation({
    tracking: true,
    projection: "EPSG: 4326"
  });
  const positionFeature = new Feature();
  geolocation.on('change:position', () => {
      const coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ? new Point(fromLonLat(coordinates, "EPSG:3857")) : null);
  });

  /* RECORD FEATURE */
  var recordGeojsonObject = {
    "type": "FeatureCollection",
    "name": "taipei_spot",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  };

  recordGeojsonObject["features"] = recordCoords.map(({ id, coordinates, hashtag, species }) => {
    return {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": coordinates,
      },
      "properties": {
        "id": id,
        "hashtag": hashtag,
        "species": species,
      },
    }
  });

  return (
    <div id="map_container">
      <Tooltip title={ isShowRecordVectorLayer 
        ? "關閉紀錄之點圖層" 
        : "顯示紀錄之點圖層" 
      }>
        <ViewButton shape="round" onClick={handleViewButtonClick}>
          { isShowRecordVectorLayer 
            ? <TbLayersOff />
            : <TbLayersSubtract />
          }
        </ViewButton>
      </Tooltip>
      <Map>
        <Layers>
            <MapBoxLayer name={"basemap_mapbox"} zIndex={0} />
            <DrawVectorLayer 
              name={"draw"}
              source={vector({
                  features: [
                    new Feature({
                      geometry: new Point(fromLonLat(toLonLat(userCoord, "EPSG:3857"), "EPSG:3857")),
                    })
                  ]
              })}
              style={
                new Style({
                  image: new Icon({
                    anchor: [0.5, 16],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    width: 50,
                    height: 50,
                    src: PinRed,
                  })
                })
              }
              zIndex={3}
            />
            <RecordVectorLayer
              name={"recordLayer"}
              source={vector({
                features: new GeoJSON().readFeatures(recordGeojsonObject, { featureProjection: 'EPSG:3857' }),
              })}
              style={
                new Style({
                  image: new Icon({
                    anchor: [0.5, 16],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    width: 40,
                    height: 40,
                    src: PinGreen,
                  })
                })
              }
              visible={isShowRecordVectorLayer}
              zIndex={2}
            />
            <VectorLayer
              name={"userlocation"}
              source={vector({
                features: [positionFeature]
              })}
              style={
                new Style({
                  image: new CircleStyle({
                    radius: 5,
                    fill: new Fill({
                      color: 'rgba(22, 22, 22, 0)',
                    }),
                    stroke: new Stroke({
                      color: "rgba(60, 60, 60, 0)",
                      width: 1
                    }),
                  })
                })
              }
              zIndex={1}
            />
        </Layers>
      </Map>
    </div>
  );
};

export { MapContainer }