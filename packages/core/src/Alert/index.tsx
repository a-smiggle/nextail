import React from 'react';

import Alert from './Alert';
import { AlertData } from './types';

const AlertBody = (props: AlertData) => {
  return (
    <>
      <div className="mx-2 flex h-full items-center justify-between text-sm">
        <div className="flex h-full items-center">
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
    </>
  );
};

const SuccessAlert = (props: AlertData) => {
  return (
    <Alert
      data={props}
      mainStylings={{
        background: { backgroundColor: 'bg-green-300' },
        border: {
          borderWidth: 'border-l-4',
          borderColor: 'border-green-700',
        },
        text: { textColor: 'text-green-900' },
      }}
    >
      {AlertBody(props)}
    </Alert>
  );
};

const WarningAlert = (props: AlertData) => {
  return (
    <Alert
      data={props}
      mainStylings={{
        background: { backgroundColor: 'bg-yellow-300' },
        border: {
          borderWidth: 'border-l-4',
          borderColor: 'border-yellow-700',
        },
        text: { textColor: 'text-yellow-900' },
      }}
    >
      {AlertBody(props)}
    </Alert>
  );
};

const ErrorAlert = (props: AlertData) => {
  return (
    <Alert
      data={props}
      mainStylings={{
        background: { backgroundColor: 'bg-red-300' },
        border: { borderWidth: 'border-l-4', borderColor: 'border-red-700' },
        text: { textColor: 'text-red-900' },
      }}
    >
      {AlertBody(props)}
    </Alert>
  );
};

const InfoAlert = (props: AlertData) => {
  return (
    <Alert
      data={props}
      mainStylings={{
        background: { backgroundColor: 'bg-sky-300' },
        border: { borderWidth: 'border-l-4', borderColor: 'border-sky-700' },
        text: { textColor: 'text-sky-900' },
      }}
    >
      {AlertBody(props)}
    </Alert>
  );
};

export { ErrorAlert, InfoAlert, SuccessAlert, WarningAlert };
export default Alert;
