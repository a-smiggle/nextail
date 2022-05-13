import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface FooterLinks {
  title?: string;
  link?: string;
}

export interface FooterData {
  title?: ReactNode;
  logo?: ReactNode;
  credit?: ReactNode;
  links?: FooterLinks[];
  buttons?: ReactNode;
}

export interface FooterProps {
  data: FooterData;
  mainStylings?: TailwindStylings;
  linkStylings?: TailwindStylings;
}
