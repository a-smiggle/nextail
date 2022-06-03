import React, { ReactElement } from 'react';

import createStylings from '../stylings';
import { SpinnerProps } from './types';

function Spinner(props: SpinnerProps): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.height = props.mainStylings?.sizing?.height
      ? props.mainStylings.sizing.height
      : 'h-12';
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-12';
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings.border.borderRadius
      : 'rounded-full';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings.border.borderColor
      : 'border-black';
    mainStylings.border.borderStyle = props.mainStylings?.border?.borderStyle
      ? props.mainStylings.border.borderStyle
      : 'border-solid';
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings.border.borderWidth
      : 'border';
    if (!mainStylings.transitionAnimation)
      mainStylings.transitionAnimation = {};
    mainStylings.transitionAnimation.animation = props.mainStylings
      ?.transitionAnimation?.animation
      ? props.mainStylings.transitionAnimation.animation
      : 'animate-spin';
  }

  const closedStylings = props.closedStylings ? props.closedStylings : {};
  if (closedStylings) {
    if (!closedStylings.sizing) closedStylings.sizing = {};
    closedStylings.sizing.height = props.closedStylings?.sizing?.height
      ? props.closedStylings.sizing.height
      : 'h-12';
    closedStylings.sizing.width = props.closedStylings?.sizing?.width
      ? props.closedStylings.sizing.width
      : 'w-12';
    if (!closedStylings.border) closedStylings.border = {};
    closedStylings.border.borderRadius = props.closedStylings?.border
      ?.borderRadius
      ? props.closedStylings.border.borderRadius
      : 'rounded-full';
    closedStylings.border.borderColor = props.closedStylings?.border
      ?.borderColor
      ? props.closedStylings.border.borderColor
      : 'border-slate-300';
    closedStylings.border.borderStyle = props.closedStylings?.border
      ?.borderStyle
      ? props.closedStylings.border.borderStyle
      : 'border-solid';
    closedStylings.border.borderWidth = props.closedStylings?.border
      ?.borderWidth
      ? props.closedStylings.border.borderWidth
      : 'border';
  }

  if (props.closed)
    return (
      <div
        className={`relative ${mainStylings.sizing?.height} ${mainStylings.sizing?.width}`}
      >
        <div
          className={`absolute ${
            props.closedStylings?.className
              ? props.closedStylings.className
              : createStylings(closedStylings)
          }`}
        ></div>

        <div
          className={`absolute border-t-transparent ${
            props.dashed ? 'border-dashed' : ''
          } ${
            props.mainStylings?.className
              ? props.mainStylings.className
              : createStylings(mainStylings)
          }`}
        ></div>
      </div>
    );
  return (
    <div
      className={`border-t-transparent ${props.dashed ? 'border-dashed' : ''} ${
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }`}
    ></div>
  );
}

export default Spinner;
