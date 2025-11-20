"use client";

import { useEffect, useRef } from "react";

interface StepCard {
  id: number;
  title: string;
  description: string;
}

export default function StackedCards({ items }: { items: StepCard[] }) {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const centerY = 300; // focal point EXACTO como tu screenshot

      cardsRef.current.forEach((card) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.top - centerY);

        const fade = Math.min(dist / 200, 1);

        card.style.opacity = `${1 - fade * 0.6}`;
        card.style.scale = `${1 - fade * 0.05}`;

        const direction = rect.top < centerY ? -1 : 1;
        card.style.transform = `translateY(${fade * 25 * direction}px)`;
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-hidden space-y-10">

      {items.map((item, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="
            sticky top-[170px]
            mx-auto w-[90%] max-w-3xl
            bg-white rounded-3xl shadow-lg
            px-10 py-8
            transition-all duration-300
          "
        >
          <p className="text-sm text-gray-500">Step -{item.id}</p>
          <h3 className="text-xl font-semibold text-[#4d633a] mt-1">{item.title}</h3>
          <p className="text-gray-600 mt-3">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
