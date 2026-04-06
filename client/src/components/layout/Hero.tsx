import { Show, SignUpButton } from "@clerk/react";
import React from "react";
import { NavLink } from "react-router";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center space-y-2 rounded-lg py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Fakturera smartare. Få betalt snabbare.
      </h2>
      <p className="max-w-2xl text-center text-xl tracking-tight text-neutral-600">
        INVOICE APP är faktureringsverktyget för svenska frilansare och småföretag. Skapa professionella fakturor och
        offerter på minuter — utan krångel.
      </p>
      <Show when="signed-out">
        <SignUpButton>
          <button className="mt-2 rounded-lg border border-indigo-500 bg-indigo-500 px-20 py-2 font-semibold text-white transition-colors duration-100 hover:cursor-pointer hover:bg-white hover:text-indigo-500">
            Kom igång gratis
          </button>
        </SignUpButton>
      </Show>
      <Show when="signed-in">
        <NavLink
          to="/dashboard"
          className="mt-2 rounded-lg border border-indigo-500 bg-indigo-500 px-20 py-2 font-semibold text-white transition-colors duration-100 hover:cursor-pointer hover:bg-white hover:text-indigo-500"
        >
          Till dashboard
        </NavLink>
      </Show>
    </section>
  );
}
