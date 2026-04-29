import React from "react";

interface Props {
  title: React.ReactNode;
  tag?: string;
}

export default function SectionHeader({ title, tag }: Props) {
  return (
    <div className="mb-8">
      <span className="text-xs tracking-wider text-indigo-500 uppercase">{tag}</span>
      <h3 className="font-serif text-2xl sm:text-4xl">{title}</h3>
    </div>
  );
}
