import { Ship, ShieldCheck, Users, Globe2, Award, ChevronRight } from "lucide-react";
import { Language } from "../types";
import { translations } from "../translations";
import { motion } from "motion/react";

interface HeroProps {
  currentLang: Language;
  onCtaClick: (role: 'candidate' | 'employer') => void;
}

export default function Hero({ currentLang, onCtaClick }: HeroProps) {
  const t = translations[currentLang];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#EFF4FF] via-white to-white"
    >
      {/* Background Subtle Geometrics */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 md:opacity-30">
        <svg
          className="absolute right-0 top-0 w-1/2 h-full text-primary"
          viewBox="0 0 100 100"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M50 0 L100 0 L100 100 L0 100 Z"
            fill="currentColor"
            opacity="0.03"
          />
          <circle cx="80" cy="20" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" fill="none" opacity="0.3" />
          <circle cx="80" cy="20" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.2" />
          <line x1="20" y1="10" x2="100" y2="90" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
          <line x1="80" y1="10" x2="80" y2="90" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Micro-badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
            id="hero-regulatory-badge"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.legalStatement}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6 font-sans"
            id="hero-title"
          >
            {t.heroHeadline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
            id="hero-description"
          >
            {t.heroSubheadline}
          </motion.p>

          {/* Action Trigger Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            id="hero-actions"
          >
            {/* Candidate CTA */}
            <button
              onClick={() => onCtaClick("candidate")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-200 flex items-center justify-center gap-2 cursor-pointer"
              id="hero-btn-candidate"
            >
              <span>{t.ctaCandidate}</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Employer CTA */}
            <button
              onClick={() => onCtaClick("employer")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-orange-200 flex items-center justify-center gap-2 cursor-pointer"
              id="hero-btn-employer"
            >
              <span>{t.ctaEmployer}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-100 pt-12"
          id="hero-trust-badges-container"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Badge 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/40 transition-colors" id="badge-item-1">
              <div className="p-3 rounded-xl bg-secondary text-primary shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{t.badgeLicensed}</h3>
                <p className="text-xs text-gray-500 mt-1">{t.badgeLicensedSub}</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/40 transition-colors" id="badge-item-2">
              <div className="p-3 rounded-xl bg-secondary text-primary shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{t.badgePlacements}</h3>
                <p className="text-xs text-gray-500 mt-1">{t.badgePlacementsSub}</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/40 transition-colors" id="badge-item-3">
              <div className="p-3 rounded-xl bg-secondary text-primary shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{t.badgeNetwork}</h3>
                <p className="text-xs text-gray-500 mt-1">{t.badgeNetworkSub}</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/40 transition-colors" id="badge-item-4">
              <div className="p-3 rounded-xl bg-secondary text-primary shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">{t.badgeCertified}</h3>
                <p className="text-xs text-gray-500 mt-1">{t.badgeCertifiedSub}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
