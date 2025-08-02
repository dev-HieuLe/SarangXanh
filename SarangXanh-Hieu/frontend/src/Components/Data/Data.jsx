import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Timeline events with photo & description
const timelineEvents = [
  {
    date: "June 2025",
    title: "Started in Hanoi",
    image: "/bg.jpg",
    description:
      "We held our very first cleanup event in the heart of Hanoi, bringing together over 50 student volunteers who collected more than 200kg of plastic waste in one day.",
  },
  {
    date: "July 2025",
    title: "Live Tracker Deployed",
    image: "/bg.jpg",
    description:
      "Our real-time tracking system launched successfully, allowing communities to view updated statistics of plastic collected across Vietnam.",
  },
  {
    date: "August 2025",
    title: "1,000+ Volunteers",
    image: "/bg.jpg",
    description:
      "We surpassed the milestone of 1,000 registered volunteers! Cleanup operations expanded to Da Nang and Ho Chi Minh City.",
  },
];

// Map data
const collectedLocations = [
  { city: "Hanoi", lat: 21.0285, lng: 105.8542 },
  { city: "Da Nang", lat: 16.0544, lng: 108.2022 },
  { city: "Ho Chi Minh City", lat: 10.7769, lng: 106.7009 },
];

// Statistics data
const stats = [
  {
    label: "Plastic Collected",
    value: "12,450 kg",
    chart: [200, 500, 1000, 2500, 3200, 4000, 5000],
  },
  {
    label: "Plastic Recycled",
    value: "4,732 kg",
    chart: [100, 250, 500, 800, 1200, 1800, 4732],
  },
  {
    label: "Volunteers",
    value: "1,120 people",
    chart: [10, 30, 100, 300, 500, 800, 1120],
  },
];

const Data = () => {
  const [activeChart, setActiveChart] = useState(null);

  const toggleChart = (index) => {
    setActiveChart(activeChart === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Real-Time <span className="text-blue-500">Data</span>
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          Click the cards below to see the progress graph 📈
        </p>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onClick={() => toggleChart(idx)}
              className={`cursor-pointer bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow text-center transition border-2 ${
                activeChart === idx ? "border-blue-600" : "border-transparent"
              }`}
            >
              <p className="text-blue-800 text-sm font-semibold">{stat.label}</p>
              <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Line Chart */}
        {activeChart !== null && (
          <div className="bg-white p-6 mb-20 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold text-center mb-4">
              {stats[activeChart].label} - Daily Progress
            </h4>
            <Line
              data={{
                labels: ["7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7"],
                datasets: [
                  {
                    label: stats[activeChart].label,
                    data: stats[activeChart].chart,
                    borderColor: "#3b82f6",
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    tension: 0.3,
                    pointRadius: 5,
                  },
                ],
              }}
              options={{
                responsive: true,
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>
        )}

        {/* Map Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-4">🗺️ Collected Areas</h3>
          <MapContainer
            center={[16.0544, 108.2022]}
            zoom={5}
            className="h-96 rounded-lg shadow z-10"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {collectedLocations.map((loc, idx) => (
              <Marker key={idx} position={[loc.lat, loc.lng]}>
                <Popup>{loc.city}</Popup>
              </Marker>
            ))}
            <Polyline
              positions={collectedLocations.map((loc) => [loc.lat, loc.lng])}
              color="blue"
            />
          </MapContainer>
        </div>

        {/* Timeline Section */}
        <h3 className="text-2xl font-bold mb-8">📅 Collection Timeline</h3>
        <VerticalTimeline>
          {timelineEvents.map((event, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={event.date}
              iconStyle={{
                background: "#3b82f6",
                color: "#fff",
              }}
            >
              <h3 className="text-lg font-bold">{event.title}</h3>
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="mt-4 rounded-lg shadow-md"
                />
              )}
              {event.description && (
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Data;
