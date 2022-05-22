import { useLocation } from '@nextail/hooks';
import React, { useEffect, useState } from 'react';

import Button from '../Button';
import createStylings from '../stylings';
import { SidebarMenuAccordionProps } from './types';

function SidebarMenuAccordion(props: SidebarMenuAccordionProps) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.menu?.subMenu?.forEach((item) => {
      if (item.link === pathname) setOpen(true);
    });
  }, [pathname]);

  const menuStylings = props.menuStylings ? props.menuStylings : {};
  if (menuStylings) {
    if (!menuStylings.layout) menuStylings.layout = {};
    menuStylings.layout.display = props.menuStylings?.layout?.display
      ? props.menuStylings.layout.display
      : 'flex';
    if (!menuStylings.flexboxGrid) menuStylings.flexboxGrid = {};
    menuStylings.flexboxGrid.alignItems = props.menuStylings?.flexboxGrid
      ?.alignItems
      ? props.menuStylings.flexboxGrid.alignItems
      : 'items-center';
    menuStylings.flexboxGrid.justifyItems = props.menuStylings?.flexboxGrid
      ?.justifyItems
      ? props.menuStylings.flexboxGrid.justifyItems
      : 'justify-between';
    if (!menuStylings.spacing) menuStylings.spacing = {};
    menuStylings.spacing.padding = props.menuStylings?.spacing?.padding
      ? props.menuStylings.spacing.padding
      : 'px-4 py-2';
    menuStylings.spacing.margin = props.menuStylings?.spacing?.margin
      ? props.menuStylings.spacing.margin
      : 'mx-4 mt-5 ';
    if (!menuStylings.sizing) menuStylings.sizing = {};
    menuStylings.sizing.width = props.menuStylings?.sizing?.width
      ? props.menuStylings.sizing.width
      : 'w-full';
    if (!menuStylings.border) menuStylings.border = {};
    menuStylings.border.borderRadius = props.menuStylings?.border?.borderRadius
      ? props.menuStylings.border.borderRadius
      : 'rounded-md';
    if (!menuStylings.background) menuStylings.background = {};
    menuStylings.background.backgroundColor = props.menuStylings?.background
      ?.backgroundColor
      ? props.menuStylings.background.backgroundColor
      : 'hover:bg-gray-200 dark:hover:bg-gray-700';
    if (!menuStylings.text) menuStylings.text = {};
    menuStylings.text.textColor = props.menuStylings?.text?.textColor
      ? props.menuStylings.text.textColor
      : 'text-gray-600 hover:text-gray-700 dark:text-gray-400  dark:hover:text-gray-200';
    menuStylings.text.fontWeight = props.menuStylings?.text?.fontWeight
      ? props.menuStylings.text.fontWeight
      : 'font-medium';
    if (!menuStylings.transitionAnimation)
      menuStylings.transitionAnimation = {};
    menuStylings.transitionAnimation.transitionProperty = props.menuStylings
      ?.transitionAnimation?.transitionProperty
      ? props.menuStylings.transitionAnimation.transitionProperty
      : 'transition-colors';
    menuStylings.transitionAnimation.transitionProperty = props.menuStylings
      ?.transitionAnimation?.transitionDuration
      ? props.menuStylings.transitionAnimation.transitionDuration
      : 'duration-200';
    if (!menuStylings.effect) menuStylings.effect = {};
    menuStylings.effect.boxShadow = props.menuStylings?.effect?.boxShadow
      ? props.menuStylings.effect.boxShadow
      : ' ';
  }

  const menuActiveStylings = props.menuActiveStylings
    ? props.menuActiveStylings
    : {};
  if (menuActiveStylings) {
    if (!menuActiveStylings.layout) menuActiveStylings.layout = {};
    menuActiveStylings.layout.display = props.menuActiveStylings?.layout
      ?.display
      ? props.menuActiveStylings.layout.display
      : 'flex';
    if (!menuActiveStylings.flexboxGrid) menuActiveStylings.flexboxGrid = {};
    menuActiveStylings.flexboxGrid.alignItems = props.menuActiveStylings
      ?.flexboxGrid?.alignItems
      ? props.menuActiveStylings.flexboxGrid.alignItems
      : 'items-center';
    if (!menuActiveStylings.sizing) menuActiveStylings.sizing = {};
    menuActiveStylings.sizing.width = props.menuActiveStylings?.sizing?.width
      ? props.menuActiveStylings.sizing.width
      : 'w-full';
    if (!menuActiveStylings.spacing) menuActiveStylings.spacing = {};
    menuActiveStylings.spacing.padding = props.menuActiveStylings?.spacing
      ?.padding
      ? props.menuActiveStylings.spacing.padding
      : 'px-4 py-2';
    menuActiveStylings.spacing.margin = props.menuActiveStylings?.spacing
      ?.margin
      ? props.menuActiveStylings.spacing.margin
      : 'mx-4 mt-5 ';
    if (!menuActiveStylings.border) menuActiveStylings.border = {};
    menuActiveStylings.border.borderRadius = props.menuActiveStylings?.border
      ?.borderRadius
      ? props.menuActiveStylings.border.borderRadius
      : 'rounded-md';
    if (!menuActiveStylings.background) menuActiveStylings.background = {};
    menuActiveStylings.background.backgroundColor = props.menuActiveStylings
      ?.background?.backgroundColor
      ? props.menuActiveStylings.background.backgroundColor
      : 'hover:bg-gray-200 dark:hover:bg-gray-700';
    if (!menuActiveStylings.text) menuActiveStylings.text = {};
    menuActiveStylings.text.textColor = props.menuActiveStylings?.text
      ?.textColor
      ? props.menuActiveStylings.text.textColor
      : 'text-emerald-500 hover:text-emerald-700 dark:text-emerald-500  dark:hover:text-emerald-700';
    menuActiveStylings.text.fontWeight = props.menuActiveStylings?.text
      ?.fontWeight
      ? props.menuActiveStylings.text.fontWeight
      : 'font-bold';
    if (!menuActiveStylings.transitionAnimation)
      menuActiveStylings.transitionAnimation = {};
    menuActiveStylings.transitionAnimation.transitionProperty = props
      .menuActiveStylings?.transitionAnimation?.transitionProperty
      ? props.menuActiveStylings.transitionAnimation.transitionProperty
      : 'transition-colors';
    menuActiveStylings.transitionAnimation.transitionProperty = props
      .menuActiveStylings?.transitionAnimation?.transitionDuration
      ? props.menuActiveStylings.transitionAnimation.transitionDuration
      : 'duration-200';
    if (!menuActiveStylings.effect) menuActiveStylings.effect = {};
    menuActiveStylings.effect.boxShadow = props.menuActiveStylings?.effect
      ?.boxShadow
      ? props.menuActiveStylings.effect.boxShadow
      : ' ';
  }

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        className={`pr-8 ${
          props.menuStylings?.className
            ? props.menuStylings.className
            : createStylings(menuStylings)
        }`}
      >
        {props.menu?.icon}
        <span>{props.menu?.title}</span>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </a>
      <nav className={`${open ? 'px-8' : 'hidden'}`}>
        {props.menu?.subMenu?.map((item, index) => {
          if (pathname === item.link)
            return (
              <Button
                disabled={!open}
                key={`sidenav-${index}`}
                link={item.link}
                mainStylings={menuActiveStylings}
              >
                {item.icon}
                <span>{item.title}</span>
              </Button>
            );
          return (
            <Button
              disabled={!open}
              key={`sidenav-${index}`}
              link={item.link}
              mainStylings={menuStylings}
            >
              {item.icon}
              <span>{item.title}</span>
            </Button>
          );
        })}
      </nav>
    </>
  );
}

export default SidebarMenuAccordion;
