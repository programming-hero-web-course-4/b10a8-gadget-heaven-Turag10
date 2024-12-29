
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center bg-purple-500 text-white py-16">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
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
      <div className="mt-10">
        <img
          src="https://via.placeholder.com/800x400" 
          alt="Gadget Heaven Accessories"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
