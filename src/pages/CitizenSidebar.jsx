import React, { useState } from 'react';
import CitizenDashboard from './CitizenDashboard';

const CitizenSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">
      <div className={`bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
        <button onClick={toggleSidebar} className="p-2 w-full text-left">
          {isOpen ? 'Collapse' : '☰'}
        </button>
        <h1 className="text-2xl font-bold px-2">
          {isOpen ? 'Citizen' : 'C'}
        </h1>
        {isOpen && (
          <ul>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#citizen-dashboard" className="block">Citizen Dashboard</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Overview" className="block">Overview</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Traffic" className="block">Traffic</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Services" className="block">Services</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Alerts" className="block">Alerts</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Announcements" className="block">Announcements</a>
            </li>
          </ul>
        )}
      </div>

      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <CitizenDashboard />
      </div>
    </div>
  );
};

export default CitizenSidebar;
