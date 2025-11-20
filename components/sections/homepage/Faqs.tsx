import Image from "next/image";
import SectionHelper from "../../ui/SectionHelper";
import FAQItem from "@/components/organism/FAQItem";

const faqs = [ { id: 1, question: "How does the process work?", answer: "You choose your category, complete a short intake, and get matched with the right treatment plan. Everything happens online, so it fits easily into your schedule.", }, { id: 2, question: "What makes your treatments different?", answer: "Our treatments are personalized, science-backed, and designed to target the root causes of your concerns instead of just the symptoms.", }, { id: 3, question: "How long does it take to see results?", answer: "Most members begin noticing improvements within a few weeks, with full benefits developing over the following months depending on their category.", }, { id: 4, question: "Do I need an in-person appointment?", answer: "No. The entire process is virtual. You’ll complete your evaluation and follow-ups online with licensed professionals.", }, { id: 5, question: "Is this right for beginners?", answer: "Yes. Our plans are designed to work for beginners as well as individuals with prior experience. Everything is simplified and guided step-by-step.", }, { id: 6, question: "How do I know which category fits my needs?", answer: "You’ll receive a guided intake that helps determine the ideal category based on your goals, symptoms, and health profile.", }, ];

const Faqs = () => {
  return (
    <SectionHelper className="flex max-lg:flex-col justify-between">
      <h2 className="sr-only">Frequently Asked Questions</h2>

      <div className="relative max-lg:hidden w-[624px] h-[624px]">
        <Image src="/images/qa.png" alt="Products image" fill className="object-contain" />
      </div>

      <div className="flex flex-col gap-y-3 w-[480px] max-lg:w-full">
        {faqs.map((item) => (
          <FAQItem key={item.id} {...item} />
        ))}
      </div>
    </SectionHelper>
  );
};

export default Faqs;
