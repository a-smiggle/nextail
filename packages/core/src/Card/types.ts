import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface CardProps {
  mainStylings?: TailwindStylings;
}
export interface CardData extends CardProps {
  image?: string;
  imageLink?: string;
  title?: string;
  info?: string;
  secondaryInfo?: string;
  buttons?: ReactNode;
}
