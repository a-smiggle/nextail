import React, { ReactElement } from 'react';

import Modal from './Modal';
import { ModalProps } from './types';

const SuccessModal = (props: ModalProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-green-700';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-green-300';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-green-700';
  }
  return (
    <Modal
      open={props.open}
      toggle={props.toggle}
      header={props.header}
      body={props.body}
      footer={props.footer}
      mainStylings={mainStylings}
      backdropStylings={props.backdropStylings}
    />
  );
};

const WarningModal = (props: ModalProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-yellow-700';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-yellow-300';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-yellow-700';
  }
  return (
    <Modal
      open={props.open}
      toggle={props.toggle}
      header={props.header}
      body={props.body}
      footer={props.footer}
      mainStylings={mainStylings}
      backdropStylings={props.backdropStylings}
    />
  );
};

const ErrorModal = (props: ModalProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-red-700';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-red-300';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-red-700';
  }
  return (
    <Modal
      open={props.open}
      toggle={props.toggle}
      header={props.header}
      body={props.body}
      footer={props.footer}
      mainStylings={mainStylings}
      backdropStylings={props.backdropStylings}
    />
  );
};

const InfoModal = (props: ModalProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings?.border?.borderWidth
      : 'border-4';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings?.border?.borderColor
      : 'border-sky-700';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-sky-300';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings?.text?.textColor
      : 'text-sky-700';
  }
  return (
    <Modal
      open={props.open}
      toggle={props.toggle}
      header={props.header}
      body={props.body}
      footer={props.footer}
      mainStylings={mainStylings}
      backdropStylings={props.backdropStylings}
    />
  );
};

export { ErrorModal, InfoModal, SuccessModal, WarningModal };
export default Modal;
