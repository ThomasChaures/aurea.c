"use client";
import Image from "next/image";
import Card from "../ui/Card";
import Pill from "../ui/Pill";
import Button from "../ui/Button";
import { CircleCheck } from "lucide-react";
import { useState } from "react";

const LeadProductPreview = ({ item }: any) => {
  const [onItem, setOnItem] = useState(false);

  return (
    <article
      onMouseEnter={() => setOnItem(true)}
      onMouseLeave={() => setOnItem(false)}
      className="max-w-[540px] h-[600px] w-full transition-all"
    >
      {!onItem ? (
        <div className="bg-transparent h-full relative shadow-lg rounded-4xl">
          <Image
            src={`/images/${item.image}`}
            alt={item.title}
            fill
            className="rounded-xl object-cover"
          />
          <Button className="absolute bottom-7 right-7 text-sm">
            See full details
          </Button>
        </div>
      ) : (
        <Card className="h-full flex flex-col justify-between w-full">
          <Pill>{item.title}</Pill>
          <div className="border-b py-6 border-foreground/20">
            <h3 className="text-4xl font-mono font-bold">{item.subtitle}</h3>
            <p className="text-lg pt-3">{item.description}</p>
          </div>

          <ul className="flex flex-col gap-y-2 my-6">
            {item.benefits.map((b: string, index: number) => (
              <li key={index} className="flex items-center gap-x-2.5">
                <CircleCheck color="#D4B66E" size={26} />
                {b}
              </li>
            ))}
          </ul>

          <div>
            <div className="font-mono my-6 text-2xl">
              <span className="text-[#D4B66E] font-semibold">
                ${item.price}{" "}
              </span>
              | <span className="text-lg line-through">${item.oldPrice}</span>
            </div>

            <div className="flex items-center gap-x-3">
              <Button>Get started</Button>
              <Button variant="underline">Learn more</Button>
            </div>
          </div>
        </Card>
      )}
    </article>
  );
};

export default LeadProductPreview;
