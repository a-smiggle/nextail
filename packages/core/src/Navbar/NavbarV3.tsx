import { MenuIcon } from '@heroicons/react/outline';
import React, { ReactElement } from 'react';

import Button from '../Button';
import createStylings from '../stylings';
import NavbarDropdown from './NavbarDropdown';
import { NavbarProps } from './types';

export default function NavbarV3(props: NavbarProps): ReactElement {
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
    mainStylings.sizing.height = props.mainStylings?.sizing?.height
      ? props.mainStylings.sizing.height
      : 'h-16';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white dark:bg-slate-800';
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

  const linkStylings = props.linkStylings ? props.linkStylings : {};

  function handleToggle() {
    if (props.toggle && props.open !== undefined) props.toggle(!props.open);
  }

  return (
    <nav
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
        {props.data?.brand}
      </div>
      <div className="block lg:hidden">
        {props.toggle && props.open !== undefined ? (
          <div className="flex lg:hidden">
            <Button
              mainStylings={{ className: ' ' }}
              onClick={() => handleToggle()}
            >
              <MenuIcon
                className={`h-6 w-6 ${
                  props.linkStylings?.className
                    ? props.linkStylings.className
                    : createStylings(linkStylings)
                }`}
              />
            </Button>
          </div>
        ) : null}
      </div>
      <div className="hidden w-full lg:order-1 lg:flex lg:w-2/5">
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
      <div className="hidden w-full lg:order-3 lg:flex lg:w-2/5 lg:justify-end lg:text-right">
        {props.data.buttons}
      </div>
    </nav>
  );
}
