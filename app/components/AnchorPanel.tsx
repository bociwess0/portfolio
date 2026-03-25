import React from "react";
import { HeaderTabs } from "../data/tabs/siderbar-data";
import About from "../sections/About";
import Experience from "../sections/Experience";

export default function AnchorPanel() {
  return (
    <div className="pt-24 lg:w-[52%] lg:py-24">
      <div className="flex flex-col gap-30">
        {HeaderTabs.map((section, index) => {
          switch (section.type) {
            case "about":
              return <About key={index} section={section} />;
            case "experience":
              return <Experience key={index} section={section} />;

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
