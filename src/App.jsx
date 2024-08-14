import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  

  return (
    
    <div className="bg-blue-500 h-screen flex flex-col items-center justify-center text-white">
    <header>
      <div className="text-center">
        <h1 className="text-xl font-bold">Derma Healer</h1>
        <p>Laser & Skin Care Clinic</p>
      </div>
    </header>
    <div className="space-y-4">
      <button className="btn-primary">Instagram Profile</button>
      <button className="btn-primary">Facebook Profile</button>
      <button className="btn-primary">Google Maps</button>
      <button className="btn-primary">Website</button>
    </div>
  </div>
    
  );
}

export default App
