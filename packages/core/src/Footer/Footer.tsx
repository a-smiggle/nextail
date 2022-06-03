import React, { ReactElement } from 'react';

import createStylings from '../stylings';
import { FooterProps } from './types';

function Footer(props: FooterProps): ReactElement {
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
      : 'flex-col md:flex-row';
    mainStylings.flexboxGrid.justifyContent = props.mainStylings?.flexboxGrid
      ?.justifyContent
      ? props.mainStylings.flexboxGrid.justifyContent
      : 'justify-between';
    mainStylings.flexboxGrid.alignItems = props.mainStylings?.flexboxGrid
      ?.alignItems
      ? props.mainStylings.flexboxGrid.alignItems
      : 'text-sm';
  }

  const linkStylings = props.linkStylings ? props.linkStylings : {};
  if (linkStylings) {
    if (!linkStylings.text) linkStylings.text = {};
    linkStylings.text.fontSize = props.linkStylings?.text?.fontSize
      ? props.linkStylings.text.fontSize
      : 'items-center';
    linkStylings.text.textTransform = props.linkStylings?.text?.textTransform
      ? props.linkStylings.text.textTransform
      : 'capitalize hover:underline';
    linkStylings.text.textColor = props.linkStylings?.text?.textColor
      ? props.linkStylings.text.textColor
      : 'text-gray-500 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-500';
    if (!linkStylings.transitionAnimation)
      linkStylings.transitionAnimation = {};
    linkStylings.transitionAnimation.transitionProperty = props.linkStylings
      ?.transitionAnimation?.transitionProperty
      ? props.linkStylings.transitionAnimation.transitionProperty
      : 'transition-colors';
    linkStylings.transitionAnimation.transitionDuration = props.linkStylings
      ?.transitionAnimation?.transitionDuration
      ? props.linkStylings.transitionAnimation.transitionDuration
      : 'duration-300';
  }

  return (
    <footer
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
      {props.data?.credit ? (
        <div className="hidden md:flex md:items-center">
          {props.data?.credit}
        </div>
      ) : null}

      <div className="space-x-2 md:flex md:items-center md:justify-between">
        {props.data?.links?.map((data, index) => (
          <a
            key={index}
            href={data.link}
            className={
              props.linkStylings?.className
                ? props.linkStylings.className
                : createStylings(linkStylings)
            }
          >
            {data.title}
          </a>
        ))}

        {props.data?.buttons}
      </div>
      {props.data?.credit ? (
        <div className="flex items-center md:hidden">{props.data?.credit}</div>
      ) : null}
    </footer>
  );
}

export default Footer;
