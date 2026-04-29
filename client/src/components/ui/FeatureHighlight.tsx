import React from "react";

interface Props {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export default function FeatureHighlight({ title, text, icon }: Props) {
  return (
    <section className="group col-span-full flex flex-col justify-between space-y-2 rounded-xl border border-neutral-100 bg-neutral-50 p-8 transition-colors duration-100 **:transition-colors **:duration-100 hover:bg-indigo-500 sm:col-span-6">
      <div className="w-fit rounded-xl border border-neutral-100 bg-white p-2 group-hover:border-indigo-300 group-hover:bg-indigo-400">
        {icon}
      </div>
      <h4 className="text-xl font-bold tracking-tighter group-hover:text-white">{title}</h4>
      <p className="tracking-tight text-neutral-800 group-hover:text-white">{text}</p>
    </section>
  );
}
