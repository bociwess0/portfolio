import React from "react";
import { HeaderTabs } from "../data/tabs/siderbar-data";

export default function AnchorPanel() {
  return (
    <div className="pt-24 lg:w-[52%] lg:py-24">
      {HeaderTabs.map((section, index) => (
        <div key={index} id={section.href}>
          {section.description && section.description.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-slate-400 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
