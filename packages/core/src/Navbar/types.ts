import { Dispatch, ReactNode, SetStateAction } from 'react';

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
  toggle?: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
}
