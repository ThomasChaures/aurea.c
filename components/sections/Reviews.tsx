import React from "react";

import SectionHelper from "../ui/SectionHelper";
import HeaderSections from "../ui/HeaderSections";
import Card from "../ui/Card";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Amanda",
      rating: 4,
      text: `“Aurea.Cure made the process simple and clear. For the first time, I understood what was actually affecting my weight and how to improve it safely.”`,
    },
    {
      id: 2,
      name: "Daniel",
      rating: 4,
      text: `“The guidance felt personal and supportive. I wasn’t just handed medication, I got real answers and a plan that finally made sense.”`,
    },
    {
      id: 3,
      name: "Sofia",
      rating: 4,
      text: `“I was tired of generic advice and guesswork. Aurea.Cure gave me clarity, structure, and a treatment that genuinely fits my lifestyle.”`,
    },
  ];
  return (
    <SectionHelper className="my-20">
      <HeaderSections
        title="What other's say about us"
        text="Our treatments support metabolic health and sustainable weight management through clinician-designed formulas tailored for appetite, metabolism, and glucose control."
      />

      <div className="flex justify-between gap-x-4 h-70  items-center">
        {reviews &&
          reviews.map((r) => (
            <Card
              key={r.id}
              className="shadow-lg w-full h-full flex flex-col border-yellow-500/30 justify-between  text-center"
            >
              <div>
                {/* Estrellas */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < r.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>

                <p className="text-[#2B3D2C] mt-7 leading-relaxed">{r.text}</p>
              </div>

              <p className="mt-4 font-semibold text-[#C29A28]">{r.name}</p>
            </Card>
          ))}
      </div>

      <div className="flex items-center justify-center gap-x-7 mt-10 mb-40">
        <div className="bg-[#C29A28]/20 h-15 w-15  flex items-center justify-center rounded-full border  border-[#C29A28]">
          <ChevronLeft color="white" size={36} />
        </div>
        <div className="bg-[#C29A28]/20 h-15 w-15   flex items-center justify-center rounded-full border  border-[#C29A28]">
          <ChevronRight color="white" size={36} />
        </div>
      </div>
    </SectionHelper>
  );
};

export default Reviews;
