// About.jsx
import React from "react";

const About = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-6">
          About <span className="text-blue-500">SarangXanh</span>
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          SarangXanh is a youth-led movement tackling plastic pollution in Vietnam.
          Through real-time tracking and active community engagement, we visualize our efforts
          to create a cleaner and more sustainable world.
        </p>

        {/* Image + Text Side by Side */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="flex-1">
            <img
              src="/banner-right.jpg"
              alt="Plastic cleanup"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
            <p className="text-gray-700 mb-4">
              Every year, millions of tons of plastic pollute our oceans and streets. We aim to combat
              this by tracking plastic waste collection efforts and spreading awareness across local communities.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Track and visualize plastic collection in real time</li>
              <li>Engage youth and volunteers in cleanup activities</li>
              <li>Provide data to raise awareness and drive policy change</li>
            </ul>
          </div>
        </div>

        {/* 3 Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">🌍 Environmental Impact</h4>
            <p className="text-sm text-gray-600">
              Visualizing tons of plastic collected encourages global responsibility and collective action.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">📈 Real-Time Data</h4>
            <p className="text-sm text-gray-600">
              Dynamic stats show plastic collected, released, and recycled across Vietnam.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">👥 Grassroots Community</h4>
            <p className="text-sm text-gray-600">
              Built by students, powered by citizens who care. Our strength comes from unity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
