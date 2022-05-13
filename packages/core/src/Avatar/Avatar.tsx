import React, { PropsWithChildren, ReactElement } from 'react';

import createStylings from '../stylings';
import { AvatarProps } from './types';

export default function Avatar(
  props: PropsWithChildren<AvatarProps>
): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.position = props.mainStylings?.layout?.position
      ? props.mainStylings.layout.position
      : 'relative';
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'flex';
    if (props.animateZoom) {
      if (!mainStylings.layout) mainStylings.layout = {};

      mainStylings.layout.zIndex = 'hover:z-10';
      if (!mainStylings.transform) mainStylings.transform = {};
      mainStylings.transform.scale = 'hover:scale-125';
      mainStylings.transform.transform = 'transform';
      if (!mainStylings.transitionAnimation)
        mainStylings.transitionAnimation = {};
      mainStylings.transitionAnimation.transitionTimingFunction = props
        .mainStylings?.transitionAnimation?.transitionTimingFunction
        ? props.mainStylings.transitionAnimation.transitionTimingFunction
        : 'ease-in-out';
      mainStylings.transitionAnimation.transitionProperty = props.mainStylings
        ?.transitionAnimation?.transitionProperty
        ? props.mainStylings.transitionAnimation.transitionProperty
        : 'transition';
      mainStylings.transitionAnimation.transitionDuration = props.mainStylings
        ?.transitionAnimation?.transitionDuration
        ? props.mainStylings.transitionAnimation.transitionDuration
        : 'duration-500';
    }
  }

  function addStatus() {
    if (props.status) {
      const statusStylings = props.statusStylings ? props.statusStylings : {};
      if (statusStylings) {
        if (!statusStylings.layout) statusStylings.layout = {};
        statusStylings.layout.position = props.statusStylings?.layout?.position
          ? props.statusStylings.layout.position
          : 'absolute';
        statusStylings.layout.left = props.statusStylings?.layout?.left
          ? props.statusStylings.layout.left
          : 'left-1/2';
        statusStylings.layout.top = props.statusStylings?.layout?.top
          ? props.statusStylings.layout.top
          : '-top-2';
        if (!statusStylings.sizing) statusStylings.sizing = {};
        statusStylings.sizing.width = props.statusStylings?.sizing?.width
          ? props.statusStylings.sizing.width
          : 'w-3';
        statusStylings.sizing.height = props.statusStylings?.sizing?.height
          ? props.statusStylings.sizing.height
          : 'h-3';
        if (!statusStylings.transform) statusStylings.transform = {};
        statusStylings.transform.translate = '-translate-x-1/2';
        if (!statusStylings.border) statusStylings.border = {};
        statusStylings.border.borderRadius = 'rounded-full';
        statusStylings.border.borderWidth = 'border-2';
        statusStylings.border.borderColor = 'border-white';
        if (!statusStylings.background) statusStylings.background = {};
        switch (props.status) {
          case 'online':
            statusStylings.background.backgroundColor = 'bg-green-500';
            break;
          case 'offline':
            statusStylings.background.backgroundColor = 'bg-red-500';
            break;
          case 'away':
            statusStylings.background.backgroundColor = 'bg-yellow-500';
            break;
          default:
            statusStylings.background.backgroundColor = props.statusStylings
              ?.background?.backgroundColor
              ? props.statusStylings.background.backgroundColor
              : 'bg-green-500';
            break;
        }
      }
      return (
        <span
          title={props.status}
          className={
            props.statusStylings?.className
              ? props.statusStylings.className
              : createStylings(statusStylings)
          }
        ></span>
      );
    }
    return null;
  }

  function createAvatar() {
    if (props.placeholder && !props.children) {
      const placeholderStylings = props.placeholderStylings
        ? props.placeholderStylings
        : {};
      if (placeholderStylings) {
        if (!placeholderStylings.layout) placeholderStylings.layout = {};
        placeholderStylings.layout.display = 'grid';
        if (!placeholderStylings.sizing) placeholderStylings.sizing = {};
        placeholderStylings.sizing.height = 'h-20';
        placeholderStylings.sizing.width = 'w-20';
        if (!placeholderStylings.flexboxGrid)
          placeholderStylings.flexboxGrid = {};
        placeholderStylings.flexboxGrid.placeItems = 'place-items-center';
        if (!placeholderStylings.border) placeholderStylings.border = {};
        placeholderStylings.border.borderRadius = 'rounded-full';
        if (!placeholderStylings.background)
          placeholderStylings.background = {};
        placeholderStylings.background.backgroundColor = 'bg-slate-700';
        if (!placeholderStylings.text) placeholderStylings.text = {};
        placeholderStylings.text.textColor = 'text-slate-200';
        placeholderStylings.text.fontSize = 'text-3xl';
      }
      return (
        <div
          className={
            props.placeholderStylings?.className
              ? props.placeholderStylings.className
              : createStylings(placeholderStylings)
          }
        >
          <span>{props.placeholder}</span>
        </div>
      );
    }
    if (props.children) return props.children;

    // Loads random image.
    return (
      <img
        className="mx-auto h-20 w-20 rounded-full object-cover"
        alt="avatar"
        src="https://api.lorem.space/image/face?w=150&h=150"
      />
    );
  }

  return (
    <a
      title={props.placeholder}
      href={props.link}
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      {createAvatar()}
      {addStatus()}
    </a>
  );
}
