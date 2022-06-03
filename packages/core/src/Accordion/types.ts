import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface AccordionData {
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  data: AccordionData[];
  mainStylings?: TailwindStylings;
  titleStylings?: TailwindStylings;
  titleActiveStylings?: TailwindStylings;
  childStylings?: TailwindStylings;
  flush?: boolean;
}

export interface AccordionEntryProps {
  data: AccordionData;
  titleStylings?: TailwindStylings;
  titleActiveStylings?: TailwindStylings;
  childStylings?: TailwindStylings;
}
