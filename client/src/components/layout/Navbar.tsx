import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="sticky top-4 mx-auto mb-4 flex w-full max-w-4xl justify-between rounded-full border border-neutral-500 bg-white px-6 py-3 shadow-md">
      <h1 className="text-lg font-black tracking-tight text-indigo-500 uppercase">Invoice app</h1>
      <Show when="signed-out">
        <div className="flex items-center space-x-2">
          <SignInButton>
            <button className="font-semibold tracking-tight hover:cursor-pointer hover:text-indigo-500">
              Logga in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="font-semibold tracking-tight hover:cursor-pointer hover:text-indigo-500">
              Skapa konto
            </button>
          </SignUpButton>
        </div>
      </Show>
      <Show when="signed-in">
        <nav className="hidden items-center space-x-2 tracking-tight sm:flex">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="clients">Kunder</NavLink>
          <NavLink to="services">Tjänster/Produkter</NavLink>
          <NavLink to="profile">Profil</NavLink>
        </nav>
        <UserButton showName />
      </Show>
    </header>
  );
}
