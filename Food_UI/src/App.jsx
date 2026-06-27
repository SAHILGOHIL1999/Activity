import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar, { HomeView, MenuView, OrderView, ContactView, Footer } from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FFF3E3] font-sans text-amber-950 antialiased flex flex-col justify-between selection:bg-amber-500 selection:text-white">
        <div>
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/menu" element={<MenuView />} />
              <Route path="/order" element={<OrderView />} />
              <Route path="/contact" element={<ContactView />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}