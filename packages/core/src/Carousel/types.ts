import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface CarouselData {
  title?: string;
  description?: string;
  show?: boolean;
  element: ReactNode;
  video?: boolean;
}

export interface CarouselProps {
  data: CarouselData[];
  fullscreen?: boolean;
  mainStylings?: TailwindStylings;
  titleStylings?: TailwindStylings;
  descriptionStylings?: TailwindStylings;
  buttonStylings: TailwindStylings;
  timer?: boolean;
  interval?: number;
}
