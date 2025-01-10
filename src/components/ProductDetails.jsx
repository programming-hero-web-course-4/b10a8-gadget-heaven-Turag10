import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaFlag, FaShoppingCart } from "react-icons/fa";
import CartContext from "../components/CartContext";

const ProductDetails = () => {
  const { product_id } = useParams(); // Extract product_id from the URL
  const [product, setProduct] = useState(null); // State for storing the fetched product
  const { addToCart, cartCount } = useContext(CartContext); // Using CartContext to manage cart operations

  // Fetch product details when component mounts
  useEffect(() => {
    fetch("/Gadget.json") // Path to your JSON file in the public folder
      .then((response) => response.json())
      .then((data) => {
        // Match product_id (ensure type consistency)
        const foundProduct = data.find((item) => item.product_id.toString() === product_id);
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [product_id]);

  // If product data is not yet fetched, display a loading message
  if (!product) {
    return <div className="text-center mt-12">Loading...</div>;
  }

  return (
    <div>
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
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Banner */}
      <div className="bg-purple-600 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="mt-2">
          Explore the latest gadgets that will take your experience to the next level. From smart
          devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div>
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{product.product_title}</h2>
              <p className="text-gray-600 mb-4">Price: ${product.price}</p>
              <p className="text-gray-800 mb-4">{product.description}</p>

              {/* Specifications */}
              <h3 className="text-lg font-bold mb-2">Specification:</h3>
              <ul className="list-disc pl-6 mb-4">
                {product.specification?.map((spec, index) => (
                  <li key={index} className="text-gray-700">
                    {spec}
                  </li>
                )) || <li>No specifications available.</li>}
              </ul>

              {/* Availability and Rating */}
              <p className="mb-4">
                <strong>Availability:</strong>{" "}
                {product.availability ? (
                  <span className="text-green-600 font-bold">In Stock</span>
                ) : (
                  <span className="text-red-600 font-bold">Out of Stock</span>
                )}
              </p>
              <p className="mb-6">
                <strong>Rating:</strong> {product.rating} / 5{" "}
                <span className="text-yellow-500">
                  {"⭐".repeat(Math.round(product.rating))}
                </span>
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
