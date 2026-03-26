import React from "react";
import { HeaderTabs } from "../data/tabs/siderbar-data";
import Socials from "./Socials";
import SidebarTabs from "./SidebarTabs";
import ProfileImageCard from "./ProfileImageCard";
import SidebarInfo from "./SidebarInfo";

export default function Sidebar() {
  return (
    <div className="flex flex-col lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <ProfileImageCard />
        <SidebarInfo />
        <SidebarTabs headerTabs={HeaderTabs} />
      </div>
      <Socials />
    </div>
  );
}
