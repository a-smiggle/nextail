import React, { useState } from 'react';

import Button from '../Button';
import Dropdown from '../Dropdown';
import { TailwindStylings } from '../types';
import { MenuData } from './types';

interface CustomProps {
  data: MenuData;
  linkStylings?: TailwindStylings;
  dropdownStylings?: TailwindStylings;
  dropdownItemStylings?: TailwindStylings;
}

function NavbarDropdown(props: CustomProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      mainStylings={props.dropdownStylings}
      itemStylings={props.dropdownItemStylings}
      items={props.data.subMenu}
      open={open}
      button={
        <Button
          onClick={() => setOpen(!open)}
          mainStylings={props.linkStylings}
        >
          {props.data.title}
        </Button>
      }
    />
  );
}

export default NavbarDropdown;
