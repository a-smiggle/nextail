import React, { ReactElement } from 'react';

import Dropdown from './Dropdown';
import { DropdownProps } from './types';

const SuccesDropdown = (props: DropdownProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings?.border?.ringColor
      : 'ring-green-500 ring-opacity-25';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-green-100';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.ringColor = props.dividerStylings?.border?.ringColor
      ? props.dividerStylings?.border?.divideColor
      : 'divide-green-500';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings?.background?.backgroundColor
      : 'hover:bg-green-500';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings?.text?.textColor
      : 'text-green-500 hover:text-white';
  }

  return (
    <Dropdown
      button={props.button}
      open={props.open}
      toggle={props.toggle}
      items={props.items}
      mainStylings={mainStylings}
      dividerStylings={dividerStylings}
      itemStylings={itemStylings}
    />
  );
};

const SuccesOutlineDropdown = (props: DropdownProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings?.border?.ringColor
      : 'ring-green-500';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.ringColor = props.dividerStylings?.border?.ringColor
      ? props.dividerStylings?.border?.divideColor
      : 'divide-green-500';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings?.background?.backgroundColor
      : 'hover:bg-green-500';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings?.text?.textColor
      : 'text-green-500 hover:text-white';
  }
  return (
    <Dropdown
      button={props.button}
      open={props.open}
      toggle={props.toggle}
      items={props.items}
      mainStylings={mainStylings}
      dividerStylings={dividerStylings}
      itemStylings={itemStylings}
    />
  );
};

const WarningDropdown = (props: DropdownProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings?.border?.ringColor
      : 'ring-yellow-500 ring-opacity-25';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-yellow-100';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.ringColor = props.dividerStylings?.border?.ringColor
      ? props.dividerStylings?.border?.divideColor
      : 'divide-yellow-500';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings?.background?.backgroundColor
      : 'hover:bg-yellow-500';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings?.text?.textColor
      : 'text-yellow-500 hover:text-black';
  }

  return (
    <Dropdown
      button={props.button}
      open={props.open}
      toggle={props.toggle}
      items={props.items}
      mainStylings={mainStylings}
      dividerStylings={dividerStylings}
      itemStylings={itemStylings}
    />
  );
};

const WarningOutlineDropdown = (props: DropdownProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings?.border?.ringColor
      : 'ring-yellow-500';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.ringColor = props.dividerStylings?.border?.ringColor
      ? props.dividerStylings?.border?.divideColor
      : 'divide-yellow-500';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings?.background?.backgroundColor
      : 'hover:bg-yellow-500';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings?.text?.textColor
      : 'text-yellow-500 hover:text-black';
  }
  return (
    <Dropdown
      button={props.button}
      open={props.open}
      toggle={props.toggle}
      items={props.items}
      mainStylings={mainStylings}
      dividerStylings={dividerStylings}
      itemStylings={itemStylings}
    />
  );
};

const ErrorDropdown = (props: DropdownProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings?.border?.ringColor
      : 'ring-red-500 ring-opacity-25';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-red-100';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.ringColor = props.dividerStylings?.border?.ringColor
      ? props.dividerStylings?.border?.divideColor
      : 'divide-red-500';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings?.background?.backgroundColor
      : 'hover:bg-red-500';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings?.text?.textColor
      : 'text-red-500 hover:text-white';
  }
  return (
    <Dropdown
      button={props.button}
      open={props.open}
      toggle={props.toggle}
      items={props.items}
      mainStylings={mainStylings}
      dividerStylings={dividerStylings}
      itemStylings={itemStylings}
    />
  );
};

const ErrorOutlineDropdown = (props: DropdownProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings?.border?.ringColor
      : 'ring-red-500';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.ringColor = props.dividerStylings?.border?.ringColor
      ? props.dividerStylings?.border?.divideColor
      : 'divide-red-500';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings?.background?.backgroundColor
      : 'hover:bg-red-500';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings?.text?.textColor
      : 'text-red-500 hover:text-white';
  }
  return (
    <Dropdown
      button={props.button}
      open={props.open}
      toggle={props.toggle}
      items={props.items}
      mainStylings={mainStylings}
      dividerStylings={dividerStylings}
      itemStylings={itemStylings}
    />
  );
};

const InfoDropdown = (props: DropdownProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings?.border?.ringColor
      : 'ring-sky-500 ring-opacity-25';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-sky-100';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.ringColor = props.dividerStylings?.border?.ringColor
      ? props.dividerStylings?.border?.divideColor
      : 'divide-sky-500';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings?.background?.backgroundColor
      : 'hover:bg-sky-500';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings?.text?.textColor
      : 'text-sky-500 hover:text-white';
  }
  return (
    <Dropdown
      button={props.button}
      open={props.open}
      toggle={props.toggle}
      items={props.items}
      mainStylings={mainStylings}
      dividerStylings={dividerStylings}
      itemStylings={itemStylings}
    />
  );
};

const InfoOutlineDropdown = (props: DropdownProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings?.border?.ringColor
      : 'ring-sky-500';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.ringColor = props.dividerStylings?.border?.ringColor
      ? props.dividerStylings?.border?.divideColor
      : 'divide-sky-500';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings?.background?.backgroundColor
      : 'hover:bg-sky-500';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings?.text?.textColor
      : 'text-sky-500 hover:text-white';
  }

  return (
    <Dropdown
      button={props.button}
      open={props.open}
      toggle={props.toggle}
      items={props.items}
      mainStylings={mainStylings}
      dividerStylings={dividerStylings}
      itemStylings={itemStylings}
    />
  );
};

export {
  ErrorDropdown,
  ErrorOutlineDropdown,
  InfoDropdown,
  InfoOutlineDropdown,
  SuccesDropdown,
  SuccesOutlineDropdown,
  WarningDropdown,
  WarningOutlineDropdown,
};

export default Dropdown;
