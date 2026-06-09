import { useState } from "react";
import { Language } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [selectedRole, setSelectedRole] = useState<'candidate' | 'employer'>("candidate");

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === "en" ? "am" : "en"));
  };

  // Triggers smooth scrolling to contact intake form and presets chosen role
  const handleScrollToContact = (role?: 'candidate' | 'employer') => {
    if (role) {
      setSelectedRole(role);
    }
    
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased font-sans select-none overflow-x-hidden">
      {/* 1. Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageToggle={toggleLanguage}
        onApplyClick={handleScrollToContact}
      />

      {/* 2. Hero Section */}
      <Hero
        currentLang={currentLang}
        onCtaClick={handleScrollToContact}
      />

      {/* 3. How It Works Section */}
      <HowItWorks currentLang={currentLang} />

      {/* 4. Services Section */}
      <Services currentLang={currentLang} />

      {/* 5. Destination Section */}
      <Destinations currentLang={currentLang} />

      {/* 6. Testimonials Section */}
      <Testimonials currentLang={currentLang} />

      {/* 7. Contact Info & Intake Forms */}
      <ContactForm
        currentLang={currentLang}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
      />

      {/* 8. Footer Block */}
      <Footer currentLang={currentLang} />
    </div>
  );
}
