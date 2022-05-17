import React, { PropsWithChildren } from 'react';

import Button from './Button';
import { ButtonProps } from './types';

const SuccessButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-green-300 hover:bg-green-400 focus:bg-green-500 active:bg-green-600',
      },
      border: { borderColor: '', borderRadius: 'rounded', borderWidth: '' },
      text: { textColor: 'text-white' },
    }}
  >
    {props.children}
  </Button>
);

const SuccessOutlineButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-white hover:bg-green-400 focus:bg-green-500 active:bg-green-600',
      },
      border: {
        borderColor: 'border-green-500',
        borderRadius: 'rounded',
        borderWidth: 'border-2',
      },
      text: {
        textColor:
          'text-green-500 hover:text-white focus:text-white active:text-white',
      },
    }}
  >
    {props.children}
  </Button>
);

const WarningButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-yellow-300 hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-600',
      },
      border: { borderColor: '', borderRadius: 'rounded', borderWidth: '' },
      text: { textColor: 'text-black' },
    }}
  >
    {props.children}
  </Button>
);

const WarningOutlineButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-white hover:bg-yellow-400 focus:bg-yellow-500 active:bg-yellow-600',
      },
      border: {
        borderColor: 'border-yellow-500',
        borderRadius: 'rounded',
        borderWidth: 'border-2',
      },
      text: {
        textColor:
          'text-yellow-500 hover:text-black focus:text-black active:text-black',
      },
    }}
  >
    {props.children}
  </Button>
);

const ErrorButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-red-300 hover:bg-red-400 focus:bg-red-500 active:bg-red-600',
      },
      border: { borderColor: '', borderRadius: 'rounded', borderWidth: '' },
      text: { textColor: 'text-white' },
    }}
  >
    {props.children}
  </Button>
);

const ErrorOutlineButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-white hover:bg-red-400 focus:bg-red-500 active:bg-red-600',
      },
      border: {
        borderColor: 'border-red-500',
        borderRadius: 'rounded',
        borderWidth: 'border-2',
      },
      text: {
        textColor:
          'text-red-500 hover:text-white focus:text-white active:text-white',
      },
    }}
  >
    {props.children}
  </Button>
);

const InfoButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-sky-300 hover:bg-sky-400 focus:bg-sky-500 active:bg-sky-600',
      },
      border: { borderColor: '', borderRadius: 'rounded', borderWidth: '' },
      text: { textColor: 'text-white' },
    }}
  >
    {props.children}
  </Button>
);

const InfoOutlineButton = (props: PropsWithChildren<ButtonProps>) => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-white hover:bg-sky-400 focus:bg-sky-500 active:bg-sky-600',
      },
      border: {
        borderColor: 'border-sky-500',
        borderRadius: 'rounded',
        borderWidth: 'border-2',
      },
      text: {
        textColor:
          'text-sky-500 hover:text-white focus:text-white active:text-white',
      },
    }}
  >
    {props.children}
  </Button>
);

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
