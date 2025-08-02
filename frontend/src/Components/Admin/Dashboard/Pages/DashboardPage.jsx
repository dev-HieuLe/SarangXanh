import React from "react";
import {
  ShoppingCart,
  ThumbsUp,
  User,
  MousePointerClick,
  Bell,
  FileText,
  CreditCard,
  PlusCircle,
} from "lucide-react";

const dashboardData = {
  metrics: [
    {
      icon: <User />,
      value: 1600,
      label: "Users Active",
      growth: "+55%",
      color: "bg-orange-500",
    },
    {
      icon: <MousePointerClick />,
      value: 357,
      label: "Click Events",
      growth: "+124%",
    },
    { icon: <ShoppingCart />, value: 2300, label: "Purchases", growth: "+15%" },
    { icon: <ThumbsUp />, value: 940, label: "Likes", growth: "+90%" },
  ],
  reviews: {
    positive: 80,
    neutral: 17,
    negative: 3,
  },
  shops: [
    { name: "Eco Bottle", members: 4, budget: "$14,000", sales: 60 },
    { name: "Recycle Box", members: 2, budget: "$3,000", sales: 10 },
    { name: "Reusable Bag", members: 3, budget: "Not set", sales: 100 },
  ],
  orders: [
    {
      icon: <Bell className="text-green-500" />,
      title: "$2400, Design changes",
      date: "22 DEC 7:20 PM",
    },
    {
      icon: <FileText className="text-red-500" />,
      title: "New order #1832412",
      date: "21 DEC 11 PM",
    },
    {
      icon: <CreditCard className="text-blue-500" />,
      title: "Server payments for April",
      date: "21 DEC 9:34 PM",
    },
    {
      icon: <PlusCircle className="text-yellow-500" />,
      title: "New card added for order #4395133",
      date: "20 DEC 2:20 AM",
    },
  ],
  trashCollected: {
    values: [50, 120, 100, 180, 400, 250, 300, 280, 480],
    months: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
};

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
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
            <div className="text-xs text-white mt-1">{metric.growth}</div>
          </div>
        ))}
      </div>

      {/* Review Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-md col-span-1 md:col-span-1">
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

        {/* Shops */}
        <div className="bg-white rounded-2xl p-6 shadow-md col-span-2">
          <h2 className="text-lg font-semibold mb-1">Shops</h2>
          <p className="text-sm text-gray-500 mb-4">30 done this month</p>
          <div className="space-y-3">
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
                      style={{ width: `${shop.sales}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Boxes */}
      <div className="grid grid-cols-4 gap-6">
        {/* Combined Card: Built by developers + Rocket side by side */}
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-center justify-between">
          {/* Left: Text content */}
          <div className="flex-cols-3 md:pr-6">
            <p className="text-sm font-semibold text-gray-600">
              Built by developers
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              Soft UI Dashboard
            </h2>
            <p className="text-gray-500 text-base mt-3">
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </p>
            <button className="mt-4 text-gray-600 text-sm font-semibold">
              Read More
            </button>
          </div>

          {/* Right: Orange rocket box */}
          <div className="bg-orange-500 rounded-2xl flex-cols-1 items-center justify-center w-48 h-40 mt-6 md:mt-0">
            <img src="/rocket-icon.png" alt="Rocket" className="h-24" />
          </div>
        </div>

        {/* Card: Work with the rockets */}
        <div className="bg-white rounded-2xl p-6 shadow-md grid-2">
          <h2 className="text-lg font-bold">Work with the rockets</h2>
          <p className="text-sm text-gray-500 mt-2">
            Wealth creation is an evolutionarily recent positive-sum game. It is
            all about who takes the opportunity first.
          </p>
          <button className="mt-4 text-blue-500 text-sm">Read More</button>
        </div>
      </div>

      {/* Trash Collected Graph + Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 text-white rounded-2xl p-6 shadow-md">
          <h2 className="text-sm text-gray-300 mb-2">Active Users</h2>
          <p className="text-xs text-green-400 mb-4">(+23%) than last week</p>
          <div className="flex justify-between items-end h-40">
            {dashboardData.trashCollected.values.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="w-2 bg-white rounded"
                  style={{ height: `${val / 1.5}px` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-lg font-semibold">Trash Collected Overview</h2>
          <p className="text-sm text-gray-500 mb-4">4% more in 2021</p>
          <div className="w-full h-48 bg-gradient-to-b from-pink-300 via-purple-200 to-white rounded-xl"></div>
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
        &copy; 2025, made with ❤️ by Creative Tim for a better web.
      </p>
    </div>
  );
};

export default DashboardPage;
