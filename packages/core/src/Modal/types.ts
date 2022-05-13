import { MutableRefObject, ReactNode } from 'react';

import { TailwindStylings } from '../types';

export interface ModalProps {
  toggle?: ReactNode;
  clickOutside?: MutableRefObject<any>;
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  mainStylings?: TailwindStylings;
  backdropStylings?: TailwindStylings;
}
