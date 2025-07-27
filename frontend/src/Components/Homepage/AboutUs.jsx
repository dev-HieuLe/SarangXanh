import { Leaf, PiggyBank, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <section className=" py-10 md:px-20 pt-45">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-26 items-center ">
        {/* Left Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl h-[400px]">
            <img
              src="/bg.jpg"
              alt="Eco-friendly car"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Green vertical line with dots */}
          <div className="absolute -left-6 top-10 bottom-10 flex flex-col items-center space-y-2">
            <div className="w-1 bg-cyan-600 h-30 rounded-full"></div>
            <div className="h-1 w-1 bg-cyan-600 rounded-full"></div>
            <div className="h-1 w-1 bg-cyan-600 rounded-full"></div>
            <div className="h-1 w-1 bg-cyan-600 rounded-full"></div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div className="text-cyan-700 font-semibold flex items-center gap-2 mb-2">
            <Leaf className="w-5 h-5" />
            <span>ABOUT SARANGXANH</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-6">
            Environmental Sustainable <br /> Forever Green Future
          </h2>

          {/* Economic Benefits */}
          <div className="flex items-start gap-4 mb-6">
            <PiggyBank className="text-cyan-600 w-7 h-7 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">
                Economic Benefits
              </h3>
              <p className="text-blue-700/80 mt-1">
                Alternative innovation after ethical to network environmental
                whiteboard transparent growth natural done.
              </p>
            </div>
          </div>

          {/* Safe Environment */}
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-cyan-600 w-7 h-7 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800">
                Safe Environment
              </h3>
              <p className="text-blue-700/80 mt-1">
                Alternative innovation after ethical to network environmental
                whiteboard transparent growth natural done.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 w-fit px-6 py-3 rounded-xl text-white font-medium bg-cyan-600 hover:bg-cyan-700 transition shadow-md hover:shadow-lg flex gap-2 items-center">
            About Us <Leaf className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
