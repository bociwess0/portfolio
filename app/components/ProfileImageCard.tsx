import Image from "next/image";
import React from "react";

export default function ProfileImageCard() {
  return (
    <div className="relative w-45 h-45 mb-6">
      <div className="absolute inset-0 rounded-full bg-[#163d79] blur-xl opacity-30"></div>

      <div className="absolute inset-0 rounded-full border-2 border-[#577eb8]"></div>

      <Image
        src="/profile_photo.jpg"
        alt="Bogdan Djordjevic"
        fill
        className="rounded-full object-cover object-[center_15%]"
        priority
      />
    </div>
  );
}
