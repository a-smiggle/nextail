import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface CarouselData {
  title?: string;
  description?: string;
  element: ReactNode;
}

export interface CarouselProps {
  data: CarouselData[];
  mainStylings?: TailwindStylings;
  titleStylings?: TailwindStylings;
  descriptionStylings?: TailwindStylings;
  buttonStylings?: TailwindStylings;
  timer?: boolean;
  interval?: number;
}
