"use client";
import Image from "next/image";
import SectionHelper from "@/components/ui/SectionHelper";
import HeaderSections from "@/components/ui/HeaderSections";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { CircleCheck } from "lucide-react";
import Pill from "@/components/ui/Pill";
const LeadProducts = () => {
  const [onItem, setOnItem] = useState(false);
  const treatments = [
    {
      id: 1,
      title: "Weight loss",
      subtitle: "Personalized Care: GLP-1 Tablets",
      description:
        "Discover the power of Oral Tirzepatide for effective weight management.",
      benefits: [
        "Effortless daily injection — no need for pills",
        "Dual-action: GLP-1 + GIP receptor agonist",
        "Targets hunger, metabolism, and insulin response",
      ],
      price: 299,
      oldPrice: 346,
      buttonPrimary: "Get Started",
      buttonSecondary: "Learn More",
      image: "treatment-1.png",
      featured: true,
    },
    {
      id: 2,
      title: "Weight loss",
      subtitle: "Personalized Care: GLP-1 Tablets",
      description:
        "Discover the power of Oral Tirzepatide for effective weight management.",
      benefits: [
        "Effortless daily injection — no need for pills",
        "Dual-action: GLP-1 + GIP receptor agonist",
        "Targets hunger, metabolism, and insulin response",
      ],
      price: 299,
      oldPrice: 346,
      buttonPrimary: "Get Started",
      buttonSecondary: "Learn More",
      image: "treatment-2.png",
      featured: false,
    },
    {
      id: 3,
      title: "Weight loss",
      subtitle: "Personalized Care: GLP-1 Tablets",
      description:
        "Discover the power of Oral Tirzepatide for effective weight management.",
      benefits: [
        "Effortless daily injection — no need for pills",
        "Dual-action: GLP-1 + GIP receptor agonist",
        "Targets hunger, metabolism, and insulin response",
      ],
      price: 299,
      oldPrice: 346,
      buttonPrimary: "Get Started",
      buttonSecondary: "Learn More",
      image: "treatment-3.png",
      featured: false,
    },
    {
      id: 4,
      title: "Weight loss",
      subtitle: "Personalized Care: GLP-1 Tablets",
      description:
        "Discover the power of Oral Tirzepatide for effective weight management.",
      benefits: [
        "Effortless daily injection — no need for pills",
        "Dual-action: GLP-1 + GIP receptor agonist",
        "Targets hunger, metabolism, and insulin response",
      ],
      price: 299,
      oldPrice: 346,
      buttonPrimary: "Get Started",
      buttonSecondary: "Learn More",
      image: "treatment-4.png",
      featured: false,
    },
  ];

  const itemSelected = {
    id: 1,
    title: "Weight loss",
    subtitle: "Personalized Care: GLP-1 Tablets",
    description:
      "Discover the power of Oral Tirzepatide for effective weight management.",
    benefits: [
      "Effortless daily injection — no need for pills",
      "Dual-action: GLP-1 + GIP receptor agonist",
      "Targets hunger, metabolism, and insulin response",
    ],
    price: 299,
    oldPrice: 346,
    buttonPrimary: "Get Started",
    buttonSecondary: "Learn More",
    image: "product.png",
    featured: true,
  };
  return (
    <SectionHelper className="">
      <HeaderSections
        title={"Our leading products leverage GLP-1"}
        text={
          "Our GLP-1 therapies pair proven medication with clinician guidance to support steady appetite control, improved metabolic markers, and sustainable results."
        }
      />

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 items-center max-[770px]:justify-items-normal justify-items-center">
        <article
          onMouseEnter={() => {
            setOnItem(true);
          }}
          onMouseLeave={() => {
            setOnItem(false);
          }}
          className="max-w-[540] max-lg:max-w-full max-[1290px]:max-w-[500px] transition-all max-lg:h-[600px] h-[600px] w-full"
        >
          {/* Image preview */}
          {!onItem ? (
            <>
              {" "}
              <div className="bg-transparent max-w-[540] max-lg:max-w-full   h-full relative shadow-lg rounded-4xl ">
                <Image
                  src={`/images/${itemSelected.image}`}
                  alt={`${itemSelected.title} Image`}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 30vw"
                  className="rounded-xl object-cover"
                />

                <Button
                  aria-label={`See full details of ${itemSelected.subtitle}`}
                  className="absolute bottom-7 right-7 text-sm"
                >
                  See full details
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Item details */}
              <Card className="h-full max-w-[540px] max-lg:max-w-full flex flex-col items-start justify-between   w-full">
                <Pill>{itemSelected.title}</Pill>
                <div className="border-b py-6 border-foreground/20">
                  <h3 className="text-4xl max-lg:text-2xl font-mono font-bold">
                    {itemSelected.subtitle}
                  </h3>
                  <p className="text-lg pt-3">{itemSelected.description}</p>
                </div>

                <ul className="flex flex-col gap-y-2 my-6">
                  {itemSelected.benefits &&
                    itemSelected.benefits.map((b, index) => (
                      <li className="flex items-center gap-x-2.5" key={index}>
                        <CircleCheck color="#D4B66E" size={26} />
                        {b}
                      </li>
                    ))}
                </ul>

                <div>
                  <div className="font-mono my-6 text-2xl">
                    <span
                      className="
                        text-[#D4B66E]
                       font-semibold"
                    >
                      ${itemSelected.price}{" "}
                    </span>{" "}
                    |{" "}
                    <span className="text-lg line-through">
                      {" "}
                      ${itemSelected.oldPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <Button>Get started</Button>

                    <Button variant="underline">Learn more</Button>
                  </div>
                </div>
              </Card>
            </>
          )}
        </article>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 max-lg:max-w-full max-w-[540px]">
          {treatments.map((t) => (
            <Card
              key={t.id}
              className={`flex flex-col gap-y-3 ${
                t.id !== 1 ? "bg-[#D4B66E]! text-white border-[#D4B66E]/20" : ""
              }`}
            >
              <span className="font-light">{t.title}</span>
              <h3 className="font-mono font-bold max-md:text-xl text-2xl">
                {t.subtitle}
              </h3>

              <div className="font-mono text-2xl">
                <span
                  aria-label="Current price"
                  className={`${
                    t.id === 1 ? "text-[#D4B66E]" : ""
                  } font-semibold`}
                >
                  ${t.price}
                </span>{" "}
                |{" "}
                <span
                  aria-label="Original price"
                  className="text-lg line-through"
                >
                  ${t.oldPrice}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionHelper>
  );
};

export default LeadProducts;
