import React from 'react';

import Progress from './Progress';
import { ProgressProps } from './types';

const SuccessProgress = (props: ProgressProps) => (
  <Progress
    progress={props.progress}
    mainStylings={{ background: { backgroundColor: 'bg-green-500' } }}
  />
);

const WarningProgress = (props: ProgressProps) => (
  <Progress
    progress={props.progress}
    mainStylings={{ background: { backgroundColor: 'bg-yellow-500' } }}
  />
);

const ErrorProgress = (props: ProgressProps) => (
  <Progress
    progress={props.progress}
    mainStylings={{ background: { backgroundColor: 'bg-red-500' } }}
  />
);

const InfoProgress = (props: ProgressProps) => (
  <Progress
    progress={props.progress}
    mainStylings={{ background: { backgroundColor: 'bg-sky-300' } }}
  />
);

export { ErrorProgress, InfoProgress, SuccessProgress, WarningProgress };
export default Progress;
