import Map, {NavigationControl, Marker} from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import {
  CloudSun,
  Car,
  Bus,
  Wind,
  MapPin,
  Megaphone,
  AlertTriangle,
  Phone,
} from "lucide-react";

import {
  Line
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["6AM","9AM","12PM","3PM","6PM","9PM"],
  datasets: [
    {
      label: "Traffic Index",
      data: [25,55,80,70,95,50],
      borderColor: "#2563EB",
      backgroundColor: "#2563EB",
      tension: 0.4,
    },
  ],
};

function Card({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center hover:shadow-lg transition">

      <div>
        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <h2 className="text-2xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div className="bg-blue-100 p-3 rounded-full">
        {icon}
      </div>

    </div>
  );
}

export default function CitizenDashboard() {

  return (

    <div id="citizen-dashboard" className="min-h-screen bg-slate-100">

      {/* Navbar */}

      <div className="bg-white shadow px-8 py-4 flex justify-between">

        <h1 className="text-2xl font-bold">
          Smart City Portal
        </h1>

        <div className="font-medium">
          Welcome, Citizen 👋
        </div>

      </div>

      <div className="p-8" id="Overview">

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <Card
            title="Air Quality"
            value="AQI 62"
            icon={<Wind />}
          />

          <Card
            title="Traffic"
            value="Moderate"
            icon={<Car />}
          />

          <Card
            title="Transit"
            value="12 Buses Nearby"
            icon={<Bus />}
          />

          <Card
            title="Weather"
            value="31°C"
            icon={<CloudSun />}
          />

        </div>

        {/* Map */}

        <div className="bg-white rounded-xl shadow mt-8 p-6" id="Traffic">

          <h2 className="text-xl font-semibold mb-4">
            Nearby Services
          </h2>

          <div className="rounded-lg overflow-hidden h-100 bg-slate-200">
            <Map mapLib={maplibregl}
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

        <div className="grid lg:grid-cols-2 gap-6 mt-8" id="Services">

          <div className="bg-white rounded-xl shadow p-5">

            <h2 className="font-semibold mb-4">
              Today's Traffic
            </h2>

            <Line data={chartData} />

          </div>

          <div className="bg-white rounded-xl shadow p-5">

            <h2 className="font-semibold mb-4">
              Air Quality Trend
            </h2>

            <Line data={chartData} />

          </div>

        </div>

        {/* Announcements */}

        <div className="bg-white rounded-xl shadow mt-8 p-6" id="Announcements">

          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">

            <Megaphone size={20} />

            City Announcements

          </h2>

          <div className="space-y-4">

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              Road maintenance scheduled on Ring Road from 10 PM to 5 AM.
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
              New Metro Line extension opens next week.
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
              Heatwave advisory: Stay hydrated and avoid outdoor activity between 12 PM and 4 PM.
            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <button className="bg-red-500 text-white p-6 rounded-xl flex flex-col items-center hover:bg-red-600">

            <AlertTriangle size={34} />

            <span className="mt-2">
              Report Issue
            </span>

          </button>

          <button className="bg-green-600 text-white p-6 rounded-xl flex flex-col items-center hover:bg-green-700">

            <MapPin size={34} />

            <span className="mt-2">
              Nearby Services
            </span>

          </button>

          <button className="bg-blue-600 text-white p-6 rounded-xl flex flex-col items-center hover:bg-blue-700">

            <Phone size={34} />

            <span className="mt-2">
              Emergency Contacts
            </span>

          </button>

        </div>

      </div>

    </div>

  );
}