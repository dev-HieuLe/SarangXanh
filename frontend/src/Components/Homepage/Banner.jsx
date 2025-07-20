import React from "react";
import { Globe } from "lucide-react";

const Banner = () => {
  return (
    <>
      <section
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center text-white relative"
        style={{ backgroundImage: "url('/bg.jpg')" }} // Make sure bg.jpg is in public/
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-none select-none"></div>

        {/* Content wrapper - centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-16 md:py-24 max-w-7xl w-full z-10 flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
            {/* Text Left */}
            <div className="flex-1 text-left">
              <h5 className="uppercase text-base md:text-lg font-bold tracking-widest text-gray-300">
                One enemy, whole world is fighting with
              </h5>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Sarang<span className="text-blue-400">Xanh</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl">
                The platform "SarangXanh" is designed to raise awareness and
                support about environmental health and awareness. Let's work
                together to create a cleaner and greener world.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-sm font-semibold shadow-md">
                Save The Environment
              </button>
            </div>

            {/* Image Right */}
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <img
                src="/banner-right.jpg" // Make sure this is also in public/
                alt="Environment"
                className="w-full max-w-lg md:max-w-xs xl:max-w-xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Section - overlaps bottom of banner */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl z-20 px-4">
          <div className="bg-blue-200/50 rounded-xl px-4 sm:px-6 py-8 sm:py-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 shadow-lg backdrop-blur-md w-full">
            {/* Icon + Title */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-0">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
              <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-blue-800">
                Live Waste Tracker
              </h2>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="bg-white text-center px-4 sm:px-6 py-4 rounded-lg shadow-md w-48 sm:w-auto">
                <p className="text-gray-600 text-sm">Trash Collected</p>
                <h3 className="text-xl sm:text-2xl font-bold text-black">
                  12,450 Tons
                </h3>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-center px-4 sm:px-6 py-4 rounded-lg shadow-md w-48 sm:w-auto">
                <p className="text-gray-600 text-sm">Trash Released</p>
                <h3 className="text-xl sm:text-2xl font-bold text-black">
                  8,210 Tons
                </h3>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-center px-4 sm:px-6 py-4 rounded-lg shadow-md w-48 sm:w-auto">
                <p className="text-gray-600 text-sm">Plastic Recycled</p>
                <h3 className="text-xl sm:text-2xl font-bold text-black">
                  4,732 Tons
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
