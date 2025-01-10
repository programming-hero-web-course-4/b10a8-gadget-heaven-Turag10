import { Link } from "react-router-dom";
import { FaFlag, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import  CartContext  from "../CartContext";

const Root = () => {
  const [gadgets, setGadgets] = useState([]);
  const { cartCount } = useContext(CartContext);

  useEffect(() => {
    fetch("/Gadget.json") // Ensure this path is correct
      .then((response) => response.json())
      .then((data) => setGadgets(data))
      .catch((error) => console.error("Error fetching gadgets:", error));
  }, []);

  return (
    <div>
    
      <nav className="bg-purple-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Brand Name */}
          <h1 className="text-xl font-bold">Gadget Heaven</h1>

          {/* Center: Navigation Links */}
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/statistics" className="hover:underline">
                Statistics
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>
          </ul>

          {/* Right: Icons */}
          <div className="flex gap-4 items-center">
            <FaFlag className="text-lg cursor-pointer hover:text-gray-200" />
            <div className="relative">
              <FaShoppingCart className="text-lg cursor-pointer hover:text-gray-200" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="relative bg-purple-500 text-white text-center py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="mb-6">
            Explore the latest gadgets that will take your experience to the next level.
            From smart devices to the coolest accessories, we have it all!
          </p>
          <Link
            to="/shop"
            className="bg-white text-purple-500 font-semibold px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-300px]">
          <img
            src="/src/assets/banner.jpg" // Replace with the actual image path
            alt="Gadget Heaven Accessories"
            className="rounded-lg shadow-lg w-full max-w-sm lg:max-w-lg border-4 border-white"
          />
        </div>
      </header>

      {/* White Section */}
      <section className="bg-white pt-32 pb-12">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Discover Our Latest Accessories
            </h3>
            <Link
              to="/shop"
              className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-700"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* Gadgets Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-purple-600 mb-8">
            Latest Gadgets
          </h3>

          {/* Gadget Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {gadgets.map((gadget) => (
              <div
                key={gadget.product_id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={gadget.product_image}
                  alt={gadget.product_title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {gadget.product_title}
                </h4>
                <p className="text-gray-600 mb-2">Price: ${gadget.price}</p>
                <Link
                  to={`/details/${gadget.product_id}`}
                  className="text-purple-600 hover:underline font-semibold"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Root;
