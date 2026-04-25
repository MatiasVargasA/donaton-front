import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";

function AddMarker({ onAdd }) {
  useMapEvents({
    click(e) {
      onAdd(e.latlng);
    }
  });
  return null;
}

export default function MapPage() {

  const [markers, setMarkers] = useState([]);

  // Cargar datos desde localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("donations")) || [];
    setMarkers(data);
  }, []);

  // Agregar marker al hacer click
  const handleAddMarker = (latlng) => {
    const newDonation = {
      lat: latlng.lat,
      lng: latlng.lng,
      tipo: "Sin categoría",
      cantidad: 0,
      prioridad: "Normal"
    };

    const updated = [...markers, newDonation];

    setMarkers(updated);
    localStorage.setItem("donations", JSON.stringify(updated));
  };

  return (
    <div className="h-screen w-full relative">

      {/* BOTÓN DE NAVEGACIÓN */}
      <div className="absolute top-4 left-4 z-50">
        <a href="/" className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition shadow-lg">
          ← Volver a Donaciones
        </a>
      </div>

      <MapContainer
        center={[-33.45, -70.66]} // Santiago
        zoom={12}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Detecta clicks */}
        <AddMarker onAdd={handleAddMarker} />

        {/* Render de markers */}
        {markers.map((m, i) => (
          <Marker key={i} position={[m.lat, m.lng]}>
            <Popup>
              <b>{m.tipo}</b> <br />
              Cantidad: {m.cantidad} <br />
              Prioridad: {m.prioridad}
            </Popup>
          </Marker>
        ))}

      </MapContainer>

    </div>
  );
}