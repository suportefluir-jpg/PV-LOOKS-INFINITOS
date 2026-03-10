import { LucideIcon } from 'lucide-react';

export interface Section {
  id: string;
  type: string;
  background?: string;
  title?: string;
  headline?: string;
  subheadline?: string;
  badges?: string[];
  gallery?: string[];
  bullets?: string[];
  footer_text?: string;
  side_image?: string;
  intro?: string;
  subintro?: string;
  quotes?: string[];
  center_visual?: string;
  box_background?: string;
  paragraphs?: string[];
  highlight_cta_text?: string;
  steps?: Step[];
  items_left?: string[];
  items_right?: string[];
  items?: Deliverable[];
  price_items?: PriceItem[];
  total_text?: string;
  left_image?: string;
  installments_text?: string;
  price_main?: string;
  price_cash?: string;
  supporting_lines?: string[];
  button_label?: string;
  button_url?: string;
  urgency?: string;
  cards?: InfoCard[];
  option_1?: Option;
  option_2?: Option;
  closing_text?: string;
  faq_items?: FAQItem[];
}

export interface Step {
  title: string;
  text: string;
  image: string;
}

export interface Deliverable {
  title: string;
  text: string;
  image: string;
}

export interface PriceItem {
  name: string;
  price: string;
}

export interface InfoCard {
  title: string;
  text: string;
  image: string;
}

export interface Option {
  title: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
