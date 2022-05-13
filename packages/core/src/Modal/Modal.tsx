import React, { PropsWithChildren, ReactElement } from 'react';

import createStylings from '../stylings';
import { ModalProps } from './types';

export default function Modal(
  props: PropsWithChildren<ModalProps>
): ReactElement {
  const backdropStylings =
    props.backdropStylings && !props.backdropStylings.className
      ? props.backdropStylings
      : {};
  if (backdropStylings) {
    if (!backdropStylings.layout) backdropStylings.layout = {};
    backdropStylings.layout.position = props.backdropStylings?.layout?.position
      ? props.backdropStylings.layout.position
      : 'absolute';
    backdropStylings.layout.display = props.backdropStylings?.layout?.display
      ? props.backdropStylings.layout.display
      : 'flex';
    backdropStylings.layout.inset = props.backdropStylings?.layout?.inset
      ? props.backdropStylings.layout.inset
      : 'inset-0';
    if (!backdropStylings.flexboxGrid) backdropStylings.flexboxGrid = {};
    backdropStylings.flexboxGrid.alignItems = 'items-center';
    backdropStylings.flexboxGrid.justifyItems = 'justify-center';
    if (!backdropStylings.background) backdropStylings.background = {};
    backdropStylings.background.backgroundColor = props.backdropStylings
      ?.background?.backgroundColor
      ? props.backdropStylings.background.backgroundColor
      : 'bg-slate-700';
    if (!backdropStylings.effect) backdropStylings.effect = {};
    backdropStylings.effect.opacity = props.backdropStylings?.effect?.opacity
      ? props.backdropStylings.effect.opacity
      : 'opacity-50';
  }
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.padding = props.mainStylings?.spacing?.padding
      ? props.mainStylings.spacing.padding
      : 'p-4';

    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white dark:bg-black';
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings.border.borderWidth
      : 'border-2';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings.border.borderColor
      : 'border-slate-700 dark:border-white';
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings.border.borderRadius
      : 'rounded-md';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings.text.textColor
      : 'text-black dark:text-slate-300';
    if (!mainStylings.effect) mainStylings.effect = {};
    mainStylings.effect.boxShadow = props.mainStylings?.effect?.boxShadow
      ? props.mainStylings.effect.boxShadow
      : 'shadow-lg';
  }
  return (
    <div
      className={
        props.backdropStylings?.className
          ? props.backdropStylings.className
          : createStylings(backdropStylings)
      }
    >
      <div
        ref={props.clickOutside}
        className={
          props.mainStylings?.className
            ? props.mainStylings.className
            : createStylings(mainStylings)
        }
      >
        {props.toggle ? props.toggle : null}
        {props.header ? props.header : null}
        {props.body ? props.body : null}
        {props.footer ? props.footer : null}
      </div>
    </div>
  );
}
