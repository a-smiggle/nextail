import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface TabData {
  title: string;
  content: ReactNode;
}

export interface TabsProps {
  mainStylings?: TailwindStylings;
  data: TabData[];
  SelectedButton: any;
  UnselectedButton: any;
}
