import Button, {
  ErrorButton,
  ErrorOutlineButton,
  InfoButton,
  InfoOutlineButton,
  SuccesButton,
  SuccesOutlineButton,
  WarningButton,
  WarningOutlineButton,
} from '@nextail/core/Button';
import { NextPage } from 'next';
import React from 'react';

const ButtonPage: NextPage = () => {
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="flex justify-between p-2">
        <Button>Hey</Button>
        <ErrorButton>Error</ErrorButton>
        <ErrorOutlineButton>Error</ErrorOutlineButton>
        <InfoButton>Info</InfoButton>
        <InfoOutlineButton>Info</InfoOutlineButton>
        <SuccesButton>Success</SuccesButton>
        <SuccesOutlineButton>Success</SuccesOutlineButton>
        <WarningButton>Warning</WarningButton>
        <WarningOutlineButton>Warning</WarningOutlineButton>
      </div>
      <div className="p-2">
        <Button
          mainStylings={{
            border: { borderRadius: 'rounded-full' },
            spacing: { padding: 'p-4', margin: '' },
            text: { lineHeight: ' ' },
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
