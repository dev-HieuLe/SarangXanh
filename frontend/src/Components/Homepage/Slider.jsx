import {
    Leaf,
    Recycle,
    Handshake,
    Sprout,
    ArrowRight,
    ArrowLeft,
  } from "lucide-react";
  import { useState } from "react";
  
  export default function ActionSlider() {
    const services = [
      {
        title: "Dust Recycling",
        desc: "Alternative innovation to ethical network environmental whiteboard",
        icon: <Recycle className="text-cyan-600 w-10 h-10" />,
        image: "/bg.jpg",
      },
      {
        title: "Cleaning Ocean",
        desc: "Alternative innovation to ethical network environmental whiteboard",
        icon: <Handshake className="text-cyan-600 w-10 h-10" />,
        image: "/bg.jpg",
      },
      {
        title: "Tree Plantation",
        desc: "Alternative innovation to ethical network environmental whiteboard",
        icon: <Sprout className="text-cyan-600 w-10 h-10" />,
        image: "/bg.jpg",
      },
      {
        title: "Renewable Energy",
        desc: "Empowering clean future with solar, wind, and sustainable power",
        icon: <Sprout className="text-cyan-600 w-10 h-10" />,
        image: "/bg.jpg",
      },
      {
        title: "Beach Cleanup",
        desc: "Coastal protection through regular ocean and beach sanitation drives",
        icon: <Recycle className="text-cyan-600 w-10 h-10" />,
        image: "/bg.jpg",
      },
    ];
  
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;
    const cardWidth = 300;
    const gap = 40;
  
    const maxIndex = services.length - visibleCount;
  
    const handlePrev = () => {
      setStartIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };
  
    const handleNext = () => {
      setStartIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };
  
    return (
      <section className="py-35 px-6 md:px-20 relative max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="text-cyan-700 font-semibold flex justify-center items-center gap-2 mb-2">
            <Leaf className="w-5 h-5" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-5xl font-bold text-blue-900 leading-tight">
            SarangXanh Provide Environment <br /> Best Leading Services
          </h2>
        </div>
  
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-cyan-100 transition z-10"
        >
          <ArrowLeft className="text-cyan-600 w-6 h-6" />
        </button>
  
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-cyan-100 transition z-10"
        >
          <ArrowRight className="text-cyan-600 w-6 h-6" />
        </button>
  
        {/* Slider */}
        <div className="w-full max-w-[980px] mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${startIndex * (cardWidth + gap)}px)`,
              gap: `${gap}px`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 border border-gray-200 backdrop-blur-md rounded-md shadow-sm hover:shadow-md hover:-translate-y-2 transform transition flex-shrink-0 w-[300px] h-[380px] p-4 overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[160px] w-full object-cover rounded-md"
                />
                  <div className="mb-2 mt-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-blue-700/80">{service.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  