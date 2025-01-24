import { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaFlag, FaShoppingCart, FaHeart } from "react-icons/fa"; // Import icons from react-icons
import CartContext from "./CartContext";

const Dashboard = () => {
  const { cartItems, wishlistItems, totalCost, removeFromCart, sortByPrice } = useContext(CartContext);
  const addToCart = cartItems.length; // Get the number of items in the cart

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-purple-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Gadget Heaven</h1>
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
          <div className="flex gap-4 items-center">
            <FaFlag className="text-lg cursor-pointer hover:text-gray-200" />
            <div className="relative">
              <FaShoppingCart className="text-lg cursor-pointer hover:text-gray-200" />
              {addToCart > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                  {addToCart}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="bg-purple-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4 text-lg">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Cart Section */}
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">
              Total cost: ${Number(totalCost).toFixed(2)}
            </p>
            <button
              onClick={sortByPrice}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Sort by Price
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Purchase
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name || "Product Image"}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{item.name || "Unnamed Product"}</h3>
                  <p className="text-gray-600">
                    Price: ${Number(item.price || 0).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-auto text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800">Wishlist</h2>
        </div>

        {/* Wishlist Items */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name || "Product Image"}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{item.name || "Unnamed Product"}</h3>
                  <p className="text-gray-600">
                    Price: ${Number(item.price || 0).toFixed(2)}
                  </p>
                </div>
                {/* Add to Cart button for wishlist items */}
                <button
                  onClick={() => addToCart(item)}
                  className="ml-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;