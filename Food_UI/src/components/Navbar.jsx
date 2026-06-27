import React from "react";
import { NavLink } from "react-router-dom";
import heroBurgerImg from "../assets/image_552674.png";
import hotBurgerImg from "../assets/hot-burger.png";
import comboMealImg from "../assets/combo-meal.png";
import teamMascotImg from "../assets/team-mascot.png";

// Static layout configurations dataset arrays
const BURGER_ITEMS = [
  { id: 1, name: "Veg Juicy Burger", price: "$150.00" },
  { id: 2, name: "Veg Crispy Burger", price: "$250.00" },
  { id: 3, name: "Veg Spicy Burger", price: "$170.00" },
  { id: 4, name: "Veg King Burger", price: "$310.00" },
];

const STEPS = [
  {
    icon: "fa-utensils",
    title: "Choose Your Meals",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "fa-truck",
    title: "Track Order",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "fa-handshake",
    title: "Collect Order",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

// Utility navigation link styling helper matching active states natively
const navLinkStyle = ({ isActive }) =>
  `transition-colors ${isActive ? "text-orange-500 font-bold" : "text-amber-900/80 hover:text-orange-500"}`;

// ----------------------------------------------------------------------
// DEFAULT CONTAINER EXPORT: MAIN NAVIGATION HEADER BAR Component
// ----------------------------------------------------------------------
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <NavLink
        to="/"
        className="flex items-center gap-2 font-bold text-xl text-amber-950"
      >
        <span className="bg-orange-500 text-white p-1.5 rounded-lg text-sm">
          🍔
        </span>
        <span>BURGER</span>
      </NavLink>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/menu" className={navLinkStyle}>
          Our Menu
        </NavLink>
        <NavLink to="/order" className={navLinkStyle}>
          Order
        </NavLink>
        <NavLink to="/contact" className={navLinkStyle}>
          Contact
        </NavLink>
      </nav>

      {/* FontAwesome global icon implementation block hook for mobile view toggles */}
      <div className="w-8 h-8 md:hidden flex items-center justify-center text-amber-950 text-xl cursor-pointer">
        <i className="fa-solid fa-bars"></i>
      </div>
    </header>
  );
}

// ----------------------------------------------------------------------
// NAMED EXPORT VIEW SHELLS (Routed through App.jsx)
// ----------------------------------------------------------------------

export function HomeView() {
  return (
    <>
      {/* Hero Banner Component Structure */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[50vw] h-[100%] bg-gradient-to-b from-orange-500 to-amber-500 hero-blob-shape hidden md:block" />
        <div className="space-y-6 max-w-lg">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold text-amber-900">
            <span className="text-yellow-500 space-x-0.5">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>{" "}
            4.5 (10k+ Happy Reviews)
          </div>
          <p className="text-orange-500 font-bold tracking-wide uppercase text-xs md:text-sm">
            Crispy, Crunchy, Veggie Deliciousness!
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-amber-950 leading-tight">
            Burgers That <br />
            <span className="text-orange-600 md:text-white md:drop-shadow-sm">
              Love the Earth!
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <NavLink
              to="/menu"
              className="bg-white text-orange-600 font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm"
            >
              Explore
            </NavLink>
            <button className="flex items-center gap-2 font-semibold text-sm text-amber-900 hover:text-orange-600 transition-colors">
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm">
                <i className="fa-solid fa-play ml-0.5"></i>
              </span>
              How to get order...
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <img
            src={heroBurgerImg}
            alt="Premium Veggie Burgers"
            className="w-full max-w-[450px] object-contain drop-shadow-2xl rounded-2xl"
          />
          <div className="absolute top-4 right-4 bg-orange-600 text-white font-black text-xs px-3 py-3 rounded-full uppercase tracking-widest animate-bounce shadow-lg">
            15% OFF
          </div>
        </div>
      </section>

      {/* Promo Section Component Structure */}
      <section className="mx-6 md:mx-12 max-w-7xl md:mx-auto my-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-xl">
        <div className="space-y-4 max-w-md z-10">
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Get Up To <br />
            <span className="text-yellow-300 text-4xl md:text-5xl">
              50% OFF
            </span>{" "}
            <br />
            On Your 2 Orders
          </h2>
          <NavLink
            to="/order"
            className="inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-xl shadow text-xs uppercase tracking-wider hover:bg-orange-50 transition-colors"
          >
            Order Now
          </NavLink>
        </div>
        <div className="relative max-w-md z-10">
          <img
            src={comboMealImg}
            alt="Combo Meal"
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </section>

      {/* About Section Component Structure */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-orange-600 font-bold">
            — WHO WE ARE —
          </h2>
          <div className="space-y-4 text-amber-900/80 text-sm leading-relaxed">
            <p className="border-b border-amber-900/10 pb-3 font-medium">
              ✔ Community-focused initiative built on relationships, quality,
              and commitment to environmental organizations.
            </p>
            <p className="border-b border-amber-900/10 pb-3">
              ✔ Sustainable blueprint for sharing information, revenue, and
              engaging with the Veggie Burger community.
            </p>
            <p className="border-b border-amber-900/10 pb-3">
              ✔ Nutritional information provided for standard menu items,
              catering to health-conscious customers.
            </p>
            <p className="pb-3">
              ✔ Wide range of Veggie Burger options including Classic, Gourmet,
              and Custom-made choices.
            </p>
          </div>
        </div>
        <div className="bg-orange-500 rounded-[2rem] p-6 flex justify-center items-center relative aspect-square max-w-md mx-auto overflow-hidden shadow-lg">
          <img
            src={teamMascotImg}
            alt="Our Team Mascot"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>
    </>
  );
}

export function MenuView() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto text-center space-y-10">
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-widest text-orange-600 font-bold">
          — HOT ITEMS —
        </h2>
        <p className="text-sm text-amber-800/80 max-w-xl mx-auto">
          LOCALLY SOURCED, ORGANIC INGREDIENTS FOR A FRESH AND ECO-FRIENDLY
          EXPERIENCE.
        </p>
      </div>
      <div className="relative flex items-center justify-center gap-4">
        <button className="p-3 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition-all">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          {BURGER_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-orange-400/90 hover:bg-orange-500 text-white rounded-3xl p-5 shadow-lg relative group transition-all transform hover:-translate-y-1 flex flex-col items-center pt-12"
            >
              <div className="absolute -top-10 w-24 h-24 drop-shadow-md group-hover:scale-110 transition-transform">
                <img
                  src={hotBurgerImg}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-base tracking-wide mt-4">
                {item.name}
              </h3>
              <p className="text-sm font-black mt-2 opacity-90">{item.price}</p>
              <button className="mt-4 bg-white/20 hover:bg-white text-white hover:text-orange-600 p-2.5 rounded-xl transition-colors self-end">
                <i className="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          ))}
        </div>
        <button className="p-3 rounded-full bg-white shadow hover:bg-orange-500 hover:text-white transition-all">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export function OrderView() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#FFF3E3] to-orange-50/50 px-6 md:px-12 text-center space-y-12">
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-widest text-orange-600 font-bold">
          — HOW DOES IT WORKS —
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {STEPS.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-md border border-amber-100 flex flex-col items-center text-center space-y-4 group hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md text-xl">
              <i className={`fa-solid ${step.icon}`}></i>
            </div>
            <h3 className="font-bold text-lg text-amber-950">{step.title}</h3>
            <p className="text-xs text-amber-800/70 leading-relaxed max-w-xs">
              {step.text}
            </p>
            <button className="text-orange-500 group-hover:translate-x-1 transition-transform pt-2">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactView() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto text-center space-y-10">
      <h2 className="text-xs uppercase tracking-widest text-orange-600 font-bold">
        — WHAT OUR CUSTOMER SAYS —
      </h2>
      <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-md border border-amber-100 max-w-2xl mx-auto space-y-6">
        <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto text-lg">
          <i className="fa-solid fa-quote-left"></i>
        </div>
        <p className="text-sm md:text-base italic text-amber-900/80 leading-relaxed">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <div className="space-y-1">
          <div className="text-yellow-500 text-xs space-x-0.5">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <h4 className="font-bold text-sm text-amber-950">Wendy Cleo</h4>
          <p className="text-[11px] text-amber-800/50">Purchased Burger Mix</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <button className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900 shadow-sm hover:bg-orange-500 hover:text-white transition-all">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-900 shadow-sm hover:bg-orange-500 hover:text-white transition-all">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// STATIC FOOTER SUB-COMPONENT
// ----------------------------------------------------------------------
export function Footer() {
  return (
    <footer className="bg-orange-600 text-white pt-16 pb-8 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/20 text-sm">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="bg-white text-orange-600 p-1 rounded">🍔</span>{" "}
            BURGER
          </div>
          <p className="text-xs text-orange-100 leading-relaxed">
            Delicious plant-based crafted creations optimized for ecological
            mindfulness and taste excellence.
          </p>
          <div className="text-xs space-y-1 text-orange-100">
            <p>+123456789</p>
            <p>hello@burger.com</p>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 tracking-wider">Services</h4>
          <ul className="space-y-2 text-xs text-orange-100">
            <li>
              <NavLink to="/menu" className="hover:underline">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/order" className="hover:underline">
                Fast Delivery
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 tracking-wider">Reference</h4>
          <ul className="space-y-2 text-xs text-orange-100">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold tracking-wider">Subscribe for new update</h4>
          <div className="flex bg-white rounded-xl overflow-hidden p-1">
            <input
              type="email"
              placeholder="Your Email..."
              className="px-3 py-2 text-amber-950 bg-transparent focus:outline-none text-xs w-full"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors">
              Go
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-orange-200">
        © {new Date().getFullYear()} Burger. All Rights Reserved.
      </div>
    </footer>
  );
}
