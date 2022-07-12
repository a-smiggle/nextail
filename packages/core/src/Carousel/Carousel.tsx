import {
  ArrowsExpandIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import React, { ReactElement, useState } from 'react';
import { useInterval } from 'usehooks-ts';

import Button from '../Button';
import createStylings from '../stylings';
import { CarouselProps } from './types';

function Carousel(props: CarouselProps): ReactElement {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  function handlePrevious() {
    let i = current;
    i -= 1;
    if (i < 0) i = props.data.length - 1;
    setCurrent(i);
  }

  function handleNext() {
    let i = current;
    i += 1;
    if (i > props.data.length - 1) i = 0;
    setCurrent(i);
  }

  function handlePause() {
    setPaused(!paused);
  }

  useInterval(
    () => {
      if (!paused) {
        handleNext();
      }
    },
    // Delay in milliseconds or null to stop it
    props.timer && !paused ? props.interval || 5000 : null
  );

  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.sizing) mainStylings.sizing = {};
    mainStylings.sizing.width = props.mainStylings?.sizing?.width
      ? props.mainStylings.sizing.width
      : 'w-full';
    if (!mainStylings.transitionAnimation)
      mainStylings.transitionAnimation = {};
    mainStylings.transitionAnimation.transitionProperty = props.mainStylings
      ?.transitionAnimation?.transitionProperty
      ? props.mainStylings.transitionAnimation.transitionProperty
      : 'transition-all';
    mainStylings.transitionAnimation.transitionDuration = props.mainStylings
      ?.transitionAnimation?.transitionDuration
      ? props.mainStylings.transitionAnimation.transitionDuration
      : 'duration-700';
  }

  const titleStylings = props.titleStylings ? props.titleStylings : {};
  if (titleStylings) {
    if (!titleStylings.text) titleStylings.text = {};
    titleStylings.text.textColor = props.titleStylings?.text?.textColor
      ? props.titleStylings.text.textColor
      : 'text-slate-300';
    titleStylings.text.fontSize = props.titleStylings?.text?.fontSize
      ? props.titleStylings.text.fontSize
      : 'text-2xl';
  }

  const descriptionStylings = props.descriptionStylings
    ? props.descriptionStylings
    : {};
  if (descriptionStylings) {
    if (!descriptionStylings.text) descriptionStylings.text = {};
    descriptionStylings.text.textColor = props.descriptionStylings?.text
      ?.textColor
      ? props.descriptionStylings.text.textColor
      : 'text-slate-300';
    descriptionStylings.text.fontSize = props.descriptionStylings?.text
      ?.fontSize
      ? props.descriptionStylings.text.fontSize
      : 'text-lg';
  }

  return (
    <div
      className={`flex h-full overflow-hidden ${
        fullscreen
          ? 'fixed top-0 left-0 z-50 h-screen w-full bg-white dark:bg-slate-700'
          : 'relative w-fit'
      }`}
    >
      {props.data.map((data, index) => (
        <div
          key={index}
          className={`${
            index === current ? 'relative' : 'absolute opacity-0'
          } ${index !== current && index > current ? 'translate-x-full' : ''} ${
            index !== current && index < current ? '-translate-x-full' : ''
          } ${
            props.mainStylings?.className
              ? props.mainStylings.className
              : createStylings(mainStylings)
          }`}
        >
          {!data.video ? data.element : null}
          {index === current && data.video ? data.element : null}
          <div
            className={`${
              index === current ? '' : 'opacity-0'
            } absolute bottom-0 w-full`}
          >
            {data.show ? (
              <div className="mx-auto mb-10 w-3/4 flex-col text-center">
                <p className={createStylings(titleStylings)}>{data.title}</p>
                <p className={createStylings(descriptionStylings)}>
                  {data.description}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ))}
      <div className="absolute inset-x-5 flex justify-between pt-5">
        {props.timer ? (
          <Button
            key={'Carousel-pause'}
            onClick={() => handlePause()}
            mainStylings={props.buttonStylings}
          >
            {paused ? (
              <PlayIcon className="h-6 w-6" />
            ) : (
              <PauseIcon className="h-6 w-6" />
            )}
          </Button>
        ) : (
          <div></div>
        )}
        {props.fullscreen ? (
          <Button
            key={'Carousel-screen'}
            onClick={() => setFullscreen(!fullscreen)}
            mainStylings={props.buttonStylings}
          >
            {fullscreen ? (
              <XCircleIcon className="h-6 w-6" />
            ) : (
              <ArrowsExpandIcon className="h-6 w-6" />
            )}
          </Button>
        ) : (
          <div />
        )}
      </div>

      <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 justify-between">
        <Button
          key={'Carousel-left'}
          onClick={() => handlePrevious()}
          mainStylings={props.buttonStylings}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <Button
          key={'Carousel-right'}
          onClick={() => handleNext()}
          mainStylings={props.buttonStylings}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

export default Carousel;
