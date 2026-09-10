export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SupportOption {
  title: string;
  description: string;
  icon: string;
  cta: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}
