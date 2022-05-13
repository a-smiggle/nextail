import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface AlertData {
  buttons?: ReactNode;
  icon?: ReactNode;
  title?: string;
  message?: string;
  timestamp?: string;
}

export interface AlertProps {
  data?: AlertData;
  mainStylings?: TailwindStylings;
  flush?: boolean;
}
