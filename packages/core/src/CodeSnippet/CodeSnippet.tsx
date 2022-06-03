import React, { PropsWithChildren, ReactElement, useState } from 'react';
import { useCopyToClipboard, useInterval } from 'usehooks-ts';

import Button from '../Button';
import createStylings from '../stylings';
import { CodeSnippetProps } from './types';

function CodeSnippet(props: PropsWithChildren<CodeSnippetProps>): ReactElement {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  useInterval(
    () => {
      copy('');
    },
    value ? props.copyTimeout || null : null
  );

  useInterval(
    () => {
      setCopied(false);
    },
    copied ? 5000 : null
  );

  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.layout) mainStylings.layout = {};
    mainStylings.layout.position = props.mainStylings?.layout?.position
      ? props.mainStylings.layout.position
      : 'relative';
    if (!mainStylings.spacing) mainStylings.spacing = {};
    mainStylings.spacing.padding = props.mainStylings?.spacing?.padding
      ? props.mainStylings.spacing.padding
      : 'py-4 px-8';
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-full';
    if (!mainStylings.border) mainStylings.border = {};
    mainStylings.border.borderWidth = props.mainStylings?.border?.borderWidth
      ? props.mainStylings.border.borderWidth
      : 'border-2';
    mainStylings.border.borderColor = props.mainStylings?.border?.borderColor
      ? props.mainStylings.border.borderColor
      : `${copied ? 'border-green-500' : 'border-slate-200'}`;
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings.background.backgroundColor
      : 'bg-slate-700 ';
    if (!mainStylings.text) mainStylings.text = {};
    mainStylings.text.textColor = props.mainStylings?.text?.textColor
      ? props.mainStylings.text.textColor
      : 'text-white';
    if (!mainStylings.transitionAnimation)
      mainStylings.transitionAnimation = {};
    mainStylings.transitionAnimation.transitionProperty = props.mainStylings
      ?.transitionAnimation?.transitionProperty
      ? props.mainStylings.transitionAnimation.transitionProperty
      : 'transition-all';
    mainStylings.transitionAnimation.transitionDuration = props.mainStylings
      ?.transitionAnimation?.transitionDuration
      ? props.mainStylings.transitionAnimation.transitionDuration
      : 'duration-500';
  }

  const buttonStylings = props.buttonStylings ? props.buttonStylings : {};
  if (buttonStylings) {
    if (!buttonStylings.border) buttonStylings.border = {};
    buttonStylings.border.borderRadius = props.buttonStylings?.border
      ?.borderRadius
      ? props.buttonStylings.border.borderRadius
      : 'rounded-full';
    if (!buttonStylings.spacing) buttonStylings.spacing = {};
    buttonStylings.spacing.padding = props.buttonStylings?.spacing?.padding
      ? props.buttonStylings.spacing.padding
      : ' ';
    if (!buttonStylings.background) buttonStylings.background = {};
    buttonStylings.background.backgroundColor = props.buttonStylings?.background
      ?.backgroundColor
      ? props.buttonStylings.background.backgroundColor
      : 'bg-slate-700';
    if (!buttonStylings.effect) buttonStylings.effect = {};
    buttonStylings.effect.boxShadow = props.buttonStylings?.effect?.boxShadow
      ? props.buttonStylings.effect.boxShadow
      : ' ';
    if (!buttonStylings.transitionAnimation)
      buttonStylings.transitionAnimation = {};
    buttonStylings.transitionAnimation.transitionProperty = props.buttonStylings
      ?.transitionAnimation?.transitionProperty
      ? props.buttonStylings.transitionAnimation.transitionProperty
      : 'transition-all';
    buttonStylings.transitionAnimation.transitionDuration = props.buttonStylings
      ?.transitionAnimation?.transitionDuration
      ? props.buttonStylings.transitionAnimation.transitionDuration
      : 'duration-500';
    if (!buttonStylings.text) buttonStylings.text = {};
    buttonStylings.text.textColor = props.buttonStylings?.text?.textColor
      ? props.buttonStylings.text.textColor
      : `${copied ? 'text-green-500' : 'text-slate-300'}`;
  }

  function handleClick() {
    copy(props.data);
    setCopied(true);
  }

  return (
    <div
      className={
        props.mainStylings?.className
          ? props.mainStylings.className
          : createStylings(mainStylings)
      }
    >
      <div className="absolute top-2 right-2">
        <Button mainStylings={buttonStylings} onClick={() => handleClick()}>
          <div className="flex items-center">
            {copied === true ? 'Copied' : null}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
        </Button>
      </div>
      <div className="overflow-auto whitespace-pre">
        <code onClick={() => handleClick()}>
          {props.children ? props.children : props.data}
        </code>
      </div>
    </div>
  );
}

export default CodeSnippet;
