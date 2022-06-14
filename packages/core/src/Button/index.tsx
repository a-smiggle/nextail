import React, { PropsWithChildren, ReactElement } from 'react';

import Button from './Button';
import { ButtonProps } from './types';

const SuccessButton = (props: PropsWithChildren<ButtonProps>): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-green-300 hover:bg-green-400 focus:bg-green-500 active:bg-green-600';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-white';
  }

  return (
    <Button
      title={props.title}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      link={props.link}
      mainStylings={mainStylings}
    >
      {props.children}
    </Button>
  );
};

const SuccessOutlineButton = (
  props: PropsWithChildren<ButtonProps>
): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-green-500';
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-2';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-white hover:bg-green-400 focus:bg-green-500 active:bg-green-600';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-green-500 hover:text-white focus:text-white active:text-white';
  }
  return (
    <Button
      title={props.title}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      link={props.link}
      mainStylings={mainStylings}
    >
      {props.children}
    </Button>
  );
};

const WarningButton = (props: PropsWithChildren<ButtonProps>): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-600';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-black';
  }

  return (
    <Button
      title={props.title}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      link={props.link}
      mainStylings={mainStylings}
    >
      {props.children}
    </Button>
  );
};

const WarningOutlineButton = (
  props: PropsWithChildren<ButtonProps>
): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-yellow-500';
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-2';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-white hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-600';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-yellow-500 hover:text-black focus:text-black active:text-black';
  }
  return (
    <Button
      title={props.title}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      link={props.link}
      mainStylings={mainStylings}
    >
      {props.children}
    </Button>
  );
};

const ErrorButton = (props: PropsWithChildren<ButtonProps>): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-red-300 hover:bg-red-400 focus:bg-red-500 active:bg-red-600';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-white';
  }
  return (
    <Button
      title={props.title}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      link={props.link}
      mainStylings={mainStylings}
    >
      {props.children}
    </Button>
  );
};

const ErrorOutlineButton = (
  props: PropsWithChildren<ButtonProps>
): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-red-500';
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-2';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-white hover:bg-red-400 focus:bg-red-500 active:bg-red-600';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-red-500 hover:text-white focus:text-white active:text-white';
  }

  return (
    <Button
      title={props.title}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      link={props.link}
      mainStylings={mainStylings}
    >
      {props.children}
    </Button>
  );
};

const InfoButton = (props: PropsWithChildren<ButtonProps>): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-sky-300 hover:bg-sky-400 focus:bg-sky-500 active:bg-sky-600';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-white';
  }

  return (
    <Button
      title={props.title}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      link={props.link}
      mainStylings={mainStylings}
    >
      {props.children}
    </Button>
  );
};

const InfoOutlineButton = (
  props: PropsWithChildren<ButtonProps>
): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings?.border?.borderRadius
      : 'rounded';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-sky-500';
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-2';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-white hover:bg-sky-400 focus:bg-sky-500 active:bg-sky-600';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-sky-500 hover:text-white focus:text-white active:text-white';
  }
  return (
    <Button
      title={props.title}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      link={props.link}
      mainStylings={mainStylings}
    >
      {props.children}
    </Button>
  );
};

export {
  ErrorButton,
  ErrorOutlineButton,
  InfoButton,
  InfoOutlineButton,
  SuccessButton,
  SuccessOutlineButton,
  WarningButton,
  WarningOutlineButton,
};
export default Button;
