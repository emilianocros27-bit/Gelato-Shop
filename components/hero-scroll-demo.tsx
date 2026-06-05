"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col bg-white">
      <ContainerScroll
        titleComponent={
          <div className="mb-4">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
              Helado y Waffle · Xalapa, Veracruz
            </p>
            <h1
              className="font-serif text-5xl md:text-8xl text-black leading-none tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Gelato <em>Shop</em>
            </h1>
          </div>
        }
      >
        <iframe
          src="/glace.html"
          className="w-full h-full rounded-2xl border-0"
          title="Gelato Shop"
        />
      </ContainerScroll>
    </div>
  );
}
