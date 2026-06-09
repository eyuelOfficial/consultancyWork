import { UserPlus, ClipboardCheck, FileSignature, Plane } from "lucide-react";
import { Language } from "../types";
import { translations } from "../translations";

interface HowItWorksProps {
  currentLang: Language;
}

export default function HowItWorks({ currentLang }: HowItWorksProps) {
  const t = translations[currentLang];

  const steps = [
    {
      number: 1,
      icon: <UserPlus className="w-6 h-6 text-primary" />,
      title: t.step1Title,
      description: t.step1Desc,
    },
    {
      number: 2,
      icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
      title: t.step2Title,
      description: t.step2Desc,
    },
    {
      number: 3,
      icon: <FileSignature className="w-6 h-6 text-primary" />,
      title: t.step3Title,
      description: t.step3Desc,
    },
    {
      number: 4,
      icon: <Plane className="w-6 h-6 text-primary" />,
      title: t.step4Title,
      description: t.step4Desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans">
            {t.howItWorksTitle}
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto my-4 rounded-full" />
          <p className="text-base text-gray-600">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* Steps Grid / Horizon Flow */}
        <div className="relative mt-8">
          {/* Desktop connecting connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-12 z-0 max-w-5xl mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white p-6 rounded-xl flex flex-col items-center text-center shadow-md relative group transition-all hover:scale-[1.02]"
                id={`how-it-works-step-${step.number}`}
              >
                {/* Micro numerical design badge */}
                <div className="absolute top-4 right-4 text-xs font-bold text-primary/30 font-mono">
                  0{step.number}
                </div>

                {/* Animated Ring Around Icon */}
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 border-2 border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-sans group-hover:text-primary transition-colors">
                  {step.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-gray-100 my-2 group-hover:bg-primary/30 transition-all" />

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
