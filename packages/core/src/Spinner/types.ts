import { TailwindStylings } from '../types';

export interface SpinnerProps {
  mainStylings?: TailwindStylings;
  closedStylings?: TailwindStylings;
  closed?: boolean;
  dashed?: boolean;
}
