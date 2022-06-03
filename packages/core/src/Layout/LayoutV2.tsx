import React, { Fragment, PropsWithChildren, ReactElement } from 'react';

import { FooterV1 } from '../Footer';
import { NavbarV2 } from '../Navbar';
import { SidebarV1 } from '../Sidebar';
import createStylings from '../stylings';
import { LayoutProps } from './types';

function LayoutV2(props: PropsWithChildren<LayoutProps>): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.position = props.mainStylings?.layout?.position
      ? props.mainStylings.layout.position
      : 'relative';
    mainStylings.layout.left = props.mainStylings?.layout?.left
      ? props.mainStylings.layout.left
      : `${props.navbar?.open ? 'left-64' : ''}`;
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : `${props.navbar?.open ? 'w-[calc(100%-16rem)]' : ''}`;
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-gray-200 dark:bg-gray-800';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings.text.textColor
      : 'text-black dark:text-gray-200';
    if (!mainStylings.flexboxGrid) mainStylings.flexboxGrid = {};
    mainStylings.flexboxGrid.flexGrow = props.mainStylings?.flexboxGrid
      ?.flexGrow
      ? props.mainStylings.flexboxGrid.flexGrow
      : 'grow';
  }

  return (
    <Fragment>
      <div className="flex h-screen w-full flex-col overflow-x-hidden">
        <div
          className={`${
            props.navbar?.open
              ? 'absolute h-screen' +
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
        <div
          className={`sticky top-0 ${
            props.navbar?.open ? 'w-[calc(100%-16rem)] left-64' : 'w-full'
          } ${props.zIndexNavbar ? props.zIndexNavbar : 'z-20'}`}
        >
          <NavbarV2
            data={props.navbar.data}
            toggle={props.navbar.toggle}
            open={props.navbar.open}
            mainStylings={props.navbar.mainStylings}
            linkStylings={props.navbar.linkStylings}
          />
        </div>

        <main
          className={`${
            props.mainStylings?.className
              ? props.mainStylings.className
              : createStylings(mainStylings)
          }`}
        >
          {props.children}
        </main>
        {props.footer ? (
          <div
            className={`relative ${
              props.navbar?.open ? 'w-[calc(100%-16rem)] left-64' : ''
            }`}
          >
            <FooterV1
              data={props.footer?.data}
              mainStylings={props.footer?.mainStylings}
              linkStylings={props.footer?.linkStylings}
            />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}

export default LayoutV2;
