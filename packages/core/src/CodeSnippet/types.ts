import { TailwindStylings } from '../types';

export interface CodeSnippetProps {
  data: string;
  copyTimeout?: number;
  mainStylings?: TailwindStylings;
  buttonStylings?: TailwindStylings;
}
