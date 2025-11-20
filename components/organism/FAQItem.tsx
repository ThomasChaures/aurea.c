"use client";
import { useState } from "react";
import Card from "../ui/Card";
import { ChevronDown } from "lucide-react";

interface Props {
  id: number;
  question: string;
  answer: string;
}

const FAQItem = ({ id, question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      onClick={() => setOpen(!open)}
      className={`cursor-pointer transition-all duration-300 p-4! rounded-2xl 
      ${open ? "bg-white shadow-md" : "bg-[#C29730]! opacity-60! text-white"}
    `}
    >
      <div
        className={`flex items-center justify-between ${
          open ? "text-[#C29730]" : "text-white"
        }`}
      >
        <p className="font-medium">{question}</p>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {open && (
        <>
          <div className="bg-gray-300/20 my-2 w-full h-0.5"></div>
          <p className="mt-3 text-[#55603A] font-light leading-relaxed">
            {answer}
          </p>
        </>
      )}
    </Card>
  );
};

export default FAQItem;
