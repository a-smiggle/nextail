import Button from '@nextail/core/Button';
import { ButtonProps } from '@nextail/core/Button/types';
import React, { PropsWithChildren, ReactElement } from 'react';

const UnSelectedButton = (
  props: PropsWithChildren<ButtonProps>
): ReactElement => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-white hover:bg-emerald-400 focus:bg-emerald-500 active:bg-emerald-600',
      },
      border: {
        borderColor: 'border-emerald-500',
        borderRadius: 'rounded-t',
        borderWidth: 'border-x-2 border-t-2',
      },
      spacing: { padding: 'py-2 pl-2 pr-4' },
      text: {
        textColor:
          'text-emerald-500 hover:text-white focus:text-white active:text-white',
      },
      effect: { boxShadow: ' ' },
    }}
  >
    {props.children}
  </Button>
);

const SelectedButton = (
  props: PropsWithChildren<ButtonProps>
): ReactElement => (
  <Button
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}
    link={props.link}
    mainStylings={{
      background: {
        backgroundColor:
          'bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 active:bg-emerald-800',
      },
      border: { borderColor: '', borderRadius: 'rounded-t', borderWidth: '' },
      spacing: { padding: 'py-2 pl-2 pr-4' },
      text: { textColor: 'text-white' },
      effect: { boxShadow: ' ' },
    }}
  >
    {props.children}
  </Button>
);

export { SelectedButton, UnSelectedButton };
