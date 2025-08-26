import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart (or increase quantity if it exists)
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove product (or decrease quantity)
  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === productId && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  // Remove completely
  const removeCompletely = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  // Total cost
  const totalCost = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Total items count (sum of quantities, not just length)
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeCompletely, totalCost, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
