'use client'

import Image from "next/image";
import { useState } from "react";
import SectionHelper from "../../ui/SectionHelper";
import Card from "../../ui/Card";
import { ChevronDown } from "lucide-react";

const Faqs = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqs = [
    {
      id: 1,
      question: "How does the process work?",
      answer:
        "You choose your category, complete a short intake, and get matched with the right treatment plan. Everything happens online, so it fits easily into your schedule.",
    },
    {
      id: 2,
      question: "What makes your treatments different?",
      answer:
        "Our treatments are personalized, science-backed, and designed to target the root causes of your concerns instead of just the symptoms.",
    },
    {
      id: 3,
      question: "How long does it take to see results?",
      answer:
        "Most members begin noticing improvements within a few weeks, with full benefits developing over the following months depending on their category.",
    },
    {
      id: 4,
      question: "Do I need an in-person appointment?",
      answer:
        "No. The entire process is virtual. You’ll complete your evaluation and follow-ups online with licensed professionals.",
    },
    {
      id: 5,
      question: "Is this right for beginners?",
      answer:
        "Yes. Our plans are designed to work for beginners as well as individuals with prior experience. Everything is simplified and guided step-by-step.",
    },
    {
      id: 6,
      question: "How do I know which category fits my needs?",
      answer:
        "You’ll receive a guided intake that helps determine the ideal category based on your goals, symptoms, and health profile.",
    },
  ];

  return (
    <SectionHelper className="flex max-lg:flex-col max-lg:items-center max-lg:justify-center justify-between items-start gap-x-10">
      {/* Imagen */}
      <div className="relative max-lg:hidden w-[624px] h-[624px]">
        <Image
          src="/images/qa.png"
          alt="Products image"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw"
        />
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-y-3 max-lg:w-full max-w-full w-[480px]">
        {faqs.map((q) => {
          const isOpen = openId === q.id;

          return (
            <Card
              key={q.id}
              onClick={() => toggleFaq(q.id)}
              className={`cursor-pointer transition-all duration-300 p-4! rounded-2xl 
            ${
              isOpen
                ? "bg-white shadow-md"
                : "bg-[#C29730]! opacity-60! text-white"
            }`}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between 
            ${isOpen ? "text-[#C29730]" : "text-white"}
          `}
              >
                <p className="font-medium">{q.question}</p>

                <ChevronDown
                  className={`transition-transform duration-300 
              ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
              </div>

              {isOpen && (
                <>
                  <div className="bg-gray-300/20 my-2 w-full h-0.5"></div>
                </>
              )}

              {/* Respuesta */}
              {isOpen && (
                <p className="mt-3 text-[#55603A] text-sans font-light leading-relaxed">
                  {q.answer}
                </p>
              )}
            </Card>
          );
        })}
      </div>
    </SectionHelper>
  );
};

export default Faqs;
