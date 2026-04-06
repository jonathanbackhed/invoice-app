import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <header className="sticky top-4 mx-auto mb-4 flex w-full max-w-4xl justify-between rounded-full border border-neutral-500 bg-white px-6 py-3 shadow-md">
      <h1 className="text-lg font-black tracking-tight text-indigo-500 uppercase">Invoice app</h1>
      <div className="flex items-center justify-center space-x-2">
        {/* <nav className="flex items-center justify-center space-x-2">
            <NavLink to="/" className="font-semibold tracking-tight hover:cursor-pointer hover:text-indigo-500">
              Priser
            </NavLink>
            <NavLink to="/" className="font-semibold tracking-tight hover:cursor-pointer hover:text-indigo-500">
              FAQ
            </NavLink>
            <NavLink to="/" className="font-semibold tracking-tight hover:cursor-pointer hover:text-indigo-500">
              Varför oss?
            </NavLink>
          </nav> */}
        <Show when="signed-out">
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
        </Show>
        <Show when="signed-in">
          <UserButton showName />
        </Show>
      </div>
    </header>
  );
}
