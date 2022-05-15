import { Dispatch, SetStateAction } from 'react';

import { TailwindStylings } from '../types';

export interface DrawerProps {
  open: boolean;
  toggle?: Dispatch<SetStateAction<boolean>>;
  postion?: 'top' | 'bottom' | 'right' | 'left';
  mainStylings?: TailwindStylings;
}
