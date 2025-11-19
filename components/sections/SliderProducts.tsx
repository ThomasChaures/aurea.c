import SectionHelper from "../ui/SectionHelper";
import InnerBar from "../ui/InnerBar";
import Image from "next/image";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { ChevronRight, CircleCheck, ChevronLeft } from "lucide-react";
import { useState } from "react";
const SliderProducts = () => {
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
      subtitle: "Personalized Care: GLP-2 Tablets",
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
      subtitle: "Personalized Care: GLP-3 Tablets",
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
      subtitle: "Personalized Care: GLP-4 Tablets",
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

  const [selectedIndex, setSelectedIndex] = useState(0);
  const total = treatments.length;

  const mod = (n: number) => (n + total) % total;

  const center = treatments[selectedIndex];
  const left = treatments[mod(selectedIndex - 1)];
  const left2 = treatments[mod(selectedIndex - 2)];
  const right = treatments[mod(selectedIndex + 1)];
  const right2 = treatments[mod(selectedIndex + 2)];

  return (
    <>
      <SectionHelper className="bg-[#21251A] w-full! max-w-full">
        <div className="max-w-7xl flex items-center flex-col mx-auto py-20">
          <InnerBar className2="px-2 py-2" className="mb-6">
            <ul className="flex items-center">
              <li className="w-43 text-center py-3.5 bg-white  text-black rounded-full  text-lg">
                Weight loss
              </li>
              <li className="w-43 text-center py-3.5 text-white font-light text-lg">
                Hair Care
              </li>
              <li className="w-43 text-center py-3.5 text-white font-light text-lg">
                Skin Care
              </li>
              <li className="w-43 text-center py-3.5 text-white font-light text-lg">
                Harmone
              </li>
              <li className="w-43 text-center py-3.5 text-white font-light text-lg">
                Wellness
              </li>
            </ul>
          </InnerBar>

          {/* Product */}

          <div className="my-8  gap-x-6  flex w-full">
            <div className="bg-transparent  w-full max-w-2/5  relative shadow-lg rounded-3xl overflow-hidden">
              <Image
                src="/images/product.png"
                alt="Product Image"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <Card className=" flex-col flex justify-between h-[450px] w-3/3">
              <div className="w-full">
                <div className="border-b py-6 border-foreground/20">
                  <p className="text-3xl font-mono font-bold">
                    {center.subtitle}
                  </p>
                  <p className="text-base pt-3">{center.description}</p>
                </div>

                <ul className="flex flex-col gap-y-2 my-6">
                  {center.benefits &&
                    center.benefits.map((b, index) => (
                      <li className="flex items-center gap-x-2.5" key={index}>
                        <CircleCheck color="#D4B66E" size={26} />
                        {b}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="font-mono  text-2xl">
                  <span
                    className="
                        text-[#D4B66E]
                       font-semibold"
                  >
                    ${center.price}{" "}
                  </span>{" "}
                  |{" "}
                  <span className="text-lg line-through">
                    {" "}
                    ${center.oldPrice}
                  </span>
                </div>

                <div className="flex items-center gap-x-3">
                  <Button>Get started</Button>

                  <Button variant="underline">Learn more</Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="caroussel relative mt-6">
            <div className="absolute inset-y-0 left-0 w-18 bg-linear-to-r  h-[200px] from-[#21251A] from-20% to-transparent z-20"></div>
            <div className="absolute inset-y-0 left-0 w-18 bg-linear-to-r  h-[200px] from-[#21251A] from-20% to-transparent z-20">
              <div
                onClick={() => setSelectedIndex(mod(selectedIndex - 1))}
                className="bg-gray-200/20 h-20 w-20 transform -translate-x-15 translate-y-10  flex items-center justify-center rounded-full border  border-white"
              >
                <ChevronLeft color="white" size={36} />
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 w-18 bg-linear-to-l h-[200px]  from-[#21251A] from-20%  to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-18 bg-linear-to-l h-[200px]  from-[#21251A] from-20%  to-transparent z-20">
              <div
                onClick={() => setSelectedIndex(mod(selectedIndex + 1))}
                className="bg-gray-200/20 h-20 w-20 flex items-center transform translate-y-10 translate-x-15 justify-center rounded-full border border-white"
              >
                <ChevronRight color="white" size={36} />
              </div>
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
      </SectionHelper>
    </>
  );
};

export default SliderProducts;
