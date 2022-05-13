import Progress, {
  ErrorProgress,
  InfoProgress,
  SuccessProgress,
  WarningProgress,
} from '@nextail/core/Progress';
import { NextPage } from 'next';
import React from 'react';

const ProgressPage: NextPage = () => {
  return (
    <div className="mx-auto h-screen w-[75%] flex-col">
      <Progress
        backgroundStylings={{ background: { backgroundColor: 'bg-black' } }}
        progress={25}
      />
      <SuccessProgress progress={10} />
      <WarningProgress progress={20} />
      <ErrorProgress progress={40} />
      <InfoProgress progress={60} />
    </div>
  );
};

export default ProgressPage;
