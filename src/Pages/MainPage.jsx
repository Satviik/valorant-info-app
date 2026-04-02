import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <div className="h-screen bg-black text-white flex flex-col overflow-hidden">
            <div className="text-center mt-10">
                <h1 className="text-4xl font-bold mb-4">
                    Welcome to Valorant Info App
                </h1>
                <p className="text-gray-400">
                    Your one-stop source for all things Valorant!
                </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="flex gap-10">
                    <Link to="/agents">
                        <div className="relative w-52 h-72 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition">
                            <img
                                src="https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png"
                                alt="Agents"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gray-800"></div>
                            <div className="absolute bottom-4 w-full text-center font-bold text-lg">
                                Agents
                            </div>
                        </div>
                    </Link>
                    <Link to ="/maps">
                        <div className="relative w-52 h-72 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition">
                            <img
                                src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png"
                                alt="Maps"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 w-full text-center font-bold text-lg">
                                Maps
                            </div>
                        </div>
                    </Link>
                    <Link to="/weapons">
                        <div className="relative w-52 h-72 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8gvLgbgxTOOrrBIWCWo9mUktj3SlgBuxzA&s"
                                alt="Weapons"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 w-full  text-red-500 text-center font-bold text-lg">
                                Weapons
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
}