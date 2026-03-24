import React from "react";
import { HeaderTabs } from "../data/tabs/siderbar-data";
import Socials from "./Socials";
import SidebarTabs from "./SidebarTabs";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full justify-between lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold mb-2">Bogdan Djordjevic</h1>
        <div className="text-2xl font-medium mb-3">Frontend Developer</div>
        <div className="text-xl text-gray-400">
          I build accessible, pixel-perfect digital experiences for the web.
        </div>

        <SidebarTabs headerTabs={HeaderTabs} />
      </div>
      <Socials />
    </div>
  );
}
