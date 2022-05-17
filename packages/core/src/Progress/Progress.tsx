import React, { ReactElement } from 'react';

import createStylings from '../stylings';
import { ProgressProps } from './types';

export default function Progress(props: ProgressProps): ReactElement {
  const backgroundStylings = props.backgroundStylings
    ? props.backgroundStylings
    : {};
  if (backgroundStylings) {
    if (!backgroundStylings.background) backgroundStylings.background = {};
    backgroundStylings.background.backgroundColor = props.backgroundStylings
      ?.background?.backgroundColor
      ? props.backgroundStylings.background.backgroundColor
      : 'bg-gray-200 dark:bg-slate-700';
    if (!backgroundStylings.border) backgroundStylings.border = {};
    backgroundStylings.border.borderRadius = props.backgroundStylings?.border
      ?.borderRadius
      ? props.backgroundStylings.border.borderRadius
      : 'rounded-full';
    if (!backgroundStylings.layout) backgroundStylings.layout = {};
    backgroundStylings.layout.position = props.backgroundStylings?.layout
      ?.position
      ? props.backgroundStylings.layout.position
      : 'relative';
    if (!backgroundStylings.sizing) backgroundStylings.sizing = {};
    backgroundStylings.sizing.height = props.mainStylings?.sizing?.height
      ? props.mainStylings.sizing.height
      : 'h-4';
    backgroundStylings.sizing.width = props.backgroundStylings?.sizing?.width
      ? props.backgroundStylings.sizing.width
      : 'w-full';
  }
  const mainStylings =
    props.mainStylings && !props.mainStylings.className
      ? props.mainStylings
      : {};
  if (mainStylings) {
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-blue-500';
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings.border.borderRadius
      : 'rounded-full';
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.position = props.mainStylings?.layout?.position
      ? props.mainStylings.layout.position
      : 'abosolute';
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'flex';
    mainStylings.layout.top = props.mainStylings?.layout?.top
      ? props.mainStylings.layout.top
      : 'top-0';
    mainStylings.layout.left = props.mainStylings?.layout?.left
      ? props.mainStylings.layout.left
      : 'left-0';
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.height = 'h-full';
    if (!mainStylings.flexboxGrid) mainStylings.flexboxGrid = {};
    mainStylings.flexboxGrid.alignItems = props.mainStylings?.flexboxGrid
      ?.alignItems
      ? props.mainStylings.flexboxGrid.alignItems
      : 'items-center';
    mainStylings.flexboxGrid.justifyItems = props.mainStylings?.flexboxGrid
      ?.justifyItems
      ? props.mainStylings.flexboxGrid.justifyItems
      : 'justify-center';
    if (!mainStylings.transitionAnimation)
      mainStylings.transitionAnimation = {};
    mainStylings.transitionAnimation.transitionProperty = props.mainStylings
      ?.transitionAnimation?.transitionProperty
      ? props.mainStylings.transitionAnimation.transitionProperty
      : 'transition-all';
    mainStylings.transitionAnimation.transitionDuration = props.mainStylings
      ?.transitionAnimation?.transitionDuration
      ? props.mainStylings.transitionAnimation.transitionDuration
      : 'duration-500';
  }
  return (
    <div
      className={
        props.backgroundStylings?.className
          ? props.backgroundStylings.className
          : createStylings(backgroundStylings)
      }
    >
      <div
        style={{ width: `${props.progress ? props.progress : 0}%` }}
        className={
          props.mainStylings?.className
            ? props.mainStylings.className
            : createStylings(mainStylings)
        }
      ></div>
    </div>
  );
}
