import { MutableRefObject, ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface DrawerProps {
  open: boolean;
  clickOutside?: MutableRefObject<any>;
  toggle?: ReactNode;
  postion?: 'top' | 'bottom' | 'right' | 'left';
  mainStylings?: TailwindStylings;
}
