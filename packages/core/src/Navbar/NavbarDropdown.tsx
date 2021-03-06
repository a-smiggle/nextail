import React, { ReactElement, useState } from 'react';

import Button from '../Button';
import Dropdown from '../Dropdown';
import { MenuData, TailwindStylings } from '../types';

interface CustomProps {
  data: MenuData;
  linkStylings?: TailwindStylings;
  dropdownStylings?: TailwindStylings;
  dropdownItemStylings?: TailwindStylings;
}

function NavbarDropdown(props: CustomProps): ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      toggle={setOpen}
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
