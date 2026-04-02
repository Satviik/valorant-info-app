import { useNavigate } from "react-router-dom";
export default function MapCard({map}) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/maps/${map.uuid}`)}
            className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition cursor-pointer"
        >
            <img 
                src={map.splash}
                alt={map.displayName}
                className="mx-auto"
            />
            <p className="text-center mt-2 font-semibold">
                {map.displayName}
            </p>
        </div>
    )
};