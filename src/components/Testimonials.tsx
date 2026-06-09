import { Quote } from "lucide-react";
import { Language } from "../types";
import { translations } from "../translations";

interface TestimonialsProps {
  currentLang: Language;
}

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const t = translations[currentLang];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans">
            {t.testimonialsTitle}
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto my-4 rounded-full" />
          <p className="text-base text-gray-600">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Quotes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between transition-all hover:shadow-lg hover:-translate-y-1 relative group"
              id={`testimonial-card-${item.id}`}
            >
              {/* Giant quote mark element absolute background */}
              <div className="absolute top-6 right-6 text-gray-100 group-hover:text-primary/10 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 rotate-180 transform" />
              </div>

              {/* Quote Content text */}
              <div className="mb-6 relative z-10">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed font-serif italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Card detail */}
              <div className="flex items-center gap-4 relative z-10 border-t border-gray-50 pt-4 mt-auto">
                {/* Initials Avatar ring */}
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0 ${
                    item.initials === "HB"
                      ? "bg-primary"
                      : item.initials === "FS"
                      ? "bg-accent"
                      : "bg-blue-800"
                  }`}
                >
                  {item.initials}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base font-sans leading-none">
                    {item.name}
                  </h4>
                  <p className="text-xs text-primary font-semibold mt-1.5 font-sans leading-none">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-gray-400 font-mono mt-1 uppercase tracking-wider block">
                    {item.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
