import { useEffect,useState } from "react";
import AgentCard from "../components/AgentCard";
export default function Agentgridpage() {
    const [agents, setAgents] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
            .then(response => response.json())
            .then(data => setAgents(data.data));
    }, []);

    return (
       <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Agents</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {agents.map((agent => (
                    <AgentCard key={agent.uuid} agent={agent} />
                )))}
            </div>
        </div>
    );
};
