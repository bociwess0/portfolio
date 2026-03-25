"use client";

import AnchorPanel from "./components/AnchorPanel";
import Sidebar from "./components/Sidebar";
import useMouseGlow from "./hooks/useMouseGlow";

export default function Home() {
  const { x, y } = useMouseGlow();

  return (
    <div
      className="min-h-screen bg-[#0a192f]"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <main className="h-screen">
          <div className="flex justify-between h-screen">
            <Sidebar />
            <AnchorPanel />
          </div>
        </main>
      </div>
    </div>
  );
}