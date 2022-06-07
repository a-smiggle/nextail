import React, { PropsWithChildren, ReactElement } from 'react';

import BottomDrawer from './BottomDrawer';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
import TopDrawer from './TopDrawer';
import { DrawerProps } from './types';

export default function Drawer(
  props: PropsWithChildren<DrawerProps>
): ReactElement {
  switch (props.position) {
    case 'top':
      return (
        <TopDrawer
          toggle={props.toggle}
          open={props.open}
          mainStylings={props.mainStylings}
        >
          {props.children}
        </TopDrawer>
      );
    case 'bottom':
      return (
        <BottomDrawer
          toggle={props.toggle}
          open={props.open}
          mainStylings={props.mainStylings}
        >
          {props.children}
        </BottomDrawer>
      );
    case 'right':
      return (
        <RightDrawer
          toggle={props.toggle}
          open={props.open}
          mainStylings={props.mainStylings}
        >
          {props.children}
        </RightDrawer>
      );
    case 'left':
      return (
        <LeftDrawer
          toggle={props.toggle}
          open={props.open}
          mainStylings={props.mainStylings}
        >
          {props.children}
        </LeftDrawer>
      );
    default:
      return (
        <RightDrawer
          toggle={props.toggle}
          open={props.open}
          mainStylings={props.mainStylings}
        >
          {props.children}
        </RightDrawer>
      );
  }
}

export { BottomDrawer, LeftDrawer, RightDrawer, TopDrawer };
