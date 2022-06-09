import React, { Fragment, ReactElement } from 'react';

import Button from '../Button';
import createStylings from '../stylings';
import { NavbarProps } from './types';

function NavbarSimple(props: NavbarProps): ReactElement {
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

  const linkStylings = props.linkStylings ? props.linkStylings : {};

  function handleToggle() {
    if (props.toggle && props.open !== undefined) props.toggle(!props.open);
  }

  return (
    <Fragment>
      <nav
        className={
          props.mainStylings?.className
            ? props.mainStylings.className
            : createStylings(mainStylings)
        }
      >
        <div className="flex items-center">
          {props.toggle && props.open !== undefined ? (
            <div className="flex">
              <Button
                mainStylings={{ className: ' ' }}
                onClick={() => handleToggle()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 mr-6 ${
                    props.linkStylings?.className
                      ? props.linkStylings.className
                      : createStylings(linkStylings)
                  }`}
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
          ) : null}
          {props.open && props.allowHideBrand ? null : props.data?.brand}
        </div>
        {props.data?.buttons}
      </nav>
    </Fragment>
  );
}

export default NavbarSimple;
