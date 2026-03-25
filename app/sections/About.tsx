import React from "react";
import { HeaderTab } from "../types";

interface Props {
    section: HeaderTab
}

export default function About({section}: Props) {
  return (
    <section id={section.type}>
      {section.description &&
        section.description.split("\n\n").map((paragraph, i) => (
          <p key={i} className="text-slate-400 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
    </section>
  );
}
