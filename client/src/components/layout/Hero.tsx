import { Show, SignUpButton } from "@clerk/react";
import { ArrowRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center space-y-2 py-12 md:py-24 lg:py-32">
      <h2 className="text-center font-serif text-3xl tracking-tight sm:text-4xl md:text-5xl">
        <span className="block sm:inline">
          Fakturera <em className="text-indigo-500">smartare.</em>
        </span>{" "}
        Få betalt snabbare.
      </h2>
      <p className="max-w-2xl text-center text-xl tracking-tight text-neutral-500">
        INVOICE APP är faktureringsverktyget för svenska frilansare och småföretag. Skapa professionella fakturor och
        offerter på minuter — utan krångel.
      </p>
      <div className="mt-2 space-y-4 text-center">
        <Show when="signed-out">
          <div className="flex flex-row">
            <SignUpButton>
              <button className="rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white transition-colors duration-100 hover:cursor-pointer hover:opacity-90 active:bg-indigo-600 sm:px-8">
                Kom igång gratis
              </button>
            </SignUpButton>
            <a
              href="#"
              className="flex items-center gap-1 px-5 py-3 text-neutral-900 hover:cursor-pointer hover:opacity-80 sm:px-8"
            >
              Se hur det fungerar <ArrowRight size={12} className="" />
            </a>
          </div>
        </Show>
        <span className="text-xs text-neutral-900">Inget kreditkort krävs · Alltid gratis upp till 5 fakturor/mån</span>
      </div>
      <Show when="signed-in">
        <NavLink
          to="/dashboard"
          className="mt-2 rounded-xl border border-indigo-500 bg-indigo-500 px-20 py-2 font-semibold text-white transition-colors duration-100 hover:cursor-pointer hover:bg-white hover:text-indigo-500"
        >
          Till dashboard
        </NavLink>
      </Show>
    </section>
  );
}
