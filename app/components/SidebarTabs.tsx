"use client";
import React from "react";
import { HeaderTab } from "../types";
import useActiveSection from "../hooks/useActiveSection";

interface Props {
  headerTabs: HeaderTab[];
}


export default function SidebarTabs({ headerTabs }: Props) {
  const active = useActiveSection();

  return (
    <div className="flex flex-col gap-5 mt-15">
      {headerTabs.map((item: HeaderTab, index) => {
        const isActive = active === item.type;

        return (
          <a
            key={index}
            href={item.href}
            className={`group flex items-center gap-4 uppercase text-sm font-medium transition
              ${isActive ? "text-white" : "text-gray-400"}
            `}
          >
            <span
              className={`block h-px transition-all duration-300
                ${isActive ? "w-16 bg-white" : "w-8 bg-slate-400 group-hover:w-16 group-hover:bg-white"}
              `}
            />
            <span
              className={`tracking-widest transition-all duration-300
                ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}
              `}
            >
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
