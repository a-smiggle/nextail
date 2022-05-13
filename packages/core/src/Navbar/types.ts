import { ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface MenuData {
  title: string;
  link?: string;
  subMenu?: MenuData[];
}

export interface NavbarData {
  title?: ReactNode;
  logo?: ReactNode;
  menu?: MenuData[];
  buttons?: ReactNode;
}

export interface NavbarProps {
  data: NavbarData;
  mainStylings?: TailwindStylings;
  mobileStylings?: TailwindStylings;
  linkStylings?: TailwindStylings;
  dropdownStylings?: TailwindStylings;
  dropdownItemStylings?: TailwindStylings;
}
