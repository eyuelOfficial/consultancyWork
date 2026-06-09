import { Globe, Users, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Language } from "../types";
import { translations } from "../translations";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentLang: Language;
  onLanguageToggle: () => void;
  onApplyClick: (role?: 'candidate' | 'employer') => void;
}

export default function Navbar({ currentLang, onLanguageToggle, onApplyClick }: NavbarProps) {
  const t = translations[currentLang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
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

  const navItems = [
    { label: t.navHome, id: "hero" },
    { label: t.navAbout, id: "about" },
    { label: t.navHowItWorks, id: "how-it-works" },
    { label: t.navServices, id: "services" },
    { label: t.navContact, id: "contact" }
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleLinkClick("hero")}
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white transition-all group-hover:scale-105">
              {/* Custom hybrid dove & globe icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
                {/* Dove beak & leaf accent */}
                <path d="M14 6c1.5-1 3-1.5 5-1-1 2-1.5 3.5-1 5" strokeWidth="2" stroke="currentColor" fill="none" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-primary tracking-tight block leading-none">
                {t.brandName}
              </span>
              <span className="text-xs text-gray-500 font-mono tracking-wider uppercase block mt-0.5">
                {t.brandSubtitle}
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-gray-600 hover:text-primary font-medium text-sm transition-colors cursor-pointer relative py-1 group"
                id={`nav-link-${item.id}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-secondary text-primary font-semibold text-xs border border-blue-100 transition-colors cursor-pointer"
              aria-label="Toggle language"
              id="lang-toggle-desktop"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span>{currentLang === "en" ? "አማርኛ" : "English"}</span>
            </button>

            {/* CTA Button */}
            <button
              onClick={() => onApplyClick()}
              className="px-6 py-2 rounded-full bg-accent hover:bg-accent-hover text-white font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-200 inline-flex items-center gap-1.5 cursor-pointer"
              id="nav-apply-now"
            >
              {t.applyNow}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            {/* Small screen Language toggle */}
            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-secondary text-primary font-bold text-xs border border-blue-100 cursor-pointer"
              id="lang-toggle-mobile"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang === "en" ? "አማ" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 cursor-pointer"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            id="mobile-menu-panel"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="block w-full text-left px-3 py-2.5 rounded-lg text-gray-700 hover:bg-secondary hover:text-primary font-medium text-base transition-colors cursor-pointer"
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onApplyClick();
                  }}
                  className="w-full justify-center px-4 py-3 rounded-full bg-accent hover:bg-accent-hover text-white font-semibold text-center block text-sm transition-colors cursor-pointer"
                  id="mobile-nav-apply-now"
                >
                  {t.applyNow}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
