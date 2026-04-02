import { useNavigate } from "react-router-dom"
export default function AgentCard({agent}) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/agents/${agent.uuid}`)}
            className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition cursor-pointer"
        >
            <img 
                src={agent.displayIcon} 
                alt={agent.displayName}
                className="mx-auto"
            />
            <p className="text-center mt-2 font-semibold">
                {agent.displayName}
            </p>
        </div>
    )
};