import { Map } from './components/Map'
import { Buttons } from './components/Buttons';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

export default function MapPage(){
    return (
        <>
        <Buttons />
        <h2>Mapa</h2>
        <div style={{marginTop: '15px'}}>
            <Map/>
        </div>
        </>
    )
}