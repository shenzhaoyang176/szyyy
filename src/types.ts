export type PersonalityId = 'sofa' | 'nightstand' | 'floor_lamp' | 'folding_chair' | 'wardrobe' | 'drawer';

export interface Personality {
  id: PersonalityId;
  name: string;
  titleName: string;
  englishTitle: string;
  themeColor: string; // hex or tailwind bg class
  accentColor: string;
  textColor: string;
  paperBg: string;
  keywords: string[];
  descriptionLines: string[];
  quote: string;
  matchRate: string;
  compatibilityBest: string;
  compatibilityWorst: string;
  badgeCode: string;
}

export interface Option {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
  personality: PersonalityId;
  colorTag: 'yellow' | 'green' | 'blue' | 'red';
}

export interface Question {
  id: number;
  code: string; // "Q01", "Q02", etc.
  questionText: string;
  subtitle?: string;
  options: Option[];
}
