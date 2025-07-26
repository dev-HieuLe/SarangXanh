import React, { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react"; // You can replace with Heroicons if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#68bec8] text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-white">Sarang</span>
          <span className="text-blue-800">Xanh</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center gap-10 text-sm font-semibold tracking-widest uppercase">
          <li className="hover:text-blue-800 cursor-pointer">Home</li>
          <li className="hover:text-blue-800 cursor-pointer">About</li>
          <li className="hover:text-blue-800 cursor-pointer">Data</li>
          <li className="hover:text-blue-800 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-800 cursor-pointer">FAQs</li>
          <li className="hover:text-blue-800 cursor-pointer">Shop</li>
          <li className="hover:text-blue-800 cursor-pointer">Members</li>
        </ul>

        {/* Right-side buttons */}
        <div className="flex items-center gap-7">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-7 h-7" />
            <span className="absolute top-[-6px] right-[-6px] w-2.5 h-2.5 bg-red-500 rounded-full" />
          </div>

          {/* Donate Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold">
            Donate
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-semibold tracking-widest uppercase bg-[#00000050] p-4 rounded-xl">
            <li className="hover:text-blue-200 cursor-pointer">Home</li>
            <li className="hover:text-blue-200 cursor-pointer">About</li>
            <li className="hover:text-blue-200 cursor-pointer">Symptoms</li>
            <li className="hover:text-blue-200 cursor-pointer">Prevention</li>
            <li className="hover:text-blue-200 cursor-pointer">FAQs</li>
            <li className="hover:text-blue-200 cursor-pointer">Shop</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
