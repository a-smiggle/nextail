import { MutableRefObject, ReactNode } from 'react';

import { TailwindStylings } from '../types';

export default interface AlertContainerProps {
  open: boolean;
  toggle?: ReactNode;
  clickOutside?: MutableRefObject<any>;
  backgroundStylings?: TailwindStylings;
  mainStylings?: TailwindStylings;
}
