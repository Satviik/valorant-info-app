import { useNavigate } from "react-router-dom";
export default function WeaponsCard({ weapon }) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/weapons/${weapon.uuid}`)}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
            <img
                src={weapon.displayIcon}
                alt={weapon.displayName}
                className="w-full h-40 object-contain"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{weapon.displayName}</h2>
                <p className="text-sm text-gray-400 mb-4">{weapon.shopData ? `Cost: ${weapon.shopData.cost} VP` : 'Not available in store'}</p>
                <p className="text-sm text-gray-400">{weapon.description}</p>
            </div>
        </div>
    );
}