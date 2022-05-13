import React, { PropsWithChildren, ReactElement } from 'react';

import createStylings from '../stylings';
import { BadgeProps } from './types';

function Badge(props: PropsWithChildren<BadgeProps>): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'inline-block';
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.padding = props.mainStylings?.spacing?.padding
      ? props.mainStylings.spacing.padding
      : 'py-1 px-2.5';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-blue-500';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings.text.textColor
      : 'text-white';
    mainStylings.text.textAlign = props.mainStylings?.text?.textAlign
      ? props.mainStylings.text.textAlign
      : 'text-center';
    mainStylings.text.whitespace = props.mainStylings?.text?.whitespace
      ? props.mainStylings.text.whitespace
      : 'whitespace-nowrap';
    mainStylings.text.verticalAlign = props.mainStylings?.text?.verticalAlign
      ? props.mainStylings.text.verticalAlign
      : 'align-baseline';
    mainStylings.text.lineHeight = props.mainStylings?.text?.lineHeight
      ? props.mainStylings.text.lineHeight
      : 'leading-none';
    mainStylings.text.fontWeight = props.mainStylings?.text?.fontWeight
      ? props.mainStylings.text.fontWeight
      : 'font-bold';
  }
  return (
    <span
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      {props.children}
    </span>
  );
}

export default Badge;
