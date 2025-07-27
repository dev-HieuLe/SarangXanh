import React from "react";
import { Droplets, Fish, Sprout, CookingPot, Biohazard } from "lucide-react";

const Effects = () => {
  const effects = [
    {
      title: "Water Pollution",
      description:
        "Microplastics pollute rivers and oceans, degrading water quality and harming aquatic ecosystems.",
      icon: <Droplets className="w-6 h-6 text-indigo-500" />,
      number: "01",
    },
    {
      title: "Marine Life Impact",
      description:
        "Fish and other marine animals ingest microplastics, leading to internal injuries, reduced feeding, and even death.",
      icon: <Fish className="w-6 h-6 text-indigo-500" />,
      number: "02",
    },
    {
      title: "Soil Contamination",
      description:
        "Microplastics are found in soil, affecting soil health and nutrient cycling, which harms plant growth.",
      icon: <Sprout className="w-6 h-6 text-indigo-500" />,
      number: "03",
    },
    {
      title: "Food Chain Disruption",
      description:
        "As microplastics move up the food chain, they accumulate in predators — including humans — causing long-term health risks.",
      icon: <CookingPot className="w-6 h-6 text-indigo-500" />,
      number: "04",
    },
    {
      title: "Toxic Chemical Release",
      description:
        "Microplastics often carry toxic chemicals, which can leach into the environment, poisoning wildlife and ecosystems.",
      icon: <Biohazard className="w-6 h-6 text-indigo-500" />,
      number: "05",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-14 mt-20"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#042f2e]/30 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Grid with equal height cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 auto-rows-[1fr]">
          {/* Title Card */}
          <div className="text-left border border-transparent bg-transparent pt-5">
            <p className="uppercase text-indigo-500 font-semibold text-sm tracking-widest mb-2">
              You Might Be Concerned?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Environmental Effects of Microplastics
            </h2>
            <button className="mt-6 w-fit px-6 py-3 rounded-xl text-white font-medium bg-cyan-600 hover:bg-cyan-700 transition shadow-md hover:shadow-lg">
              Explore More
            </button>
          </div>

          {/* Effect Cards */}
          {effects.map((effect, index) => (
            <div
              key={index}
              className="relative min-h-[300px] bg-white p-7 text-left border border-gray-200"
            >
              {/* Number top right */}
              <div className="absolute top-4 right-6 text-[60px] z-0 font-bold text-gray-200/60 select-none">
                {effect.number}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4 z-10">
                {effect.icon}
                <div className="text-xl font-bold text-gray-900 z-10">
                  {effect.title}
                </div>
              </div>

              {/* Description */}
              <div className="relative text-md text-gray-700 leading-relaxed z-10 max-w-70">
                {effect.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Effects;
