import { Dispatch, SetStateAction } from 'react';

import { TailwindStylings } from '../types';

export default interface AlertContainerProps {
  open: boolean;
  toggle?: Dispatch<SetStateAction<boolean>>;
  backgroundStylings?: TailwindStylings;
  mainStylings?: TailwindStylings;
}
