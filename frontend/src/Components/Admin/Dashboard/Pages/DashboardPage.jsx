import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ShoppingCart,
  ThumbsUp,
  User,
  MousePointerClick,
  Rocket,
  Store,
  Star,
  LineChart as LucideLineChart,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dashboardData = {
  metrics: [
    {
      icon: <User />,
      value: 1600,
      label: "Total Members",
      color: "bg-orange-500",
    },
    {
      icon: <MousePointerClick />,
      value: 357,
      label: "Website Visit",
    },
    { icon: <ShoppingCart />, value: 2300, label: "Total Purchases" },
    { icon: <ThumbsUp />, value: 940, label: "Total Views" },
  ],
  reviews: {
    positive: 80,
    neutral: 17,
    negative: 3,
  },
  shops: [
    { name: "Eco Bottle", members: 4, budget: "$14,000", sales: 10 },
    { name: "Recycle Box", members: 2, budget: "$3,000", sales: 10 },
    { name: "Reusable Bag", members: 3, budget: "Not set", sales: 40 },
    { name: "Reusable Bag", members: 3, budget: "Not set", sales: 100 },
    { name: "Reusable Bag", members: 3, budget: "Not set", sales: 80 },
    { name: "Reusable Bag", members: 3, budget: "Not set", sales: 45 },
  ],
  socialStats: {
    platforms: {
      instagram: 1200,
      facebook: 1400,
      youtube: 1800,
    },
    viewsByMonth: [
      { month: "Apr", value: 100 },
      { month: "May", value: 200 },
      { month: "Jun", value: 500 },
      { month: "Jul", value: 650 },
      { month: "Aug", value: 400 },
      { month: "Sep", value: 230 },
      { month: "Oct", value: 350 },
    ],
  },
};

const DashboardPage = () => {
  const [trashData, setTrashData] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await axios.get("/api/data", { withCredentials: true });
      const cleaned = res.data.monthlyStats.map((m) => ({
        month: m.month,
        kg: m.plastic_collected,
      }));
      setTrashData(cleaned);
    };
    fetchStats();
  }, []);

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {dashboardData.metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-6 text-white shadow-md flex flex-col justify-between ${
              metric.color || "bg-zinc-900"
            }`}
          >
            <div className="text-3xl mb-3">{metric.icon}</div>
            <div className="text-3xl font-bold">{metric.value}</div>
            <div className="text-sm text-gray-200">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Reviews & Shops */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md col-span-1">
          <h2 className="text-lg font-semibold mb-4">Reviews</h2>
          <div className="space-y-4">
            {["Positive", "Neutral", "Negative"].map((type, i) => {
              const value = dashboardData.reviews[type.toLowerCase()];
              const color = ["bg-orange-500", "bg-yellow-400", "bg-red-500"][i];
              return (
                <div key={type}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{type} Reviews</span>
                    <span>{value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className={`${color} h-2 rounded-full`}
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            More than <strong>1,500,000</strong> developers used Creative Tim's
            products and over <strong>700,000</strong> projects were created.
          </p>
          <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded-lg shadow hover:opacity-90">
            View all reviews
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md col-span-2">
          <h2 className="text-lg font-semibold mb-1">Shops</h2>
          <p className="text-sm text-gray-500 mb-4">30 done this month</p>
          <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
            {dashboardData.shops.map((shop, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <div className="font-medium text-sm">{shop.name}</div>
                  <div className="text-xs text-gray-500">{shop.budget}</div>
                </div>
                <div className="w-1/2">
                  <div className="bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${Math.min(shop.sales, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-md">
          <h2 className="text-sm text-gray-300 mb-1">Social Media Stats</h2>
          <p className="text-xs text-green-400 mb-4">(+23%) since last week</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              data={dashboardData.socialStats.viewsByMonth}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
              <XAxis dataKey="month" stroke="#d1d5db" />
              <YAxis stroke="#d1d5db" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ffffff"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-center">
            <div className="bg-zinc-800 p-4 rounded-xl">
              <h3 className="text-sm text-gray-400">Instagram</h3>
              <p className="text-lg font-bold text-white">
                {dashboardData.socialStats.platforms.instagram} views
              </p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-xl">
              <h3 className="text-sm text-gray-400">Facebook</h3>
              <p className="text-lg font-bold text-white">
                {dashboardData.socialStats.platforms.facebook} views
              </p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-xl">
              <h3 className="text-sm text-gray-400">YouTube</h3>
              <p className="text-lg font-bold text-white">
                {dashboardData.socialStats.platforms.youtube} views
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-1">Trash Collected</h2>
          <p className="text-sm text-gray-500 mb-4">Monthly collection</p>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trashData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="kg"
                stroke="#ec4899"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-4 gap-4 bg-white rounded-2xl p-6 shadow-md text-center">
        <div>
          <div className="text-xl font-bold">36K</div>
          <div className="text-xs text-gray-500">Users</div>
        </div>
        <div>
          <div className="text-xl font-bold">2m</div>
          <div className="text-xs text-gray-500">Clicks</div>
        </div>
        <div>
          <div className="text-xl font-bold">435$</div>
          <div className="text-xs text-gray-500">Sales</div>
        </div>
        <div>
          <div className="text-xl font-bold">43</div>
          <div className="text-xs text-gray-500">Items</div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-6">
        &copy; 2025, made with ❤️ by Hieu.
      </p>
      <p className="text-center text-xs text-gray-400 mt-6">
        &copy; 2025, Design got inspired from Creative Tim.
      </p>
    </div>
  );
};

export default DashboardPage;
