import React, { useState, useMemo } from "react";
import { ShoppingCart } from "lucide-react";
import Banner from "../Banner";

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

  const filteredProducts = useMemo(() => {
    const lower = searchTerm.toLowerCase();
    let filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(lower)
    );

    if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "priceLow") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHigh") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [searchTerm, sortBy]);

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <Banner
        title="SarangXanh Shop"
        subtitle="Sustainably made. Ethically sourced. Always beautiful."
        buttonText="Explore Shop"
        onButtonClick={() =>
          document
            .getElementById("products")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />

      <div className="max-w-6xl mx-auto px-6 py-20" id="products">
        {/* Controls: Search & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search products"
            className="w-full md:w-1/2 px-4 py-2 border border-blue-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort products"
            className="px-4 py-2 border border-blue-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="default" disabled>
              Sort by
            </option>
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
