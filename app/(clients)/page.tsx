import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import WhyUs from "@/components/sections/WhyUs";
import SectionHelper from "@/components/ui/SectionHelper";
import HeaderSections from "@/components/ui/HeaderSections";
import Card from "@/components/ui/Card";

const Homepage = () => {
  const treatments = [
    {
      id: 1,
      title: "Weight loss",
      subtitle: "Personalized Care: GLP-1 Tablets",
      price: 299,
      oldPrice: 346,
      image: "treatment-1.png", 
      featured: true, 
    },
    {
      id: 2,
      title: "Weight loss",
      subtitle: "Personalized Care: GLP-1 Tablets",
      price: 299,
      oldPrice: 346,
      image: "treatment-2.png",
      featured: false,
    },
    {
      id: 3,
      title: "Weight loss",
      subtitle: "Personalized Care: GLP-1 Tablets",
      price: 299,
      oldPrice: 346,
      image: "treatment-3.png",
      featured: false,
    },
    {
      id: 4,
      title: "Weight loss",
      subtitle: "Personalized Care: GLP-1 Tablets",
      price: 299,
      oldPrice: 346,
      image: "treatment-4.png",
      featured: false,
    },
  ];

  return (
    <>
      {/* {HERO SECTIONS} */}
      <HeroSection />

      {/* {About Us} */}
      <WhyUs />

      {/* {Products} */}

      <SectionHelper className="">
        <HeaderSections
          title={"Our leading products leverage GLP-1"}
          text={
            "Our GLP-1 therapies pair proven medication with clinician guidance to support steady appetite control, improved metabolic markers, and sustainable results."
          }
        />

        <div>
          <div>{/* Item selected */}</div>
          <div className="flex flex-wrap gap-4 max-w-[620px]">
            {/* Items you can select */}

            {treatments &&
              treatments.map((t) => (
                <Card
                  key={t.id} 

                  className={`max-w-[260px] flex flex-col gap-y-3 ${t.id !== 1 ? "bg-[#D4B66E]! text-white border-[#D4B66E]/20" : ""}`}
                >
                  <span className="font-light">{t.title}</span>
                  <p className="font-mono font-semibold text-2xl">
                    {t.subtitle}
                  </p>

                  <div className="font-mono text-2xl">
                    <span className="font-semibold ">${t.price} </span> | <span className="text-lg"> ${t.oldPrice}</span>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </SectionHelper>

      {/* {Steps} */}

      {/* {Guidance} */}

      {/* {Reviews} */}

      {/* {Q&A} */}

      {/* {Footer} */}
    </>
  );
};

export default Homepage;
