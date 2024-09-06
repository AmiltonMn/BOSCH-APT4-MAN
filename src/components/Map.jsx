import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Map =() => {
    const position = [-25.424847, -49.2749795]
    return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: '100%', height: '700px'}}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
                Senai Celso Charuri
            </Popup>
        </Marker>
    </MapContainer>
    )
}