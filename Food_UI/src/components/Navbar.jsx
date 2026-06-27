import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo_Navbar from "../assets/logo_navbar.png";

const Navbar = () => {
  return (
    <>
    <div className="container">
      <nav className="fixed w-full z-20 top-0 start-0 border-1   ">
        <div className="max-w-full flex flex-wrap items-center justify-between ml-[50px] p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-4 rtl:space-x-reverse"
          >
            <img src={Logo_Navbar} className="h-9" alt="Burger Logo" />
            <span className="self-center text-[24px] text-heading text-white font-semibold whitespace-nowrap bg">
              BURGER
            </span>
          </NavLink>
          <div className="hidden w-full md:block md:w-auto mx-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 gap-x-20 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `  block py-2 px-3 rounded md:p-0 ${isActive ? "text-fg-brand" : "text-heading"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${isActive ? "text-fg-brand" : "text-heading"}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 ${isActive ? "text-fg-brand" : "text-heading"}`
                  }
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
