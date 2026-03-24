import React from "react";
import { HeaderTab } from "../types";

interface Props {
  headerTabs: HeaderTab[];
}

export default function SidebarTabs({ headerTabs }: Props) {
  return (
    <div className="flex flex-col gap-5 mt-15">
      {headerTabs.map((item: HeaderTab, index) => (
        <a
          key={index}
          className="group flex items-center gap-4 text-gray-400 uppercase text-sm font-medium"
          href="#"
        >
          <span
            className="block h-px w-8 bg-slate-400 
            transition-all duration-300 
            group-hover:w-16 group-hover:bg-white"
          />
          <span
            className="
                text-sm tracking-widest text-slate-400 
                transition-all duration-300 
                group-hover:text-white"
          >
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
}
