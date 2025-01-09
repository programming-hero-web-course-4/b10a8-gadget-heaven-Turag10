import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch product details
  useEffect(() => {
    fetch("/Gadget.json") // Path to the public folder
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.product_id === product_id);
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [product_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <img
          src={product.product_image}
          alt={product.product_title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-bold mb-4">{product.product_title}</h2>
        <p className="text-gray-600 mb-4">Price: ${product.price}</p>
        <p className="text-gray-800 mb-4">{product.description}</p>
        <ul className="list-disc pl-6">
          {product.specification.map((spec, index) => (
            <li key={index} className="text-gray-700">
              {spec}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <strong>Availability:</strong>{" "}
          {product.availability ? "In Stock" : "Out of Stock"}
        </p>
        <p>
          <strong>Rating:</strong> {product.rating} / 5
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
