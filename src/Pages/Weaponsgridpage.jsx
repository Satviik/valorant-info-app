import WeaponsCard from "../components/WeaponsCard";
import { useEffect , useState } from "react";

export default function Weaponsgridpage() {
    const [weapons, setWeapons] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/weapons")
            .then(response => response.json())
            .then(data => setWeapons(data.data));
    }, []);
    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Weapons</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {weapons.map((weapon) => (
                    <WeaponsCard key={weapon.uuid} weapon={weapon} />
                ))}
            </div>
        </div>
    );
}
