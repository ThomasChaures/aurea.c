
import HeaderSections from "../ui/HeaderSections";
import SectionHelper from "../ui/SectionHelper";
import Image from "next/image";
import Card from "../ui/Card";

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: "Complete your medical history",
      description:
        "Tell us about your background so our team can evaluate your case.",
    },
    {
      id: 2,
      title: "Schedule a video visit",
      description:
        "Meet with a licensed medical professional, fully online on your schedule.",
    },
    {
      id: 3,
      title: "Receive your personalized treatment",
      description:
        "Get your medication delivered to your home and start your program.",
    },
  ];
  return (
    <SectionHelper className="pb-30 mb-0! max-h-full relative h-150 px-0 overflow-hidden">
      <HeaderSections
        title="Feeling better has never been this easy."
        text="Our care uses GLP-1 to support metabolic health and sustainable weight management through clinician-designed formulas targeting appetite, metabolism, and glucose control."
      />{" "}
      <div className="w-[1300px] absolute -bottom-44 left-0 z-10 flex justify-between">
        <div className="relative h-[600px] w-[400px]">
          <Image
            src="/images/c-2.png"
            alt="Product image"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative h-[600px] transform translate-y-10 w-[380px]">
          <Image
            src="/images/c-1.png"
            alt="Product image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative max-w-[550px] mx-auto h-70 overflow-hidden">
        <div className="absolute bg-linear-to-t w-full top-0 left-0 h-16 z-2 to-background from-transparent">
          <div className="absolute bg-linear-to-b w-full -bottom-60 left-0 h-20 z-2 to-background from-trasnparent"></div>
        </div>

        <div className="flex flex-col items-center z-0 w-full gap-y-5">
          {steps &&
            steps.map((s) => (
              <>
                <Card
                  className={`transform -translate-y-20  border-0 shadow-lg p-5! ${
                    s.id !== 2 ? "bg-[#D4B66E]! text-white!" : ""
                  }`}
                >
                  <p
                    className={`text-sm  ${
                      s.id !== 2 ? " text-white" : "text-gray-500"
                    }`}
                  >
                    Step -{s.id}
                  </p>
                  <h3
                    className={`text-lg font-semibold ${
                      s.id !== 2 ? " text-white" : " text-[#4d633a]"
                    } my-0.5 mb-1`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`${
                      s.id !== 2 ? "text-white" : "text-gray-600 "
                    }`}
                  >
                    {s.description}
                  </p>
                </Card>
              </>
            ))}
        </div>
      </div>
    </SectionHelper>
  );
};

export default Steps;
