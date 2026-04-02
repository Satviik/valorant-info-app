import MapCard from "../components/MapCard";
import { useEffect,useState } from "react";
export default function Mapsgridpage() {
    const [maps, setMaps] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/maps")
            .then(response => response.json())
            .then(data => setMaps(data.data));
    }, []);
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Maps</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {maps.map((map) => (
                    <MapCard key ={map.uuid} map={map} />
                ))}
            </div>
        </div>
    );
}