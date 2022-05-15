import React, { useState } from 'react';

import Accordion from '../Accordion';
import Button from '../Button';
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

  const mobileStylings = props.mobileStylings ? props.mobileStylings : {};
  if (mobileStylings) {
    if (!mobileStylings.layout) mobileStylings.layout = {};
    mobileStylings.layout.display = props.mobileStylings?.layout?.display
      ? props.mobileStylings.layout.display
      : 'flex';
    if (!mobileStylings.sizing) mobileStylings.sizing = {};
    mobileStylings.sizing.width = props.mobileStylings?.sizing?.width
      ? props.mobileStylings.sizing.width
      : 'w-full';
    if (!mobileStylings.background) mobileStylings.background = {};
    mobileStylings.background.backgroundColor = props.mobileStylings?.background
      ?.backgroundColor
      ? props.mobileStylings.background.backgroundColor
      : 'bg-white dark:bg-gray-800';
    if (!mobileStylings.spacing) mobileStylings.spacing = {};
    mobileStylings.spacing.padding = props.mobileStylings?.spacing?.padding
      ? props.mobileStylings.spacing.padding
      : 'p-4';
    if (!mobileStylings.effect) mobileStylings.effect = {};
    mobileStylings.effect.boxShadow = props.mobileStylings?.effect?.boxShadow
      ? props.mobileStylings.effect.boxShadow
      : 'shadow-lg';
    if (!mobileStylings.flexboxGrid) mobileStylings.flexboxGrid = {};
    mobileStylings.flexboxGrid.flexDirection = props.mobileStylings?.flexboxGrid
      ?.flexDirection
      ? props.mobileStylings.flexboxGrid.flexDirection
      : 'flex-col';
    mobileStylings.flexboxGrid.alignItems = props.mobileStylings?.flexboxGrid
      ?.alignItems
      ? props.mobileStylings.flexboxGrid.alignItems
      : 'items-center';
  }

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
          {props.data?.logo}
          {props.data?.title}
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
          <div className="flex md:hidden">
            <Button
              mainStylings={{ className: ' ' }}
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-sky-500 dark:text-slate-300 hover:dark:text-sky-500"
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
        </div>
      </nav>
      <div
        className={`${open ? '' : 'hidden'} h-screen  ${createStylings(
          mobileStylings
        )}`}
      >
        {props.data?.menu?.map((data, index) => {
          if (data && data.subMenu && data.subMenu?.length > 0) {
            return (
              <div key={index}>
                <Accordion
                  flush
                  titleStylings={{
                    border: { borderWidth: ' ' },
                    spacing: { padding: ' ' },
                  }}
                  childStylings={{
                    border: { borderWidth: ' ' },
                    spacing: { padding: ' ' },
                  }}
                  data={[
                    {
                      title: data.title,
                      content: (
                        <div className="flex flex-col items-center">
                          {data.subMenu.map((sub, subIndex) => (
                            <Button
                              key={subIndex}
                              link={sub.link}
                              mainStylings={{ className: ' ' }}
                            >
                              {sub.title}
                            </Button>
                          ))}
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            );
          }
          return (
            <a key={index} href={data.link}>
              <span>{data.title}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
