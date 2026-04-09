import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <div className="flex flex-wrap justify-between gap-y-2 py-4 text-sm">
      <span className="order-2 w-1/2 tracking-wide text-indigo-500 sm:order-1 sm:w-auto sm:flex-1">INVOICE APP</span>
      <div className="order-first flex w-full justify-center gap-2 sm:order-2 sm:w-auto sm:flex-1">
        <NavLink to="#" className="hover:opacity-80">
          Integritetspolicy
        </NavLink>
        <NavLink to="#" className="hover:opacity-80">
          Villkor
        </NavLink>
        <NavLink to="#" className="hover:opacity-80">
          Support
        </NavLink>
      </div>
      <div className="order-3 w-1/2 text-end sm:w-auto sm:flex-1">&copy; 2026 Invoice App</div>
    </div>
  );
}
