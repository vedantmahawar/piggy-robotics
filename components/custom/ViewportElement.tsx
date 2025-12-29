"use client";

import { useState, useEffect } from "react";

export default function ViewPortElement({
  children,
  targetSelector,
  className,
}: {
  children: React.ReactNode;
  targetSelector: string;
  className: string;
}) {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    const targetElement = document.querySelector(targetSelector);

    if (!targetElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setisVisible(!entry.isIntersecting);
    });

    observer.observe(targetElement);

    return () => observer.disconnect();
  }, [targetSelector]);

  return (
    <div
      className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} ${className}`}
    >
      {children}
    </div>
  );
}
