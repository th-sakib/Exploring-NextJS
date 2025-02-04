"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { TooltipsAvatar } from "./Tooltip";

export function Footer() {
  return (
    <WavyBackground className="max-w-4xl mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Contact Us
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          To get more knowledge about hiphop
        </p>
      </div>
      <TooltipsAvatar />
    </WavyBackground>
  );
}
