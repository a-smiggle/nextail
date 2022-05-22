import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import Button from '../Button';
import { SidebarV1 } from '../Sidebar';
import createStylings from '../stylings';
import NavbarDropdown from './NavbarDropdown';
import { NavbarProps } from './types';

function Navbar(props: NavbarProps) {
  const [open, setOpen] = useState(false);

  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'flex';
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-full';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white dark:bg-gray-800';
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.padding = props.mainStylings?.spacing?.padding
      ? props.mainStylings.spacing.padding
      : 'p-4';
    if (!mainStylings.effect) mainStylings.effect = {};
    mainStylings.effect.boxShadow = props.mainStylings?.effect?.boxShadow
      ? props.mainStylings.effect.boxShadow
      : 'shadow-lg';
    if (!mainStylings.flexboxGrid) mainStylings.flexboxGrid = {};
    mainStylings.flexboxGrid.flexDirection = props.mainStylings?.flexboxGrid
      ?.flexDirection
      ? props.mainStylings.flexboxGrid.flexDirection
      : 'flex-row';
    mainStylings.flexboxGrid.justifyContent = props.mainStylings?.flexboxGrid
      ?.justifyContent
      ? props.mainStylings.flexboxGrid.justifyContent
      : 'justify-between';
    mainStylings.flexboxGrid.alignItems = props.mainStylings?.flexboxGrid
      ?.alignItems
      ? props.mainStylings.flexboxGrid.alignItems
      : 'items-center';
  }

  const ref = useRef(null);

  const handleOutsideClick = () => {
    setOpen(false);
  };

  useOnClickOutside(ref, handleOutsideClick);

  return (
    <>
      <nav
        className={
          props.mainStylings?.className
            ? props.mainStylings.className
            : createStylings(mainStylings)
        }
      >
        <div className="flex items-center">
          <div className="flex md:hidden">
            <Button
              mainStylings={{ className: ' ' }}
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-6 ${props.linkStylings}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
          {props.data?.brand}
        </div>

        <div className="flex items-center justify-between">
          <div className="hidden md:flex md:items-center md:justify-between">
            {props.data?.menu?.map((data, index) => {
              if (data && data.subMenu && data.subMenu?.length > 0) {
                return (
                  <NavbarDropdown
                    key={index}
                    data={data}
                    dropdownStylings={props.dropdownStylings}
                    dropdownItemStylings={props.dropdownItemStylings}
                    linkStylings={props.linkStylings}
                  />
                );
              }

              return (
                <Button
                  key={index}
                  link={data.link}
                  mainStylings={props.linkStylings}
                >
                  {data.title}
                </Button>
              );
            })}
          </div>
          <div className="flex items-center justify-between">
            {props.data.buttons}
          </div>
        </div>
      </nav>
      <div
        ref={ref}
        className={`${open ? 'h-screen absolute z-50' : 'hidden'}`}
      >
        <SidebarV1
          data={props.sidebar.data}
          mainStylings={props.sidebar.mainStylings}
          menuStylings={props.sidebar.menuStylings}
          menuActiveStylings={props.sidebar.menuActiveStylings}
        />
      </div>
    </>
  );
}

export default Navbar;
