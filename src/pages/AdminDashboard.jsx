import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Map from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";

import {
  Car,
  Wind,
  Zap,
  ShieldAlert,
  Bell,
  MapPin,
} from "lucide-react";

import {
  Line,
  Bar,
  Doughnut,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const trafficData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Traffic Density",
        data: [120, 190, 150, 250, 300, 220, 280],
        borderColor: "#2563EB",
        backgroundColor: "#2563EB",
      },
    ],
  };

  const airData = {
    labels: ["North", "South", "East", "West", "Central"],
    datasets: [
      {
        label: "AQI",
        data: [65, 82, 55, 71, 90],
        backgroundColor: "#10B981",
      },
    ],
  };

  const crimeData = {
    labels: ["Theft", "Assault", "Fraud", "Burglary"],
    datasets: [
      {
        data: [45, 20, 15, 10],
        backgroundColor: [
          "#EF4444",
          "#F97316",
          "#3B82F6",
          "#10B981",
        ],
      },
    ],
  };

  const energyData = {
    labels: [
      "Residential",
      "Commercial",
      "Industrial",
    ],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: [
          "#2563EB",
          "#10B981",
          "#F59E0B",
        ],
      },
    ],
  };

  const StatCard = ({
    title,
    value,
    icon,
    color,
  }) => (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`p-3 rounded-full ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="admin-dashboard" className="flex min-h-screen bg-slate-100">
      {/* Main */}
      <main className="flex-1">

        {/* Navbar */}
        <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            City Administrator Dashboard
          </h2>

          <div className="flex items-center gap-3">
            <Bell className="cursor-pointer" />
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="p-8" id="Dashboard">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <StatCard
              title="Traffic Density"
              value="76%"
              color="bg-blue-100"
              icon={<Car />}
            />

            <StatCard
              title="Average AQI"
              value="68"
              color="bg-green-100"
              icon={<Wind />}
            />

            <StatCard
              title="Energy Usage"
              value="1.8 GW"
              color="bg-yellow-100"
              icon={<Zap />}
            />

            <StatCard
              title="Crime Reports"
              value="34"
              color="bg-red-100"
              icon={<ShieldAlert />}
            />

          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mt-8" id="Analytics">

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-4">
                Traffic Trends
              </h3>

              <Line data={trafficData} />
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-4">
                Air Quality
              </h3>

              <Bar data={airData} />
            </div>

          </div>

          {/* Second Row */}
          <div className="grid lg:grid-cols-2 gap-6 mt-6">

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-4">
                Energy Distribution
              </h3>

              <Doughnut data={energyData} />
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-4">
                Crime Statistics
              </h3>

              <Doughnut data={crimeData} />
            </div>

          </div>

          {/* Alerts */}
          <div className="bg-white p-6 rounded-xl shadow mt-6" id="Alerts">

            <h3 className="font-semibold text-lg mb-4">
              Active Alerts
            </h3>

            <div className="space-y-3">

              <div className="bg-red-100 border-l-4 border-red-500 p-3 rounded">
                Traffic congestion detected on Ring Road.
              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
                AQI rising in Industrial Sector.
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
                Energy demand forecast exceeds threshold.
              </div>

            </div>

          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow mt-6 p-6">

            <h3 className="font-semibold mb-4">
              Live City Monitoring
            </h3>

            <div className="h-100 bg-slate-200 rounded-lg overflow-hidden">
              <Map
                mapLib={maplibregl}
                initialViewState={{
                  longitude: 77.1887364,
                  latitude: 28.5938532,
                  zoom: 14
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="https://api.maptiler.com/maps/streets/style.json?key=h6uZHSzZURMmBq0ENhhM"
              />
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}