"use client";

import React, { useState, useEffect } from "react";

export function HeroGlow() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
      style={{
        background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(229, 9, 20, 0.08), transparent 80%)`,
      }}
    />
  );
}
