import {useParams} from "react-router-dom";
import { useEffect,useState } from "react";
export default function AgentGridPage() {
    const {id}=useParams();
    const [agent,setAgent]=useState(null);
    useEffect(()=>{
        fetch(`https://valorant-api.com/v1/agents/${id}`)
            .then(response => response.json())
            .then(data => setAgent(data.data));
    }, [id]);
    if (!agent) {
        return <p className="text-white p-6">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-black text-white p-10 flex gap-10">
            <div className="w-1/2 flex justify-center items-center">
                <img 
                    src={agent.fullPortrait} 
                    className="max-h-[80vh] object-contain"
                />
            </div>
            <div className="w-1/2">
                <h1 className="text-4xl font-bold mb-4">
                    {agent.displayName}
                </h1>
                 <p className="text-gray-400 mb-6">
                    {agent.description}
                </p>
                <h2 className="text-2xl font-semibold mb-4">Abilities</h2>
                 <div className="space-y-4">
                    {agent.abilities.map((ability, index) => (
                         <div key={index} className="flex items-center gap-4 bg-gray-900 p-3 rounded-lg">
                            <img
                                src={ability.displayIcon}
                                className="w-10 h-10"
                            />
                            <div>
                                <p className="font-semibold">{ability.displayName}</p>
                                <p className="text-sm text-gray-400">
                                    {ability.description}
                                </p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    );
}