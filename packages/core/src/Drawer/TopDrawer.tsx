import React, { useRef, PropsWithChildren, ReactElement } from 'react';
import { useOnClickOutside } from 'usehooks-ts'

import createStylings from '../stylings';
import { DrawerProps } from './types';

function TopDrawer(props: PropsWithChildren<DrawerProps>): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white dark:bg-slate-700';
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.position = props.mainStylings?.layout?.position
      ? props.mainStylings.layout.position
      : 'fixed';
    mainStylings.layout.top = props.mainStylings?.layout?.top
      ? props.mainStylings.layout.top
      : 'top-0';
    mainStylings.layout.left = props.mainStylings?.layout?.left
      ? props.mainStylings.layout?.left
      : 'left-0';
    mainStylings.layout.zIndex = props.mainStylings?.layout?.zIndex
      ? props.mainStylings.layout.zIndex
      : 'z-30';
    mainStylings.layout.overflow = props.mainStylings?.layout?.overflow
      ? props.mainStylings.layout.overflow
      : 'overflow-auto';
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-full';
    mainStylings.sizing.height = props.mainStylings?.sizing?.height
      ? props.mainStylings.sizing.height
      : 'h-1/2  ';
    if (!mainStylings.transitionAnimation)
      mainStylings.transitionAnimation = {};
    mainStylings.transitionAnimation.transitionProperty = props.mainStylings
      ?.transitionAnimation?.transitionProperty
      ? props.mainStylings.transitionAnimation.transitionProperty
      : 'transition-all';
    mainStylings.transitionAnimation.transitionDuration = props.mainStylings
      ?.transitionAnimation?.transitionDuration
      ? props.mainStylings.transitionAnimation.transitionDuration
      : 'duration-300 ease-in-out';
    mainStylings.transitionAnimation.transitionTimingFunction = props
      .mainStylings?.transitionAnimation?.transitionTimingFunction
      ? props.mainStylings.transitionAnimation.transitionTimingFunction
      : 'ease-in-out';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = 'text-black dark:text-slate-300';
  }

  const ref = useRef(null);

  const handleOutsideClick = () => { if(props.open && props.toggle) props.toggle(false)}

  useOnClickOutside(ref, handleOutsideClick);

  return (
    <aside
      ref={ref}
      className={`${
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      } ${props.open ? '' : 'hidden'}`}
    >
      {props.children}
    </aside>
  );
}

export default TopDrawer;
