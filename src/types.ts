export type Language = 'en' | 'am';

export interface Testimonial {
  id: string;
  initials: string;
  quote: {
    en: string;
    am: string;
  };
  name: {
    en: string;
    am: string;
  };
  role: {
    en: string;
    am: string;
  };
  country: {
    en: string;
    am: string;
  };
}

export interface Destination {
  id: string;
  country: {
    en: string;
    am: string;
  };
  flag: string;
  agencyStatus: {
    en: string;
    am: string;
  };
}

export interface Step {
  number: number;
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
}

export interface ContactFormState {
  fullName: string;
  phoneNumber: string;
  role: 'candidate' | 'employer';
  message: string;
}

export interface Job {
  id: string;
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  location: string;
  employmentType: 'full-time' | 'part-time' | 'contract' | 'temporary';
}
