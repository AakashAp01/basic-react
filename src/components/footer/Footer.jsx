// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-4 text-center">
      <span>&copy; 2024 MyApp. All Rights Reserved.</span>
    
            <NavLink
              to="/bg"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-gray-300 font-bold"
              }
            >
              Home
            </NavLink>
        
    </footer>
  );
}
