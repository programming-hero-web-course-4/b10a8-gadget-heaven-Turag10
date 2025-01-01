import { Link } from "react-router-dom";

const Root = () => {
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
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative text-center bg-purple-500 text-white py-16">
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
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-400px] border-collapse">
          <img
            src="/src/assets/banner.jpg" /* Replace with the actual image path */
            alt="Gadget Heaven Accessories"
            className="rounded-lg shadow-lg w-full max-w-md lg:max-w-2xl"
          />
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white pt-32 pb-12">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">
              Discover Our Latest Accessories
            </h3>
            <p className="mb-6 text-gray-600">
            </p>
            <Link
              to="/shop"
              className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-purple-700"
            >
              Explore Gadgets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
