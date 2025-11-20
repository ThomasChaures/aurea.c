"use client";

import Image from "next/image";
import Card from "../ui/Card";
import Button from "../ui/Button";
import InnerBar from "../ui/InnerBar";
import { ChevronRight, CircleCheck, ChevronLeft } from "lucide-react";
import { useState } from "react";

interface Treatment {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  price: number;
  oldPrice: number;
  buttonPrimary: string;
  buttonSecondary: string;
  image: string;
  featured: boolean;
}

const ProductsInteractive = ({ treatments }: { treatments: Treatment[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const total = treatments.length;
  const mod = (n: number) => (n + total) % total;

  const center = treatments[selectedIndex];
  const left = treatments[mod(selectedIndex - 1)];
  const left2 = treatments[mod(selectedIndex - 2)];
  const right = treatments[mod(selectedIndex + 1)];
  const right2 = treatments[mod(selectedIndex + 2)];

  return (
    <div className="max-w-7xl flex items-center flex-col mx-auto py-20">
      <InnerBar className2=" px-2 py-2 max-sm:max-w-[300px] max-md:max-w-[350px]">
        <ul className="flex items-center gap-3 overflow-x-auto scrollbar-none">
          {["Weight loss", "Hair Care", "Skin Care", "Hormone", "Wellness"].map(
            (item, i) => (
              <li
                key={i}
                className={`
            whitespace-nowrap text-center 
            px-6 py-3.5 
            max-lg:px-3 max-lg:1.5 
            rounded-full text-lg max-lg:text-base max-sm:text-sm
            ${i === 0 ? "bg-white text-black" : "text-white font-light"}
          `}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </InnerBar>

      {/* Product */}

      <article className="my-8 flex flex-col lg:flex-row gap-6 w-full">
        {/* IMG */}
        <div className="relative w-full lg:w-2/5 aspect-square h-[380px] lg:h-auto rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/images/product.png"
            alt="Product Image"
            fill
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 35vw"
          />
        </div>

        {/* CARD */}
        <Card className="flex flex-col justify-between w-full lg:w-3/5 gap-y-6 p-6 h-auto">
          {/* HEADER */}
          <div className="w-full">
            <div className="border-b py-6 border-foreground/20">
              <h3
                id="product-title"
                className="text-3xl font-mono font-bold max-md:text-2xl"
              >
                {center.subtitle}
              </h3>
              <p className="text-base pt-3 leading-relaxed">
                {center.description}
              </p>
            </div>

            {/* LIST */}
            <ul className="flex flex-col gap-y-2 my-6">
              {center.benefits?.map((b, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-2.5 text-sm md:text-base"
                >
                  <CircleCheck size={24} className="text-[#D4B66E]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* PRICE + BTNS */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="font-mono text-xl md:text-2xl whitespace-nowrap">
              <span
                aria-label="Current price"
                className="text-[#D4B66E] font-semibold"
              >
                ${center.price}
              </span>{" "}
              |{" "}
              <span
                aria-label="Original price"
                className="text-lg line-through"
              >
                ${center.oldPrice}
              </span>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <Button className="w-full md:w-auto">Get started</Button>
              <Button variant="underline" className="w-full md:w-auto">
                Learn more
              </Button>
            </div>
          </div>
        </Card>
      </article>

      <div className="caroussel relative mt-6">
        <div className="absolute inset-y-0 left-0 w-18 bg-linear-to-r  h-[200px] from-[#21251A] from-20% to-transparent z-20"></div>
        <div className="absolute inset-y-0 left-0 w-18 bg-linear-to-r  h-[200px] from-[#21251A] from-20% to-transparent z-20">
          <button
            aria-label="Previous treatment"
            onClick={() => setSelectedIndex(mod(selectedIndex - 1))}
            className="
      absolute flex items-center justify-center
      w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20

      rounded-full border border-white bg-white/10
      backdrop-blur-md cursor-pointer
      transition-all duration-200

      left-2 md:left-4 lg:-left-10
      top-auto md:top-1/2 md:-translate-y-1/2 bottom-20

      z-20
    "
          >
            <ChevronLeft size={28} className=" text-white" />
          </button>

          {/* Right button */}
        </div>

        <div className="absolute inset-y-0 right-0 w-18 bg-linear-to-l h-[200px]  from-[#21251A] from-20%  to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-18 bg-linear-to-l h-[200px]  from-[#21251A] from-20%  to-transparent z-20">
          <button
            aria-label="Next treatment"
            onClick={() => setSelectedIndex(mod(selectedIndex + 1))}
            className="
      absolute flex items-center justify-center
      w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20

      rounded-full border border-white bg-white/10
      backdrop-blur-md cursor-pointer
      transition-all duration-200

      right-2 md:right-4 lg:-right-10
      top-auto md:top-1/2 md:-translate-y-1/2 bottom-20

      z-20
    "
          >
            <ChevronRight size={28} className=" text-white" />
          </button>
        </div>

        <div className="carousel-left">
          <div>
            <div>
              <p className="text-lg font-light mb-3">{left2.subtitle}</p>
              <span className="text-2xl font-mono font-light">
                ${left2.price}
              </span>
            </div>
            <div>
              <p className="text-lg font-light mb-3">{left.subtitle}</p>
              <span className="text-2xl font-mono font-light">
                ${left.price}
              </span>
            </div>
          </div>
        </div>
        <div className="caroussel-selected text-white">
          <p className="text-lg font-semibold mb-3">{center.subtitle}</p>
          <span className="text-2xl font-mono font-semibold">
            ${center.price}
          </span>
        </div>
        <div className="carousel-right">
          <div>
            <div>
              <p className="text-lg mb-3">{right.subtitle}</p>
              <span className="text-2xl font-mono font-light">
                ${right.price}
              </span>
            </div>
            <div>
              <p className="text-lg  mb-3">{right2.subtitle}</p>
              <span className="text-2xl font-mono font-light">
                ${right2.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInteractive;
