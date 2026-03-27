import React from "react";
import { HeaderTab } from "../types";

interface Props {
  section: HeaderTab;
}

export function formatText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={index} className="text-white font-medium">
          {part.slice(2, -2)}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export default function About({ section }: Props) {
  return (
    <section id={section.type}>
      <div className="uppercase font-semibold mb-5 lg:hidden">{section.name}</div>
      {section.description &&
        section.description.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-slate-400 leading-relaxed mb-4">
            {formatText(paragraph)}
          </p>
        ))}
    </section>
  );
}
