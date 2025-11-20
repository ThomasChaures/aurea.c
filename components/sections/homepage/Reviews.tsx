import SectionHelper from "../../ui/SectionHelper";
import HeaderSections from "../../ui/HeaderSections";
import ReviewsSlider from "@/components/organism/ReviewSlider";

const reviews = [
  {
    id: 1,
    name: "Amanda",
    rating: 5,
    text: "“Aurea.Cure made the process simple and clear. For the first time, I understood what was affecting my weight and how to improve it safely.”",
  },
  {
    id: 2,
    name: "Daniel",
    rating: 4,
    text: "“The guidance felt personal and supportive. I wasn’t just handed medication, I got real answers and a plan that finally made sense.”",
  },
  {
    id: 3,
    name: "Sofia",
    rating: 5,
    text: "“I was tired of generic advice and guesswork. Aurea.Cure gave me clarity, structure, and a treatment that genuinely fits my lifestyle.”",
  },
  {
    id: 4,
    name: "Lucas",
    rating: 5,
    text: "“After years of trying everything, this was the first time it finally clicked. Real guidance and real results.”",
  },
  {
    id: 5,
    name: "Emily",
    rating: 4,
    text: "“Fast onboarding, professional team, and medication that works. I’m feeling like myself again.”",
  },
  {
    id: 6,
    name: "Olivia",
    rating: 5,
    text: "“Every step felt supported. I wasn’t alone trying to figure things out. I recommend it 100%.”",
  },
];

const Reviews = () => {
  return (
    <SectionHelper className="my-20 max-lg:mb-0!">
      <HeaderSections
        title="What others say about us"
        text="Our treatments support metabolic health and sustainable weight management through clinician-designed formulas tailored for appetite, metabolism, and glucose control."
      />
      
      <ReviewsSlider reviews={reviews} />
    </SectionHelper>
  );
};

export default Reviews;
