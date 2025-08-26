import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div
        className="text-2xl font-extrabold text-white cursor-pointer"
        onClick={() => navigate("/")}
      >
        E-Purchase
      </div>
      <div
        className="relative flex items-center gap-2 cursor-pointer text-white font-semibold"
        onClick={() => navigate("/cart")}
      >
        🛒 Cart
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 text-xs text-white w-6 h-6 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </div>
    </nav>
  );
}
