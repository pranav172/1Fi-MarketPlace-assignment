import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Marketplace from './pages/Marketplace';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import CheckoutSuccess from './pages/CheckoutSuccess';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/marketplace" element={<Marketplace />} />
          <Route path="/shop/marketplace/product/:id" element={<ProductDetails />} />
          <Route path="/shop/marketplace/product/:id/checkout" element={<Checkout />} />
          <Route path="/shop/marketplace/product/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/emi-dues" element={<PlaceholderPage />} />
          <Route path="/limit" element={<PlaceholderPage />} />
          <Route path="/profile" element={<PlaceholderPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;