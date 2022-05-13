import React, { ReactElement } from 'react';

import createStylings from '../stylings';
import { DropdownProps } from './types';

function Dropdown(props: DropdownProps): ReactElement {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.position = props.mainStylings?.layout?.position
      ? props.mainStylings.layout.position
      : 'absolute';
    mainStylings.layout.right = props.mainStylings?.layout?.right
      ? props.mainStylings.layout.right
      : 'right-0';
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.margin = props.mainStylings?.spacing?.margin
      ? props.mainStylings.spacing.margin
      : 'mt-2';
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-56';
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-white dark:bg-gray-800';
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderRadius = props.mainStylings?.border?.borderRadius
      ? props.mainStylings.border.borderRadius
      : 'rounded-md';
    mainStylings.border.ringWidth = props.mainStylings?.border?.ringWidth
      ? props.mainStylings.border.ringWidth
      : 'ring-1';
    mainStylings.border.ringColor = props.mainStylings?.border?.ringColor
      ? props.mainStylings.border.ringColor
      : 'ring-black ring-opacity-25';

    if (!mainStylings.effect) mainStylings.effect = {};
    mainStylings.effect.boxShadow = props.mainStylings?.effect?.boxShadow
      ? props.mainStylings.effect.boxShadow
      : 'shadow-lg';
  }

  const itemStylings = props.itemStylings ? props.itemStylings : {};
  if (itemStylings) {
    if (!itemStylings.spacing) itemStylings.spacing = {};
    itemStylings.spacing.padding = props.itemStylings?.spacing?.padding
      ? props.itemStylings.spacing.padding
      : 'px-4 py-2';
    if (!itemStylings.text) itemStylings.text = {};
    itemStylings.text.textColor = props.itemStylings?.text?.textColor
      ? props.itemStylings.text.textColor
      : 'text-gray-700 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white';

    if (!itemStylings.background) itemStylings.background = {};
    itemStylings.background.backgroundColor = props.itemStylings?.background
      ?.backgroundColor
      ? props.itemStylings.background.backgroundColor
      : 'hover:bg-gray-100 dark:hover:bg-gray-600';
  }

  const dividerStylings = props.dividerStylings ? props.dividerStylings : {};
  if (dividerStylings) {
    if (!dividerStylings.border) dividerStylings.border = {};
    dividerStylings.border.divideWidth = props.dividerStylings?.border
      ?.divideWidth
      ? props.dividerStylings.border.divideWidth
      : 'divide-y';
  }

  return (
    <>
      <div className="relative">
        {props.button}
        <div
          ref={props.clickOutside}
          className={`${props.open ? '' : 'hidden'} ${
            props.mainStylings?.className
              ? props.mainStylings.className
              : createStylings(mainStylings)
          }`}
        >
          <div
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.items.map((item, index) => {
              if (item.divider)
                return (
                  <div key={index} className={createStylings(dividerStylings)}>
                    <div className="block"></div>
                    <div className="block"></div>
                  </div>
                );
              return (
                <a
                  key={index}
                  href={item.link ? item.link : '#'}
                  className={`${
                    item.icon ? 'flex items-center' : 'block'
                  } ${createStylings(itemStylings)}`}
                  role="menuitem"
                >
                  {item.icon}
                  <span className="flex flex-col">
                    <span>{item.title}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
