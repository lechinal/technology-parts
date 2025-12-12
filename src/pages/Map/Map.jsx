import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

// iconite Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import MapInfo from "../../components/MapInfo/MapInfo";

// Configura iconita corect
const DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const position = [46.096, 23.562779];

  return (
    <div className={styles.mapOverlay}>
      <div className={styles.mapContainer}>
        <h1 className={styles.mapTitle}>Locația Noastră</h1>

        <div className={styles.mapWrapper}>
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className={styles.leafletMap}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <strong>Technology Parts</strong>
                <br />
                Str. Garda 41
                <br />
                Alba Iulia
              </Popup>
            </Marker>
          </MapContainer>
          <MapInfo />
        </div>
      </div>
    </div>
  );
};

export default Map;
