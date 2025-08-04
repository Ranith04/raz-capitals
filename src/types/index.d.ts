export interface PricingPlan {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface MobileMockup {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
} 