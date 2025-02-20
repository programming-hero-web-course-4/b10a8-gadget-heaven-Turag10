import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaFlag, FaShoppingCart, FaHeart } from "react-icons/fa";
import CartContext from "../components/CartContext";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    fetch("/Gadget.json") 
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.product_id.toString() === product_id);
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [product_id]);

  
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
                className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-700 mr-4"
              >
                Add to Cart
              </button>

              {/* Add to Wishlist Button */}
              <button
                onClick={() => addToWishlist(product)}
                className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-600 flex items-center gap-2"
              >
                <FaHeart /> Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold text-gray-800">Gadget Heaven</h2>
          <p className="text-gray-500 mt-2">
            Leading the way in cutting-edge technology and innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-gray-700 font-bold mb-4">Services</h3>
              <ul className="text-gray-500 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Product Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping & Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-700 font-bold mb-4">Company</h3>
              <ul className="text-gray-500 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-700 font-bold mb-4">Legal</h3>
              <ul className="text-gray-500 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetails;