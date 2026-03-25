"use client";

import useMouseGlow from "../hooks/useMouseGlow";


export default function MouseGlowWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { x, y } = useMouseGlow();

  return (
    <div
      className="min-h-screen bg-[#0a192f]"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      {children}
    </div>
  );
}