import React from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-slate-800 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-500 text-2xl font-bold">
          AakashAp
        </Link>
 
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/counter"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bg"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              BG Changer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/password"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Password Generator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/converter"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Currency Converter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/table"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300"
              }
            >
              Table
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
