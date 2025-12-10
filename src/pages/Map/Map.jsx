import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

// Fix pentru iconițe Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

// Configură iconița corect
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
            style={{ height: "400px", width: "100%" }}
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

          <div className={styles.mapInfo}>
            <p className={styles.mapText}>
              Vizitați-ne la sediul nostru din Alba Iulia pentru consultații.
            </p>
            <div className={styles.mapDetails}>
              <p>
                <strong>Telefon:</strong> +40 740 125 456
              </p>
              <p>
                <strong>Adresă:</strong> Str. Garda 22, Alba Iulia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
