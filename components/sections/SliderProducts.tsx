import SectionHelper from "../ui/SectionHelper";
import InnerBar from "../ui/InnerBar";
import Image from "next/image";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { CircleCheck } from "lucide-react";
const SliderProducts = () => {
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
    <>
      <SectionHelper className="bg-[#21251A] w-full! max-w-full">
        <div className="max-w-7xl flex items-center flex-col mx-auto p-20">
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
                    {itemSelected.subtitle}
                  </p>
                  <p className="text-base pt-3">{itemSelected.description}</p>
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
              </div>

              <div className="flex items-center justify-between">
                <div className="font-mono  text-2xl">
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
          </div>

          <div className="caroussel mt-6">
            <div className="carousel-left">
              <div>
                <div>
                  <p className="text-lg font-light mb-3">
                    {itemSelected.subtitle}
                  </p>
                  <span className="text-2xl font-mono font-light">
                    ${itemSelected.price}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-light mb-3">
                    {itemSelected.subtitle}
                  </p>
                  <span className="text-2xl font-mono font-light">
                    ${itemSelected.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="caroussel-selected text-white">
              <p className="text-lg font-semibold mb-3">
                {itemSelected.subtitle}
              </p>
              <span className="text-2xl font-mono font-semibold">
                ${itemSelected.price}
              </span>
            </div>
            <div className="carousel-right">
              <div>
                <div>
                  <p className="text-lg mb-3">{itemSelected.subtitle}</p>
                  <span className="text-2xl font-mono font-light">
                    ${itemSelected.price}
                  </span>
                </div>
                <div>
                  <p className="text-lg  mb-3">{itemSelected.subtitle}</p>
                  <span className="text-2xl font-mono font-light">
                    ${itemSelected.price}
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
