import React, { Fragment, PropsWithChildren, ReactElement } from 'react';

import { FooterV1 } from '../Footer';
import { NavbarV1 } from '../Navbar';
import { SidebarV1 } from '../Sidebar';
import { LayoutProps } from './types';

function LayoutV1(props: PropsWithChildren<LayoutProps>): ReactElement {
  return (
    <Fragment>
      <div className="flex h-screen w-screen flex-col overflow-auto">
        <div className={`${props.zIndexNavbar ? props.zIndexNavbar : 'z-20'}`}>
          <NavbarV1
            data={props.navbar.data}
            toggle={props.navbar.toggle}
            open={props.navbar.open}
            mainStylings={props.navbar.mainStylings}
            linkStylings={props.navbar.linkStylings}
            dropdownItemStylings={props.navbar.dropdownItemStylings}
            dropdownStylings={props.navbar.dropdownStylings}
          />
        </div>

        <main className="grow">{props.children}</main>
        {props.footer ? (
          <FooterV1
            data={props.footer?.data}
            mainStylings={props.footer?.mainStylings}
            linkStylings={props.footer?.linkStylings}
          />
        ) : null}
      </div>
      <div
        className={`${
          props.navbar?.open
            ? 'absolute top-0 h-screen' +
              `${props.zIndexSidebar ? props.zIndexSidebar : 'z-10'}`
            : 'hidden'
        }`}
      >
        <SidebarV1
          data={props.sidebar.data}
          mainStylings={props.sidebar.mainStylings}
          menuStylings={props.sidebar.menuStylings}
          menuActiveStylings={props.sidebar.menuActiveStylings}
          toggle={props.sidebar.toggle}
          open={props.sidebar.open}
        />
      </div>
    </Fragment>
  );
}

export default LayoutV1;
