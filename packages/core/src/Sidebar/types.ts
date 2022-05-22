import { ReactNode } from 'react';

import { MenuData, TailwindStylings } from '../types';

export interface SidebarData {
  brand?: ReactNode;
  menu?: MenuData[];
  bottom?: ReactNode;
}

export interface SidebarMenuAccordionProps {
  menu?: MenuData;
  menuStylings?: TailwindStylings;
  menuActiveStylings?: TailwindStylings;
}

export interface SidebarMenuProps {
  menu?: MenuData[];
  menuStylings?: TailwindStylings;
  menuActiveStylings?: TailwindStylings;
}

export interface SidebarProps {
  data: SidebarData;
  mainStylings?: TailwindStylings;
  menuStylings?: TailwindStylings;
  menuActiveStylings?: TailwindStylings;
}
