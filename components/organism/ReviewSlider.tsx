"use client";
import { useState } from "react";
import Card from "../ui/Card";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";

const ReviewsSlider = ({ reviews }: any) => {
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
    <>
      <div className="flex w-full overflow-hidden justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {visibleReviews.map((r: any) => (
            <Card
              key={r.id}
              className="w-full h-full flex flex-col justify-between text-center"
            >
              <div>
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

                <p className="text-[#2B3D2C] mt-7 leading-relaxed">
                  {r.text}
                </p>
              </div>

              <p className="mt-4 font-semibold text-[#C29A28]">
                {r.name}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-7 mt-10 mb-40">
        <button
          onClick={prevSlide}
          className="bg-[#C29A28]/20 h-12 w-12 rounded-full border border-[#C29A28]/20 flex items-center justify-center"
        >
          <ChevronLeft size={30} className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="bg-[#C29A28]/20 h-12 w-12 rounded-full border border-[#C29A28]/20 flex items-center justify-center"
        >
          <ChevronRight size={30} className="text-white" />
        </button>
      </div>
    </>
  );
};

export default ReviewsSlider;
