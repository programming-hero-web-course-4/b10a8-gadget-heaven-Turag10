import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const totalCost = cartItems.reduce((acc, item) => acc + item.price, 0);

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]); // Add product to cart
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevWishlist) => [...prevWishlist, product]); // Add product to wishlist
  };

  const sortByPrice = () => {
    setCartItems((prevItems) =>
      [...prevItems].sort((a, b) => a.price - b.price)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        totalCost: totalCost.toFixed(2),
        addToCart,
        removeFromCart,
        addToWishlist,
        sortByPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;