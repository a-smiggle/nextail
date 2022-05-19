import React, { PropsWithChildren, ReactElement, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import createStylings from '../stylings';
import AlertContainerProps from './types';

export default function AlertContainer(
  props: PropsWithChildren<AlertContainerProps>
): ReactElement {
  const backgroundStylings = props.backgroundStylings
    ? props.backgroundStylings
    : {};
  if (backgroundStylings) {
    if (!backgroundStylings.background) backgroundStylings.background = {};
    backgroundStylings.background.backgroundColor = props.backgroundStylings
      ?.background?.backgroundColor
      ? props.backgroundStylings.background.backgroundColor
      : 'bg-slate-700';
    if (!backgroundStylings.effect) backgroundStylings.effect = {};
    backgroundStylings.effect.opacity = props.backgroundStylings?.effect
      ?.opacity
      ? props.backgroundStylings.effect.opacity
      : 'opacity-50';
    if (!backgroundStylings.layout) backgroundStylings.layout = {};
    backgroundStylings.layout.position = props.backgroundStylings?.layout
      ?.position
      ? props.backgroundStylings?.layout?.position
      : 'fixed';
    backgroundStylings.layout.top = props.backgroundStylings?.layout?.top
      ? props.backgroundStylings.layout.top
      : 'top-0';
    backgroundStylings.layout.left = props.backgroundStylings?.layout?.left
      ? props.backgroundStylings.layout?.left
      : 'left-0';
    if (!backgroundStylings.sizing) backgroundStylings.sizing = {};
    backgroundStylings.sizing.width = props.backgroundStylings?.sizing?.width
      ? props.backgroundStylings.sizing.width
      : 'w-full';
    backgroundStylings.sizing.height = props.backgroundStylings?.sizing?.height
      ? props.backgroundStylings.sizing.height
      : 'h-screen';
  }

  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.position = props.mainStylings?.layout?.position
      ? props.mainStylings?.layout?.position
      : 'fixed';
    mainStylings.layout.top = props.mainStylings?.layout?.top
      ? props.mainStylings.layout.top
      : 'top-0';
    mainStylings.layout.right = props.mainStylings?.layout?.left
      ? props.mainStylings.layout?.right
      : 'right-0 md:right-10';
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-4/5 md:w-full';
    mainStylings.sizing.height = props.mainStylings?.sizing?.height
      ? props.mainStylings.sizing.height
      : 'h-screen';
    mainStylings.sizing.maxWidth = props.mainStylings?.sizing?.maxWidth
      ? props.mainStylings.sizing.maxWidth
      : 'max-w-sm';
  }

  const ref = useRef(null);

  const handleOutsideClick = () => {
    if (props.toggle) props.toggle(false);
  };

  useOnClickOutside(ref, handleOutsideClick);

  return (
    <>
      {props.backgroundStylings ? (
        <div
          className={`${
            props.backgroundStylings?.className
              ? props.backgroundStylings.className
              : createStylings(backgroundStylings)
          } ${props.open ? '' : 'hidden'}`}
        />
      ) : null}
      <div
        ref={ref}
        className={`${
          props.mainStylings?.className
            ? props.mainStylings.className
            : createStylings(mainStylings)
        } ${props.open ? '' : 'hidden'}`}
      >
        {props.children}
      </div>
    </>
  );
}
