import React, { PropsWithChildren, ReactElement } from 'react';

import createStylings from '../stylings';
import { ButtonProps } from './types';

function Button(props: PropsWithChildren<ButtonProps>): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'inline-block';
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.padding = props.mainStylings?.spacing?.padding
      ? props.mainStylings.spacing.padding
      : 'py-2 px-6';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings.text.textColor
      : 'text-black';
    mainStylings.text.textAlign = props.mainStylings?.text?.textAlign
      ? props.mainStylings.text.textAlign
      : 'text-center';
    mainStylings.text.textTransform = props.mainStylings?.text?.textTransform
      ? props.mainStylings.text.textTransform
      : 'uppercase';
    mainStylings.text.lineHeight = props.mainStylings?.text?.lineHeight
      ? props.mainStylings.text.lineHeight
      : 'leading-tight';
    mainStylings.text.fontWeight = props.mainStylings?.text?.fontWeight
      ? props.mainStylings.text.fontWeight
      : 'font-medium';
    mainStylings.text.fontSize = props.mainStylings?.text?.fontSize
      ? props.mainStylings.text.fontSize
      : 'text-xs';
    if (!mainStylings.effect) mainStylings.effect = {};
    mainStylings.effect.boxShadow = props.mainStylings?.effect?.boxShadow
      ? props.mainStylings.effect.boxShadow
      : 'shadow-md';
  }

  if (props.disabled)
    return (
      <button
        disabled={props.disabled}
        type={props.type ? props.type : 'button'}
        className={`${
          props.mainStylings?.className
            ? props.mainStylings.className
            : createStylings(mainStylings)
        } ${props.disabled ? 'pointer-events-none opacity-50' : ''}`}
      >
        {props.children}
      </button>
    );

  if (props.link)
    return (
      <a href={props.link}>
        <button
          type={props.type ? props.type : 'button'}
          className={
            props.mainStylings?.className
              ? props.mainStylings.className
              : createStylings(mainStylings)
          }
        >
          {props.children}
        </button>
      </a>
    );

  if (props.onClick)
    return (
      <button
        type={props.type ? props.type : 'button'}
        onClick={props.onClick}
        className={
          props.mainStylings?.className
            ? props.mainStylings.className
            : createStylings(mainStylings)
        }
      >
        {props.children}
      </button>
    );

  return (
    <button
      type={props.type ? props.type : 'button'}
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      {props.children}
    </button>
  );
}

export default Button;
