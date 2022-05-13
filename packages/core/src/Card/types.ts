import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface CardData {
  image?: string;
  imageLink?: string;
  title?: string;
  info?: string;
  secondaryInfo?: string;
  button?: ReactNode;
}

export interface CardProps {
  mainStylings?: TailwindStylings;
}
