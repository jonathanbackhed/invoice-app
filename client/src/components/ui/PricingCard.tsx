import { Check } from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router";

interface Props {
  tag: string;
  price: string;
  subTitle: string;
  perks: string[];
  buttonText: string;
  buttonHref: string;
  mostPopular?: boolean;
}

export default function PricingCard({ tag, price, subTitle, perks, buttonText, buttonHref, mostPopular }: Props) {
  return (
    <div className={cn("flex flex-col rounded-xl p-8", mostPopular && "border-2 border-indigo-500")}>
      <span className="text-sm font-semibold">{tag}</span>
      <span className="font-serif text-4xl">{price}</span>
      <span className="text-xs">{subTitle}</span>
      <div className="mt-4 space-y-1">
        {perks.map((perk) => (
          <span key={perk} className="flex items-center gap-2 text-sm">
            <div className="h-fit w-fit rounded-full bg-indigo-50 p-1">
              <Check size={8} className="text-indigo-500" strokeWidth={4} />
            </div>
            {perk}
          </span>
        ))}
      </div>

      <NavLink
        to={buttonHref}
        className={cn("mt-6 rounded-xl px-4 py-2 text-center font-semibold", mostPopular && "bg-indigo-500 text-white")}
      >
        {buttonText}
      </NavLink>
    </div>
  );
}
