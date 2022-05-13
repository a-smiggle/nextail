import React, { PropsWithChildren, ReactElement } from 'react';

import createStylings from '../stylings';
import { AvatarGroupProps } from './types';

export default function AvatarGroup(
  props: PropsWithChildren<AvatarGroupProps>
): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'flex';
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.spaceBetween = props.mainStylings?.spacing
      ?.spaceBetween
      ? props.mainStylings.spacing.spaceBetween
      : '-space-x-8';
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
