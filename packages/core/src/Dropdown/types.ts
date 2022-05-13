import { MutableRefObject, ReactNode } from 'react';

import { TailwindStylings } from '../types';

interface DropdownItem {
  divider?: boolean;
  icon?: ReactNode;
  title?: string;
  description?: string;
  link?: string;
  disabled?: boolean;
}

export interface DropdownProps {
  open: boolean;
  clickOutside?: MutableRefObject<any>;
  button: ReactNode;
  mainStylings?: TailwindStylings;
  itemStylings?: TailwindStylings;
  dividerStylings?: TailwindStylings;
  items?: DropdownItem[];
}
