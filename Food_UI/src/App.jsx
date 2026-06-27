import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


const Home = () => <div className="p-4">Home Page Content</div>;
const About = () => <div className="p-4">About Page Content</div>;
const Services = () => <div className="p-4">Services Page Content</div>;

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
