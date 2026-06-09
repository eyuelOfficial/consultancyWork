import { Globe, ShieldCheck, Mail, Phone, Landmark } from "lucide-react";
import { Language } from "../types";
import { translations } from "../translations";

interface FooterProps {
  currentLang: Language;
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/60">
          {/* Logo & Tagline column */}
          <div className="md:col-span-5 space-y-5" id="footer-branding">
            <div 
              className="flex items-center gap-2 cursor-pointer group w-fit"
              onClick={() => handleLinkClick("hero")}
              id="footer-logo"
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white transition-all group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                  <path d="M14 6c1.5-1 3-1.5 5-1-1 2-1.5 3.5-1 5" strokeWidth="2" stroke="currentColor" fill="none" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block leading-none">
                  {t.brandName}
                </span>
                <span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase block mt-1">
                  {t.brandSubtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t.footerTagline}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4" id="footer-links">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footerLinks}
            </h4>
            <ul className="space-y-3 test-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("hero")}
                  className="hover:text-white transition-colors cursor-pointer text-left text-sm"
                  id="footer-nav-home"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("about")}
                  className="hover:text-white transition-colors cursor-pointer text-left text-sm"
                  id="footer-nav-about"
                >
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("how-it-works")}
                  className="hover:text-white transition-colors cursor-pointer text-left text-sm"
                  id="footer-nav-how"
                >
                  {t.navHowItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("services")}
                  className="hover:text-white transition-colors cursor-pointer text-left text-sm"
                  id="footer-nav-services"
                >
                  {t.navServices}
                </button>
              </li>
            </ul>
          </div>

          {/* Licensing Column */}
          <div className="md:col-span-4 space-y-4 text-sm" id="footer-licensing">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Regulatory Compliance
            </h4>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-800 flex gap-3">
              <Landmark className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-300">
                  Licensed by Ministry of Labour and Skills
                </p>
                <p className="text-[11px] text-gray-500 font-mono">
                  {t.licenseNo}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Approved recruitment partner of the Federal Democratic Republic of Ethiopia.
            </p>
          </div>
        </div>

        {/* Legal & Copy line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500 text-center sm:text-left">
            {t.footerCopyright}
          </p>
          <div className="flex gap-4 text-gray-500">
            <a href="#navbar" className="hover:text-white transition-colors">
              {t.footerPolicy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
