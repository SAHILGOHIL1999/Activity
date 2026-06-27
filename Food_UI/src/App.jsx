import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <div className="p-4">Home Page Content</div>;
const Ouroutlets = () => <div className="p-4">Our Outlets Content</div>;
const Order = () => <div className="p-4">Order Page Content</div>;
const Contact = () => <div className="p-4">Contact Page Content</div>;

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ouroutlets" element={<Ouroutlets />} />
          <Route path="order" element={<Order />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
