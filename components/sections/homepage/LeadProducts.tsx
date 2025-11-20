import SectionHelper from "@/components/ui/SectionHelper";
import HeaderSections from "@/components/ui/HeaderSections";
import Card from "@/components/ui/Card";
import LeadProductPreview from "@/components/organism/LeadProductPreview";

const LeadProducts = () => {
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
    <SectionHelper>
      <HeaderSections
        title="Our leading products leverage GLP-1"
        text="Our GLP-1 therapies pair proven medication with clinician guidance to support steady appetite control, improved metabolic markers, and sustainable results."
      />

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 items-center justify-items-center">
        {/* PRODUCT CLIENT */}
        <LeadProductPreview item={itemSelected} />

        {/* PRODUCT LIST SERVER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[540px]">
          {treatments.map((t) => (
            <Card
              key={t.id}
              className={`flex flex-col gap-y-3 ${
                t.id !== 1 ? "bg-[#D4B66E]! text-white" : ""
              }`}
            >
              <span className="font-light">{t.title}</span>
              <h3 className="font-mono font-bold text-2xl">{t.subtitle}</h3>

              <div className="font-mono text-2xl">
                <span
                  className={`${
                    t.id === 1 ? "text-[#D4B66E]" : ""
                  } font-semibold`}
                >
                  ${t.price}
                </span>{" "}
                | <span className="text-lg line-through">${t.oldPrice}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionHelper>
  );
};

export default LeadProducts;
