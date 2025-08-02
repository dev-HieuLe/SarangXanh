import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

const allProducts = [
  { id: 1, name: "Eco Tote Bag", price: 12.99, image: "/bg.jpg" },
  { id: 2, name: "Reusable Bottle", price: 18.5, image: "/bg.jpg" },
  { id: 3, name: "Recycled Notebook", price: 7.99, image: "/bg.jpg" },
  { id: 4, name: "Bamboo Toothbrush", price: 4.99, image: "/bg.jpg" },
  { id: 5, name: "Organic T-shirt", price: 24.0, image: "/bg.jpg" },
  { id: 6, name: "Metal Straw Set", price: 5.99, image: "/bg.jpg" },
  { id: 7, name: "Eco Soap Bar", price: 3.5, image: "/bg.jpg" },
  { id: 8, name: "Compostable Phone Case", price: 14.9, image: "/bg.jpg" },
  { id: 9, name: "Plantable Pencil Set", price: 6.0, image: "/bg.jpg" },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = allProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      return 0;
    });

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-2">
          Our <span className="text-blue-500">Products</span>
        </h2>
        <p className="text-center text-sm text-gray-500 mb-10">
          Sustainably made. Ethically sourced. Always beautiful.
        </p>

        {/* Controls: Search & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-blue-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-blue-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="default">Sort by</option>
            <option value="name">Name (A-Z)</option>
            <option value="priceLow">Price (Low to High)</option>
            <option value="priceHigh">Price (High to Low)</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-[1.02] flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-52 object-cover rounded-lg mb-5"
                />
                <h3 className="text-xl font-semibold text-blue-900">
                  {item.name}
                </h3>
                <p className="text-blue-600 font-bold text-lg mt-1">
                  ${item.price.toFixed(2)}
                </p>
                <span className="mt-2 inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Eco-friendly
                </span>
                <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2">
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Shop;
