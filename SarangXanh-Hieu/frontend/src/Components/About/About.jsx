import React from "react";
import { Leaf, Users, Globe, Star, Rocket, HeartHandshake } from "lucide-react";

const milestones = [
  { label: "June 2025", text: "First cleanup held in Hanoi" },
  { label: "July 2025", text: "Live tracking system launched" },
  { label: "August 2025", text: "1,000+ volunteers joined" },
  { label: "September 2025", text: "Partnership with local government" },
  { label: "October 2025", text: "Featured in ASEAN EcoYouth Forum" },
];

const About = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-3">
          Meet <span className="text-blue-500">SarangXanh</span>
        </h2>
        <p className="text-center text-sm text-gray-500 mb-12">
          A youth-led plastic cleanup movement in Vietnam, built for the planet.
        </p>

        {/* Image + Purpose */}
        <div className="flex flex-col md:flex-row items-center gap-14 mb-24">
          <div className="flex-1">
            <img
              src="/banner-right.jpg"
              alt="Cleanup action"
              className="w-full rounded-2xl shadow-xl border border-blue-100"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">🌱 Our Purpose</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Millions of tons of plastic pollute our oceans every year. SarangXanh is a student-powered movement that tackles this crisis with innovation and collaboration.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Real-time tracking of plastic collection efforts</li>
              <li>Engaging students & citizens in cleanups</li>
              <li>Using data to inspire change & policies</li>
            </ul>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <Star size={20} /> Our Story
          </h3>
          <p className="text-gray-700 leading-relaxed">
            SarangXanh began in 2025 when a group of high school students in Vietnam united to tackle the escalating plastic crisis. From humble beginnings with just a few bags and big dreams, we evolved into a technology-driven movement combining environmental action with real-time data.
          </p>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center gap-2">
            <Rocket size={20} /> Milestones
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h4 className="text-md font-semibold text-blue-600 mb-1">
                  {item.emoji} {item.label}
                </h4>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center gap-3 text-blue-600 mb-3">
              <Globe size={20} />
              <h4 className="text-lg font-semibold">Global Impact</h4>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              By showing exactly how much plastic we’ve cleaned, we encourage responsibility worldwide.
            </p>
          </div>
          <div className="bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center gap-3 text-blue-600 mb-3">
              <Leaf size={20} />
              <h4 className="text-lg font-semibold">Live Environmental Data</h4>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Live stats show our progress—plastic collected, recycled, and released.
            </p>
          </div>
          <div className="bg-white bg-opacity-70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center gap-3 text-blue-600 mb-3">
              <Users size={20} />
              <h4 className="text-lg font-semibold">People-Powered</h4>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              SarangXanh is driven by youth, supported by communities, and designed for collective power.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
            <HeartHandshake size={20} /> Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We envision a Vietnam where plastic waste is no longer a threat, but a resource. Where every citizen participates in environmental care, and every effort is made visible through technology and teamwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
