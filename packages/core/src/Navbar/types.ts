import { ReactNode } from 'react';

import { SidebarProps } from '../Sidebar/types';
import { MenuData, TailwindStylings } from '../types';

export interface NavbarData {
  brand?: ReactNode;
  menu?: MenuData[];
  buttons?: ReactNode;
}

export interface NavbarProps {
  data: NavbarData;
  mainStylings?: TailwindStylings;
  linkStylings?: TailwindStylings;
  dropdownStylings?: TailwindStylings;
  dropdownItemStylings?: TailwindStylings;
  sidebar?: SidebarProps;
}
