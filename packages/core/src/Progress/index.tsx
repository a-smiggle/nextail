import React, { ReactElement } from 'react';

import Progress from './Progress';
import { ProgressProps } from './types';

const SuccessProgress = (props: ProgressProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-green-500';
  }
  return (
    <Progress
      progress={props.progress}
      mainStylings={mainStylings}
      backgroundStylings={props.backgroundStylings}
    />
  );
};

const WarningProgress = (props: ProgressProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-yellow-500';
  }
  return (
    <Progress
      progress={props.progress}
      mainStylings={mainStylings}
      backgroundStylings={props.backgroundStylings}
    />
  );
};

const ErrorProgress = (props: ProgressProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-red-500';
  }
  return (
    <Progress
      progress={props.progress}
      mainStylings={mainStylings}
      backgroundStylings={props.backgroundStylings}
    />
  );
};

const InfoProgress = (props: ProgressProps): ReactElement => {
  const mainStylings = props.mainStylings ? props.mainStylings : {};
  if (mainStylings) {
    if (!mainStylings.background) mainStylings.background = {};
    mainStylings.background.backgroundColor = props.mainStylings?.background
      ?.backgroundColor
      ? props.mainStylings?.background?.backgroundColor
      : 'bg-sky-500';
  }
  return (
    <Progress
      progress={props.progress}
      mainStylings={mainStylings}
      backgroundStylings={props.backgroundStylings}
    />
  );
};

export { ErrorProgress, InfoProgress, SuccessProgress, WarningProgress };
export default Progress;
