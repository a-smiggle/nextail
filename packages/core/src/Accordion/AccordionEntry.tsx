import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import React, { Fragment, ReactElement, useState } from 'react';

import createStylings from '../stylings';
import { AccordionEntryProps } from './types';

function AccordionEntry(props: AccordionEntryProps): ReactElement {
  const [open, setOpen] = useState(false);

  const titleStylings = props.titleStylings ? props.titleStylings : {};
  if (titleStylings) {
    if (!titleStylings.border) titleStylings.border = {};
    titleStylings.border.borderWidth = props.titleStylings?.border?.borderWidth
      ? props.titleStylings.border.borderWidth
      : 'border-b';
    if (!titleStylings.layout) titleStylings.layout = {};
    titleStylings.layout.display = props.titleStylings?.layout?.display
      ? props.titleStylings.layout.display
      : 'flex';
    if (!titleStylings.flexboxGrid) titleStylings.flexboxGrid = {};
    titleStylings.flexboxGrid.alignItems = props.titleStylings?.flexboxGrid
      ?.alignItems
      ? props.titleStylings.flexboxGrid.alignItems
      : 'items-center';
    titleStylings.flexboxGrid.justifyItems = props.titleStylings?.flexboxGrid
      ?.justifyItems
      ? props.titleStylings.flexboxGrid.justifyItems
      : 'justify-between';
    if (!titleStylings.spacing) titleStylings.spacing = {};
    titleStylings.spacing.padding = props.titleStylings?.spacing?.padding
      ? props.titleStylings.spacing.padding
      : 'px-10 py-4';
    if (!titleStylings.interactivity) titleStylings.interactivity = {};
    titleStylings.interactivity.cursor = props.titleStylings?.interactivity
      ?.cursor
      ? props.titleStylings.interactivity.cursor
      : 'cursor-pointer';
    if (!titleStylings.text) titleStylings.text = {};
    titleStylings.text.lineHeight = props.titleStylings?.text?.lineHeight
      ? props.titleStylings.text.lineHeight
      : 'leading-normal';
  }

  const titleActiveStylings = props.titleActiveStylings
    ? props.titleActiveStylings
    : {};
  if (titleActiveStylings) {
    if (!titleActiveStylings.border) titleActiveStylings.border = {};
    titleActiveStylings.border.borderWidth = props.titleActiveStylings?.border
      ?.borderWidth
      ? props.titleActiveStylings.border.borderWidth
      : 'border-b';
    if (!titleActiveStylings.layout) titleActiveStylings.layout = {};
    titleActiveStylings.layout.display = props.titleActiveStylings?.layout
      ?.display
      ? props.titleActiveStylings.layout.display
      : 'flex';
    if (!titleActiveStylings.flexboxGrid) titleActiveStylings.flexboxGrid = {};
    titleActiveStylings.flexboxGrid.alignItems = props.titleActiveStylings
      ?.flexboxGrid?.alignItems
      ? props.titleActiveStylings.flexboxGrid.alignItems
      : 'items-center';
    titleActiveStylings.flexboxGrid.justifyItems = props.titleActiveStylings
      ?.flexboxGrid?.justifyItems
      ? props.titleActiveStylings.flexboxGrid.justifyItems
      : 'justify-between';
    if (!titleActiveStylings.spacing) titleActiveStylings.spacing = {};
    titleActiveStylings.spacing.padding = props.titleActiveStylings?.spacing
      ?.padding
      ? props.titleActiveStylings.spacing.padding
      : 'px-10 py-4';
    if (!titleActiveStylings.interactivity)
      titleActiveStylings.interactivity = {};
    titleActiveStylings.interactivity.cursor = props.titleActiveStylings
      ?.interactivity?.cursor
      ? props.titleActiveStylings.interactivity.cursor
      : 'cursor-pointer';
    if (!titleActiveStylings.text) titleActiveStylings.text = {};
    titleActiveStylings.text.lineHeight = props.titleActiveStylings?.text
      ?.lineHeight
      ? props.titleActiveStylings.text.lineHeight
      : 'leading-normal';
    titleActiveStylings.text.textColor = props.titleActiveStylings?.text
      ?.textColor
      ? props.titleActiveStylings.text.textColor
      : 'text-emerald-500';
    titleActiveStylings.text.fontWeight = props.titleActiveStylings?.text
      ?.fontWeight
      ? props.titleActiveStylings.text.fontWeight
      : 'font-bold';
  }

  const childStylings = props.childStylings ? props.childStylings : {};
  if (childStylings) {
    if (!childStylings.border) childStylings.border = {};
    childStylings.border.borderWidth = props.childStylings?.border?.borderWidth
      ? props.childStylings.border.borderWidth
      : 'border-b';
    if (!childStylings.spacing) childStylings.spacing = {};
    childStylings.spacing.padding = props.childStylings?.spacing?.padding
      ? props.childStylings.spacing.padding
      : 'px-10 py-5';
    if (!childStylings.transitionAnimation)
      childStylings.transitionAnimation = {};
    childStylings.transitionAnimation.transitionProperty = props.childStylings
      ?.transitionAnimation?.transitionProperty
      ? props.childStylings.transitionAnimation.transitionProperty
      : 'transition-all';
    childStylings.transitionAnimation.transitionDuration = props.childStylings
      ?.transitionAnimation?.transitionDuration
      ? props.childStylings.transitionAnimation.transitionDuration
      : 'duration-500';
  }
  return (
    <Fragment>
      <a
        onClick={() => setOpen(!open)}
        className={
          open
            ? `${
                props.titleActiveStylings?.className
                  ? props.titleActiveStylings.className
                  : createStylings(titleActiveStylings)
              }`
            : `${
                props.titleStylings?.className
                  ? props.titleStylings.className
                  : createStylings(titleStylings)
              }`
        }
      >
        <span>{props.data.title}</span>
        {open ? (
          <ChevronLeftIcon className="h-4 w-4" />
        ) : (
          <ChevronDownIcon className="h-4 w-4" />
        )}
      </a>

      {typeof props.data.content === 'string' ? (
        <div
          className={`${open ? '' : 'hidden'}  ${
            props.childStylings?.className
              ? props.childStylings.className
              : createStylings(childStylings)
          }`}
        >
          {props.data.content}
        </div>
      ) : (
        <div className={`${open ? '' : 'hidden'} `}>{props.data.content}</div>
      )}
    </Fragment>
  );
}

export default AccordionEntry;
