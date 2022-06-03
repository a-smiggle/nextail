import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface TableProps {
  mainStylings?: TailwindStylings;
  titleStylings?: TailwindStylings;
  bodyStylings?: TailwindStylings;
  border?: boolean;
  titles: string[];
  rows: ReactNode[];
}
