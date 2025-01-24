

import PropTypes from 'prop-types';

const Sidebar = ({ categories, onCategoryClick }) => {
  return (
    <div className="bg-gray-100 p-4 w-64">
      <h3 className="text-xl font-bold text-purple-600 mb-4">Categories</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onCategoryClick("All")}
            className="block w-full text-left bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
          >
            All Products
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryClick(category)}
              className=" w-full text-left bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default Sidebar;
