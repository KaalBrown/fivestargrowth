export type Service = {
  title: string;
  description: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type Testimonial = {
  name: string;
  business: string;
  quote: string;
  rating: number;
};
