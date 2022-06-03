import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface AlertProps {
  mainStylings?: TailwindStylings;
}

export interface AlertStyledProps extends AlertProps {
  buttons?: ReactNode;
  icon?: ReactNode;
  title: string;
  message: string;
  timestamp?: string;
}
