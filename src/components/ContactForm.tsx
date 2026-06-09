import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Phone, MapPin, Mail, Clock, ShieldCheck, CheckCircle2, MessageSquare, Landmark } from "lucide-react";
import { Language, ContactFormState } from "../types";
import { translations } from "../translations";

interface ContactFormProps {
  currentLang: Language;
  selectedRole: 'candidate' | 'employer';
  onRoleChange: (role: 'candidate' | 'employer') => void;
}

export default function ContactForm({ currentLang, selectedRole, onRoleChange }: ContactFormProps) {
  const t = translations[currentLang];

  const [formData, setFormData] = useState<ContactFormState>({
    fullName: "",
    phoneNumber: "",
    role: selectedRole,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorWord, setErrorWord] = useState("");

  // Keep local state in sync when prop updates (e.g. from Hero or Nav click)
  useEffect(() => {
    setFormData((prev) => ({ ...prev, role: selectedRole }));
  }, [selectedRole]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleSelect = (role: 'candidate' | 'employer') => {
    onRoleChange(role);
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorWord(currentLang === "en" ? "Full Name is required." : "كامل ስም ያስፈልጋል።");
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorWord(currentLang === "en" ? "Phone Number is required." : "የስልክ ቁጥር ያስፈልጋል።");
      return;
    }

    setIsSubmitting(true);
    setErrorWord("");

    // Simulate reliable API post
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clean form
      setFormData({
        fullName: "",
        phoneNumber: "",
        role: "candidate",
        message: ""
      });
    }, 1200);
  };

  // Compose dynamic WhatsApp click url
  const initiateWhatsApp = () => {
    const defaultText = currentLang === "en"
      ? `Hello Blue Employment Consultancy! I am interested in your consulting services as an ${formData.role === "candidate" ? "Overseas Candidate looking for work" : "Employer looking to hire certified domestic workers"}. Please guide me.`
      : `ጤና ይስጥልኝ የኢትዮ-ሊንክ አማካሪ አገልግሎት! እንደ ${formData.role === "candidate" ? "ባህር ማዶ ሥራ ፈላጊ ባለሙያ" : "ቀጣሪ የቤት ረዳት ሰራተኛ ለመቅጠር"} መረጃ ፈልጌ ነበር። እባክዎ ያግዙኝ።`;

    const encodedText = encodeURIComponent(defaultText);
    const whatsappUrl = `https://wa.me/251911234567?text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-sans">
            {t.contactTitle}
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto my-4 rounded-full" />
          <p className="text-base text-gray-600">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Coordinates & Licensing Details */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-panel">
            {/* Headquarters Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 font-sans border-b border-gray-100 pb-4">
                {t.officeTitle}
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex gap-4 items-start" id="coord-address">
                  <div className="p-2.5 rounded-xl bg-secondary text-primary shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 leading-relaxed font-sans">
                      {t.officeLocation}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start" id="coord-phone">
                  <div className="p-2.5 rounded-xl bg-secondary text-primary shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 font-sans">
                      {t.officePhone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start" id="coord-email">
                  <div className="p-2.5 rounded-xl bg-secondary text-primary shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-sans hover:text-primary transition-colors">
                      {t.officeEmail}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex gap-4 items-start" id="coord-hours">
                  <div className="p-2.5 rounded-xl bg-secondary text-primary shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      {t.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Green Brand WhatsApp Button */}
              <div className="pt-2 border-t border-gray-100">
                <button
                  onClick={initiateWhatsApp}
                  className="w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="btn-whatsapp-chat"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>{t.whatsappBtn}</span>
                </button>
              </div>
            </div>

            {/* Compliance & License Certificate Box */}
            <div className="bg-[#EFF4FF] rounded-xl p-6.5 border border-primary/20 flex gap-4 text-primary relative overflow-hidden">
              <div className="absolute -bottom-6 -right-6 text-primary/5 pointer-events-none">
                <Landmark className="w-24 h-24" />
              </div>

              <div className="p-2.5 rounded-xl bg-white text-primary shrink-0 h-fit">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm tracking-wide font-sans leading-none">
                  {t.badgeLicensed}
                </h4>
                <p className="text-xs text-blue-900/80 leading-relaxed font-mono">
                  {t.licenseNo}
                </p>
                <p className="text-[10px] text-primary-hover font-sans pt-1 font-medium">
                  {currentLang === "en"
                    ? "Verified for overseas employee support worldwide."
                    : "ለሀገር ውጭ የጉልበት ምዝገባ እና ክትትል የተዘጋጀ ፈቃድ።"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-10" id="contact-form-panel">
            {isSubmitted ? (
              /* Success Screen */
              <div className="text-center py-12 px-6" id="form-submit-success">
                <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 mb-6 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-sans">
                  {t.successTitle}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-md mx-auto mb-8 font-sans">
                  {t.successMessage}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs border border-transparent transition-all cursor-pointer"
                  id="success-dismiss-btn"
                >
                  {t.close}
                </button>
              </div>
            ) : (
              /* Core Form */
              <form onSubmit={handleSubmit} className="space-y-6" id="form-element">
                {errorWord && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-semibold flex items-center gap-2 border border-red-100 font-sans" id="form-error-msg">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    {errorWord}
                  </div>
                )}

                {/* Role Switcher tabs */}
                <div>
                  <label className="block text-sm font-bold text-gray-800 mb-3.5 font-sans">
                    {t.formRoleLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-3" id="role-selector-container">
                    {/* Candidate Select */}
                    <button
                      type="button"
                      onClick={() => handleRoleSelect("candidate")}
                      className={`py-3.5 px-4 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${
                        formData.role === "candidate"
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                      }`}
                      id="opt-role-candidate"
                    >
                      {currentLang === "en" ? "Overseas Candidate" : "እንደ ሥራ ፈላጊ"}
                    </button>

                    {/* Employer Select */}
                    <button
                      type="button"
                      onClick={() => handleRoleSelect("employer")}
                      className={`py-3.5 px-4 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${
                        formData.role === "employer"
                          ? "bg-accent hover:bg-accent-hover text-white border-accent shadow-sm"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                      }`}
                      id="opt-role-employer"
                    >
                      {currentLang === "en" ? "Global Employer" : "እንደ ቀጣሪ"}
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div id="field-wrapper-name">
                  <label htmlFor="fullName" className="block text-sm font-bold text-gray-800 mb-2 font-sans">
                    {t.formNameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder={currentLang === "en" ? "e.g. Hana Bekele" : "ለምሳሌ፡ ሀና በቀለ"}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 outline-none text-sm transition-all text-gray-800"
                    required
                  />
                </div>

                {/* Phone */}
                <div id="field-wrapper-phone">
                  <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-800 mb-2 font-sans">
                    {t.formPhoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder={currentLang === "en" ? "e.g. +251 911 234 567" : "ለምሳሌ፡ +251 911 234 567"}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 outline-none text-sm transition-all text-gray-800"
                    required
                  />
                </div>

                {/* Message */}
                <div id="field-wrapper-msg">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2 font-sans">
                    {t.formMessageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={
                      formData.role === "candidate"
                        ? currentLang === "en"
                          ? "Which country are you interested in? Do you have past experience or training?"
                          : "የትኛውን ሀገር መሄድ ይወዳሉ? የቀድሞ የቤት ውስጥ ሥራ ልምድ ወይም ስልጠና አለዎት?"
                        : currentLang === "en"
                        ? "What staffing specifications are you looking for? (e.g., Arabic-speaking chef, infant maid)"
                        : "የቤት ሰራተኛ ፍላጎትዎ ምን ዓይነት ነው? (ለምሳሌ፥ አረብኛ ተናጋሪ ምግብ አብሳይ፣ የህጻናት ሞግዚት የቀጣሪ ፍላጎት)"
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-50/50 outline-none text-sm transition-all text-gray-800 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-full text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    formData.role === "candidate"
                      ? "bg-primary hover:bg-primary-hover shadow-xl shadow-blue-200 active:translate-y-0.5"
                      : "bg-accent hover:bg-accent-hover shadow-xl shadow-orange-200 active:translate-y-0.5"
                  } ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                  id="btn-form-submit"
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>{isSubmitting ? t.loading : t.formSubmit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
