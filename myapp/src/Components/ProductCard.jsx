import React, { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";

export default function ProductCard() {
  const [productDetails, setProductDetails] = useState([]);
  const { addToCart, removeCompletely, cart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.log(error));
  }, []);

  // Check if product already in cart
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {productDetails.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
          >
            <img
              className="w-[120px] h-[120px] object-contain mb-4"
              src={product.image}
              alt={product.title}
            />
            <h2 className="font-semibold text-gray-800 text-center mb-2">
              {product.title.slice(0, 40)}...
            </h2>
            <div className="text-lg font-bold text-indigo-600 mb-3">
              ${product.price}
            </div>

            {isInCart(product.id) ? (
              <button
                onClick={() => removeCompletely(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
