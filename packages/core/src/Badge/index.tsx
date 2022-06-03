import React, { PropsWithChildren, ReactElement } from 'react';

import Badge from './Badge';
import { BadgeProps } from './types';

const PillBadge = (props: PropsWithChildren<BadgeProps>): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded-full';
  }

  return <Badge mainStylings={mainStylings}>{props.children}</Badge>;
};
const RoundedBadge = (props: PropsWithChildren<BadgeProps>): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
  }
  return <Badge mainStylings={mainStylings}>{props.children}</Badge>;
};

export { PillBadge, RoundedBadge };
export default Badge;
