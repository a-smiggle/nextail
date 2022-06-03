import { TailwindStylings } from '../types';

export interface AvatarProps {
  animateZoom?: boolean;
  link?: string;
  placeholder?: string;
  title?: string;
  status?: 'online' | 'offline' | 'away';
  mainStylings?: TailwindStylings;
  placeholderStylings?: TailwindStylings;
  statusStylings?: TailwindStylings;
}
