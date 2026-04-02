import { useState } from 'react'
import { Route , Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Agentgridpage from './Pages/Agentgridpage';
import AgentDetails from './Pages/AgentDetails';
import Mapsgridpage from './Pages/Mapsgridpage';
import Weaponsgridpage from './Pages/Weaponsgridpage';
import WeaponDetails from './Pages/WeaponDetails';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/agents" element={<Agentgridpage />} />
        <Route path="/agents/:id" element={<AgentDetails />} />
        <Route path="/maps" element={<Mapsgridpage />} />
        <Route path="/weapons" element={<Weaponsgridpage />} />
        <Route path="/weapons/:id" element={<WeaponDetails />} />
      </Routes>
    </div>
  );
}
