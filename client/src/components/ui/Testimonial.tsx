import { Star } from "lucide-react";
import React from "react";

interface Props {
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  name: string;
  subName: string;
}

export default function Testimonial({ text, rating, name, subName }: Props) {
  return (
    <div className="space-y-4">
      <span className="flex gap-0.5">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
        ))}
      </span>
      <p>
        "Har testat Fortnox och Visma men det var alldeles för mycket. Det här är precis rätt nivå — snabbt och enkelt."
      </p>
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-indigo-50"></div>
        <div className="flex flex-col leading-4">
          <span className="text-sm font-semibold text-neutral-900">{name}</span>
          <span className="text-[0.8rem] text-neutral-500">{subName}</span>
        </div>
      </div>
    </div>
  );
}
