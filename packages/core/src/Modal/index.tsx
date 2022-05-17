import React from 'react';

import Modal from './Modal';
import { ModalProps } from './types';

const SuccessModal = (props: ModalProps) => (
  <Modal
    open={props.open}
    toggle={props.toggle}
    header={props.header}
    body={props.body}
    footer={props.footer}
    mainStylings={{
      background: { backgroundColor: 'bg-green-300' },
      border: {
        borderWidth: 'border-4',
        borderColor: 'border-green-700',
      },
      text: { textColor: 'text-green-900' },
    }}
  />
);

const WarningModal = (props: ModalProps) => (
  <Modal
    open={props.open}
    toggle={props.toggle}
    header={props.header}
    body={props.body}
    footer={props.footer}
    mainStylings={{
      background: { backgroundColor: 'bg-yellow-300' },
      border: {
        borderWidth: 'border-4',
        borderColor: 'border-yellow-700',
      },
      text: { textColor: 'text-yellow-900' },
    }}
  />
);

const ErrorModal = (props: ModalProps) => (
  <Modal
    open={props.open}
    toggle={props.toggle}
    header={props.header}
    body={props.body}
    footer={props.footer}
    mainStylings={{
      background: { backgroundColor: 'bg-red-300' },
      border: {
        borderWidth: 'border-4',
        borderColor: 'border-red-700',
      },
      text: { textColor: 'text-red-900' },
    }}
  />
);

const InfoModal = (props: ModalProps) => (
  <Modal
    open={props.open}
    toggle={props.toggle}
    header={props.header}
    body={props.body}
    footer={props.footer}
    mainStylings={{
      background: { backgroundColor: 'bg-sky-300' },
      border: {
        borderWidth: 'border-4',
        borderColor: 'border-sky-700',
      },
      text: { textColor: 'text-sky-900' },
    }}
  />
);

export { ErrorModal, InfoModal, SuccessModal, WarningModal };
export default Modal;
