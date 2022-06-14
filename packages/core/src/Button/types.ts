import { MouseEventHandler } from 'react';

import { TailwindStylings } from '../types';

export interface ButtonProps {
  onClick?: MouseEventHandler;
  disabled?: boolean;
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  mainStylings?: TailwindStylings;
  title?: string;
}
