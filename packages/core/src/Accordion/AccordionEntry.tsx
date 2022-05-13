import React, { ReactElement, useState } from 'react';

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
      : 'block';
    if (!titleStylings.spacing) titleStylings.spacing = {};
    titleStylings.spacing.padding = props.titleStylings?.spacing?.padding
      ? props.titleStylings.spacing.padding
      : 'px-10 py-5';
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
    <div className="w-full overflow-hidden">
      <div className="flex justify-between">
        <label
          onClick={() => setOpen(!open)}
          className={
            props.titleStylings?.className
              ? props.titleStylings.className
              : createStylings(titleStylings)
          }
        >
          {props.data.title}
        </label>
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
      </div>
      <div
        className={`${open ? '' : 'hidden'}  ${
          props.childStylings?.className
            ? props.childStylings.className
            : createStylings(childStylings)
        }`}
      >
        {props.data.content}
      </div>
    </div>
  );
}

export default AccordionEntry;
