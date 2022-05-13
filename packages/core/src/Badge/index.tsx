import React, { PropsWithChildren } from 'react';

import Badge from './Badge';
import { BadgeProps } from './types';

const PillBadge = (props: PropsWithChildren<BadgeProps>) => (
  <Badge mainStylings={{ border: { borderRadius: 'rounded-full' } }}>
    {props.children}
  </Badge>
);
const RoundedBadge = (props: PropsWithChildren<BadgeProps>) => (
  <Badge mainStylings={{ border: { borderRadius: 'rounded' } }}>
    {props.children}
  </Badge>
);

export { PillBadge, RoundedBadge };
export default Badge;
