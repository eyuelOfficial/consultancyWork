import { Check, Globe } from "lucide-react";
import { Language } from "../types";
import { translations } from "../translations";

interface DestinationsProps {
  currentLang: Language;
}

export default function Destinations({ currentLang }: DestinationsProps) {
  const t = translations[currentLang];

  const countries = [
    { name: "Saudi Arabia", amName: "ሳዑዲ ዓረቢያ", flag: "🇸🇦", activeNum: "Active", isPrimary: true },
    { name: "United Arab Emirates", amName: "ተባበሩት አረብ ኤምሬቶች", flag: "🇦🇪", activeNum: "Active", isPrimary: true },
    { name: "Qatar", amName: "ኳታር", flag: "🇶🇦", activeNum: "Active", isPrimary: true },
    { name: "Kuwait", amName: "ኩዌት", flag: "🇰🇼", activeNum: "Active", isPrimary: true },
    { name: "Bahrain", amName: "ባህሬን", flag: "🇧🇭", activeNum: "Active", isPrimary: true },
    { name: "Other Countries", amName: "ሌሎች ሀገራት", flag: "🌍", activeNum: "Inquire", isPrimary: false },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 border-y border-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans">
            {t.destinationsTitle}
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto my-4 rounded-full" />
          <p className="text-base text-gray-600">
            {t.destinationsSubtitle}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {countries.map((c, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-blue-100/50 shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-between text-center relative overflow-hidden group hover:scale-[1.03]"
              id={`destination-card-${idx}`}
            >
              {/* Flag Emoji with Hover Ring */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {c.flag}
              </div>

              {/* Country Name */}
              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight font-sans">
                  {currentLang === "en" ? c.name : c.amName}
                </h3>
              </div>

              {/* Status Badge */}
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  c.isPrimary
                    ? "bg-primary/10 text-primary border border-primary/10"
                    : "bg-gray-100 text-gray-600 border border-gray-200"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${c.isPrimary ? "bg-primary animate-pulse" : "bg-gray-400"}`} />
                {t.badgeActive}
              </span>
            </div>
          ))}
        </div>

        {/* Regulatory Bilateral Info Area */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
              <Globe className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base font-sans">
                {t.cooperativeAgreements}
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                {currentLang === "en"
                  ? "Sourced in strict obedience to the proclamations ratified by the Government of Ethiopia regarding oversea employments."
                  : "በፌደራል የውጭ ሀገር የስራ ስምሪት አዋጆችና ህጎች መሰረት ሙሉ በሙሉ ተፈፃሚ የሚደረግ አሰራር።"}
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2 font-semibold text-xs text-primary bg-secondary px-4 py-2 rounded-full border border-blue-100">
            <Check className="w-3.5 h-3.5 text-primary" />
            <span>100% Secure Pathways</span>
          </div>
        </div>
      </div>
    </section>
  );
}
