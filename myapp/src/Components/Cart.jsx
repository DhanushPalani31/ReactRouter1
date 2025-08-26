import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import Navbar from "./Navbar";

export default function Cart() {
  const { cart, addToCart, removeFromCart, removeCompletely, totalCost } =
    useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center bg-white rounded-lg shadow p-4"
              >
                <img
                  className="w-[100px] h-[100px] object-contain mb-3"
                  src={product.image}
                  alt={product.title}
                />
                <h2 className="font-semibold text-gray-700 text-center">
                  {product.title.slice(0, 30)}...
                </h2>
                <p className="text-indigo-600 font-bold">${product.price}</p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-gray-200 px-2 py-1 rounded-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-bold">{product.quantity}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gray-200 px-2 py-1 rounded-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeCompletely(product.id)}
                  className="mt-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>

                
              </div>
            ))}
          </div>
        )}

        {(
          <div className="mt-8 p-6 bg-white rounded-lg shadow flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Total: ${totalCost.toFixed(2)}
            </h3>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
