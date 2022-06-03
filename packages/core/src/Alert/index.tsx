import React, { Fragment, ReactElement } from 'react';

import Alert from './Alert';
import { AlertStyledProps } from './types';

const AlertBody = (props: AlertStyledProps): ReactElement => {
  return (
    <Fragment>
      <div className="mx-2 flex h-full items-center justify-between text-sm">
        <div className="flex h-full items-center gap-2">
          {props.icon ? props.icon : null}
          <div>
            <div className="font-bold">{props.title}</div>
            <div>{props.message}</div>
          </div>
        </div>

        {props.buttons ? props.buttons : null}
      </div>
      {props.timestamp ? (
        <div className="absolute top-1 right-2 text-[0.5rem]">
          {props.timestamp}
        </div>
      ) : null}
    </Fragment>
  );
};

const SuccessAlert = (props: AlertStyledProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-l-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-green-700';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-green-300/25';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-green-700';
  }

  return <Alert mainStylings={mainStylings}>{AlertBody(props)}</Alert>;
};

const WarningAlert = (props: AlertStyledProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-l-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-yellow-700';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-yellow-300/25';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-yellow-700';
  }
  return <Alert mainStylings={mainStylings}>{AlertBody(props)}</Alert>;
};

const ErrorAlert = (props: AlertStyledProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-l-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-red-700';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-red-300/25';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-red-700';
  }
  return <Alert mainStylings={mainStylings}>{AlertBody(props)}</Alert>;
};

const InfoAlert = (props: AlertStyledProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-l-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-sky-700';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-sky-300/25';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-sky-700';
  }
  return <Alert mainStylings={mainStylings}>{AlertBody(props)}</Alert>;
};

export { ErrorAlert, InfoAlert, SuccessAlert, WarningAlert };
export default Alert;
