import React, { PropsWithChildren, ReactElement } from 'react';

import createStylings from '../stylings';
import { AlertProps } from './types';

export default function Alert(
  props: PropsWithChildren<AlertProps>
): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.margin = props.mainStylings?.spacing?.margin
      ? props.mainStylings.spacing.margin
      : 'm-2';

    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white dark:bg-slate-700';
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings.border.borderWidth
      : 'border-l-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings.border.borderColor
      : 'border-slate-700 dark:border-white';
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings.border.borderRadius
      : 'rounded-md';
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.position = props.mainStylings?.layout?.position
      ? props.mainStylings.layout.position
      : 'relative';
    mainStylings.layout.overflow = props.mainStylings?.layout?.overflow
      ? props.mainStylings.layout.overflow
      : 'overflow-auto';
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.height = props.mainStylings?.sizing?.height
      ? props.mainStylings.sizing.height
      : 'h-16';
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-74';
    mainStylings.sizing.maxWidth = props.mainStylings?.sizing?.maxWidth
      ? props.mainStylings.sizing.maxWidth
      : 'max-w-sm';
    if (!mainStylings.effect) mainStylings.effect = {};
    mainStylings.effect.boxShadow = props.mainStylings?.effect?.boxShadow
      ? props.mainStylings.effect.boxShadow
      : 'shadow-lg';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings.text.textColor
      : 'text-black dark:text-slate-300';
  }
  return (
    <div
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      {props.children}
    </div>
  );
}
