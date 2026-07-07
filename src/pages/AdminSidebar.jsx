import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">
      <div className={`bg-gray-800 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
        <button onClick={toggleSidebar} className="p-2 w-full text-left">
          {isOpen ? 'Collapse' : '☰'}
        </button>
        <h1 className="text-2xl font-bold px-2">
          {isOpen ? 'SmartCity' : 'SC'}
        </h1>
        {isOpen && (
          <ul>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#admin-dashboard" className="block">Admin Dashboard</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Dashboard" className="block">Dashboard</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Analytics" className="block">Analytics</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Analytics" className="block">Predictions</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Alerts" className="block">Alerts</a>
            </li>
            <li className="text-md transition-all duration-300 hover:text-blue-300 p-1 md:px-2 hover:bg-gray-700">
              <a href="#Alerts" className="block">Reports</a>
            </li>
          </ul>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminSidebar;