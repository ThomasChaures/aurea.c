"use client";
import React, { useState } from "react";

import SectionHelper from "../../ui/SectionHelper";
import HeaderSections from "../../ui/HeaderSections";
import Card from "../../ui/Card";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Amanda",
      rating: 5,
      text: `“Aurea.Cure made the process simple and clear. For the first time, I understood what was affecting my weight and how to improve it safely.”`,
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
      rating: 5,
      text: `“I was tired of guesswork. Aurea.Cure gave me clarity, structure, and a treatment that genuinely fits my lifestyle.”`,
    },
    {
      id: 4,
      name: "Lucas",
      rating: 5,
      text: `“After years of trying everything, this was the first time it finally clicked. Real guidance and real results.”`,
    },
    {
      id: 5,
      name: "Emily",
      rating: 4,
      text: `“Fast onboarding, professional team, and medication that works. I’m feeling like myself again.”`,
    },
    {
      id: 6,
      name: "Olivia",
      rating: 5,
      text: `“Every step felt supported. I wasn’t alone trying to figure things out. I recommend it 100%.”`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - itemsPerPage : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= reviews.length ? 0 : prev + 1
    );
  };

  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <SectionHelper className="my-20 max-lg:mb-0!">
      <HeaderSections
        title="What others say about us"
        text="Our treatments support metabolic health and sustainable weight management through clinician-designed formulas tailored for appetite, metabolism, and glucose control."
      />

      <div className="flex w-full overflow-hidden justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {visibleReviews.map((r) => (
            <Card
              key={r.id}
              className=" w-full h-full flex flex-col border-yellow-500/30 justify-between text-center"
            >
              <div>
                <div
                  aria-label={`${r.rating} out of 5 stars`}
                  className="flex items-center justify-center gap-1 mb-4"
                >
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
      </div>

      <div className="flex items-center justify-center gap-x-7 mt-10 mb-40">
        <button
          onClick={prevSlide}
          className="bg-[#C29A28]/20 cursor-pointer h-12 w-12 flex items-center justify-center rounded-full border border-[#C29A28]/20"
        >
          <ChevronLeft size={30} className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-[#C29A28]/20 h-12 cursor-pointer w-12 flex items-center justify-center rounded-full border border-[#C29A28]/20"
        >
          <ChevronRight size={30} className="text-white" />
        </button>
      </div>
    </SectionHelper>
  );
};

export default Reviews;
