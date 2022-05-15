import React from 'react';

import Dropdown from './Dropdown';
import { DropdownProps } from './types';

const SuccesDropdown = (props: DropdownProps) => (
  <Dropdown
    button={props.button}
    open={props.open}
    toggle={props.toggle}
    items={props.items}
    mainStylings={{
      background: { backgroundColor: 'bg-green-100' },
      border: { ringColor: 'ring-green-500 ring-opacity-25' },
    }}
    dividerStylings={{ border: { divideColor: 'divide-green-500' } }}
    itemStylings={{
      text: { textColor: 'text-green-500 hover:text-white' },
      background: { backgroundColor: 'hover:bg-green-500' },
    }}
  />
);

const SuccesOutlineDropdown = (props: DropdownProps) => (
  <Dropdown
    button={props.button}
    open={props.open}
    toggle={props.toggle}
    items={props.items}
    mainStylings={{
      border: { ringColor: 'ring-green-500' },
    }}
    dividerStylings={{ border: { divideColor: 'divide-green-500' } }}
    itemStylings={{
      text: { textColor: 'text-green-500 hover:text-white' },
      background: { backgroundColor: 'hover:bg-green-500' },
    }}
  />
);

const WarningDropdown = (props: DropdownProps) => (
  <Dropdown
    button={props.button}
    open={props.open}
    toggle={props.toggle}
    items={props.items}
    mainStylings={{
      background: { backgroundColor: 'bg-yellow-100' },
      border: { ringColor: 'ring-yellow-500 ring-opacity-25' },
    }}
    dividerStylings={{ border: { divideColor: 'divide-yellow-500' } }}
    itemStylings={{
      text: { textColor: 'text-yellow-700 hover:text-black' },
      background: { backgroundColor: 'hover:bg-yellow-500' },
    }}
  />
);

const WarningOutlineDropdown = (props: DropdownProps) => (
  <Dropdown
    button={props.button}
    open={props.open}
    toggle={props.toggle}
    items={props.items}
    mainStylings={{
      border: { ringColor: 'ring-yellow-500' },
    }}
    dividerStylings={{ border: { divideColor: 'divide-yellow-500' } }}
    itemStylings={{
      text: { textColor: 'text-yellow-500 hover:text-black' },
      background: { backgroundColor: 'hover:bg-yellow-500' },
    }}
  />
);

const ErrorDropdown = (props: DropdownProps) => (
  <Dropdown
    button={props.button}
    open={props.open}
    toggle={props.toggle}
    items={props.items}
    mainStylings={{
      background: { backgroundColor: 'bg-red-100' },
      border: { ringColor: 'ring-red-500 ring-opacity-25' },
    }}
    dividerStylings={{ border: { divideColor: 'divide-red-500' } }}
    itemStylings={{
      text: { textColor: 'text-red-500 hover:text-white' },
      background: { backgroundColor: 'hover:bg-red-500' },
    }}
  />
);

const ErrorOutlineDropdown = (props: DropdownProps) => (
  <Dropdown
    button={props.button}
    open={props.open}
    toggle={props.toggle}
    items={props.items}
    mainStylings={{
      border: { ringColor: 'ring-red-500' },
    }}
    dividerStylings={{ border: { divideColor: 'divide-red-500' } }}
    itemStylings={{
      text: { textColor: 'text-red-500 hover:text-white' },
      background: { backgroundColor: 'hover:bg-red-500' },
    }}
  />
);

const InfoDropdown = (props: DropdownProps) => (
  <Dropdown
    button={props.button}
    open={props.open}
    toggle={props.toggle}
    items={props.items}
    mainStylings={{
      background: { backgroundColor: 'bg-sky-100' },
      border: { ringColor: 'ring-sky-500 ring-opacity-25' },
    }}
    dividerStylings={{ border: { divideColor: 'divide-sky-500' } }}
    itemStylings={{
      text: { textColor: 'text-sky-700 hover:text-white' },
      background: { backgroundColor: 'hover:bg-sky-500' },
    }}
  />
);

const InfoOutlineDropdown = (props: DropdownProps) => (
  <Dropdown
    button={props.button}
    open={props.open}
    toggle={props.toggle}
    items={props.items}
    mainStylings={{
      border: { ringColor: 'ring-sky-500 ring-opacity-25' },
    }}
    dividerStylings={{ border: { divideColor: 'divide-sky-500' } }}
    itemStylings={{
      text: { textColor: 'text-sky-700 hover:text-white' },
      background: { backgroundColor: 'hover:bg-sky-500' },
    }}
  />
);

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
