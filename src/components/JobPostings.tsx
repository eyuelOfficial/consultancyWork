import React from "react";
import { Language, Job } from "../types";

interface Props {
  currentLang: Language;
  onApplyClick?: (role?: 'candidate' | 'employer') => void;
}

const jobs: Job[] = [
  {
    id: "j1",
    title: { en: "Housekeeper / Domestic Worker", am: "የቤት ውስጥ ረዳት" },
    description: {
      en: "Responsible for household cleaning, laundry, and light cooking. Prior experience preferred.",
      am: "የቤት ጽዳት፣ ሸክላ እና ቀላል ምግብ ማብሰል። የቀድሞ ልምድ ይፈለጋል።",
    },
    location: "Riyadh, Saudi Arabia",
    employmentType: "full-time",
  },
  {
    id: "j2",
    title: { en: "Childcare / Nanny", am: "የህጻናት እመራ" },
    description: {
      en: "Provide attentive childcare and assistance with daily routines and feeding.",
      am: "ለህጻናት ጥንካሬ ያቀርባሉ እና የዕለታዊ ሥራዎች ድጋፍ ይሰጣሉ።",
    },
    location: "Dubai, UAE",
    employmentType: "full-time",
  },
  {
    id: "j3",
    title: { en: "Cook / Chef Assistant", am: "የምግብ አዘጋጅ" },
    description: {
      en: "Assist with meal preparation, follow dietary requirements and maintain kitchen hygiene.",
      am: "የምግብ አዘጋጅነትን ይረዱ፣ የምግብ መመገቢያን ይከታተላሉ እና የምግብ ክፍል ንጽህና ይጠብቃሉ።",
    },
    location: "Doha, Qatar",
    employmentType: "contract",
  },
];

export default function JobPostings({ currentLang, onApplyClick }: Props) {
  return (
    <section className="py-12 bg-gray-50" id="jobs">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">
            {currentLang === "en" ? "Open Positions" : "የተከፈቱ የስራ መደቦች"}
          </h2>
          <p className="text-gray-600 mt-2">
            {currentLang === "en"
              ? "Browse current job openings and apply through our intake form."
              : "ያሁኑን የስራ ክፍተቶች ይመልከቱ እና በመረጃ እቅድ ይመዝግቡ።"}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-sm rounded-lg p-4">
              <h3 className="font-semibold text-lg">{job.title[currentLang]}</h3>
              <p className="text-sm text-gray-600 mt-2">{job.description[currentLang]}</p>
              <div className="mt-3 text-sm text-gray-700">
                <div>
                  <strong>{currentLang === 'en' ? 'Location:' : 'ቦታ:'}</strong> {job.location}
                </div>
                <div>
                  <strong>{currentLang === 'en' ? 'Type:' : 'የሥራ አይነት:'}</strong> {job.employmentType}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => onApplyClick && onApplyClick('candidate')}
                  className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700"
                >
                  {currentLang === 'en' ? 'Apply' : 'ለመመዝገብ'}
                </button>
                <button
                  onClick={() => navigator.clipboard?.writeText(job.location)}
                  className="text-gray-500 text-sm hover:text-gray-700"
                >
                  {currentLang === 'en' ? 'Copy location' : 'ቦታ ኮፒ ላይ'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
