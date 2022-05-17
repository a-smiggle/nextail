import { Dispatch, ReactNode, SetStateAction } from 'react';

import { TailwindStylings } from '../types';

export interface ModalProps {
  open: boolean;
  toggle?: Dispatch<SetStateAction<boolean>>;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  mainStylings?: TailwindStylings;
  backdropStylings?: TailwindStylings;
}
