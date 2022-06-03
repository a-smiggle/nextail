import React, { ReactElement, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import createStylings from '../stylings';
import SidebarMenu from './SidebarMenu';
import { SidebarProps } from './types';

function Sidebar(props: SidebarProps): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.display = props.mainStylings?.layout?.display
      ? props.mainStylings.layout.display
      : 'flex';
    if (!mainStylings.flexboxGrid) mainStylings.flexboxGrid = {};
    mainStylings.flexboxGrid.flexDirection = props.mainStylings?.flexboxGrid
      ?.flexDirection
      ? props.mainStylings.flexboxGrid.flexDirection
      : 'flex-col';
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-64';
    mainStylings.sizing.height = props.mainStylings?.sizing?.height
      ? props.mainStylings.sizing.height
      : 'h-screen';
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.padding = props.mainStylings?.spacing?.padding
      ? props.mainStylings.spacing.padding
      : 'px-4 py-8';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white dark:bg-gray-800';
    if (!mainStylings.effect) mainStylings.effect = {};
    mainStylings.effect.boxShadow = props.mainStylings?.effect?.boxShadow
      ? props.mainStylings.effect.boxShadow
      : 'shadow-lg';
  }

  const ref = useRef(null);

  const handleOutsideClick = () => {
    if (props.open && props.toggle) props.toggle(false);
  };

  useOnClickOutside(ref, handleOutsideClick);

  return (
    <div
      ref={ref}
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      {props.data?.brand}

      <div className="mt-6 flex flex-1 flex-col justify-between overflow-hidden hover:overflow-y-auto">
        <SidebarMenu
          menuStylings={props.menuStylings}
          menuActiveStylings={props.menuActiveStylings}
          menu={props.data?.menu}
        />
        {props.data?.bottom}
      </div>
    </div>
  );
}

export default Sidebar;
