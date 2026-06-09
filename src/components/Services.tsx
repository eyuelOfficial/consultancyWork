import { CheckCircle2, ShieldCheck, HelpCircle, Users, Briefcase } from "lucide-react";
import { Language } from "../types";
import { translations } from "../translations";

interface ServicesProps {
  currentLang: Language;
}

export default function Services({ currentLang }: ServicesProps) {
  const t = translations[currentLang];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans">
            {t.servicesTitle}
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto my-4 rounded-full" />
          <p className="text-base text-gray-600">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Dual Cards Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Card 1: For candidates */}
          <div
            className="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-10 flex flex-col justify-between transition-all hover:shadow-lg relative overflow-hidden"
            id="services-candidates-card"
          >
            {/* Corner Decorative Aura */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-sans">
                    {t.forCandidates}
                  </h3>
                  <p className="text-xs text-primary font-semibold mt-0.5 uppercase tracking-wide">
                    {t.forCandidatesSub}
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-100 my-6" />

              {/* Benefits Rows */}
              <div className="space-y-6">
                {t.candidateBenefits.map((b, idx) => (
                  <div key={idx} className="flex gap-4" id={`candidate-benefit-${idx}`}>
                    <div className="pt-1.5">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1 font-sans">
                        {b.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-sans">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: For employers */}
          <div
            className="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-10 flex flex-col justify-between transition-all hover:shadow-lg relative overflow-hidden"
            id="services-employers-card"
          >
            {/* Corner Decorative Aura */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-sans">
                    {t.forEmployers}
                  </h3>
                  <p className="text-xs text-accent-hover font-semibold mt-0.5 uppercase tracking-wide">
                    {t.forEmployersSub}
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-100 my-6" />

              {/* Benefits Rows */}
              <div className="space-y-6">
                {t.employerBenefits.map((b, idx) => (
                  <div key={idx} className="flex gap-4" id={`employer-benefit-${idx}`}>
                    <div className="pt-1.5">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1 font-sans">
                        {b.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-sans">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
