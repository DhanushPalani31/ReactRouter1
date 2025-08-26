import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductCard from './Components/ProductCard';
import Cart from './Components/Cart';
import { CartProvider } from './Components/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
