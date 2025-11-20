import SectionHelper from "../../ui/SectionHelper";
import HeaderSections from "../../ui/HeaderSections";
import ProductsInteractive from "@/components/organism/ProductsInteractive";

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

const SliderProducts = () => {
  return (
    <SectionHelper className="bg-[#21251A] w-full! max-w-full">
      <h2 className="sr-only">Products</h2>

      {/* Slider interactivo */}
      <ProductsInteractive treatments={treatments} />
    </SectionHelper>
  );
};

export default SliderProducts;
