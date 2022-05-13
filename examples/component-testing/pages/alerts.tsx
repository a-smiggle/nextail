import Alert, { InfoAlert, SuccessAlert } from '@nextail/core/Alert';
import AlertContainer from '@nextail/core/AlertContainer';
import { NextPage } from 'next';
import React, { useState } from 'react';

const Alerts: NextPage = () => {
  const [AlertOpen, setAlertOpen] = useState(false);

  return (
    <div className="flex">
      <button
        className="absolute bottom-0 left-20"
        onClick={() => setAlertOpen(!AlertOpen)}
      >
        Toggle Alert
      </button>
      <AlertContainer
        toggle={<button onClick={() => setAlertOpen(!AlertOpen)}>Close</button>}
        backgroundStylings={{}}
        mainStylings={{
          background: { backgroundColor: 'bg-slate-300' },
        }}
        open={AlertOpen}
      >
        <Alert
          mainStylings={{
            border: { borderColor: 'border-black', borderWidth: 'border-4' },
            background: { backgroundColor: 'bg-red-500' },
          }}
        />
        <Alert
          mainStylings={{
            className:
              'm-2 bg-green-500 border-l-4 border-slate-700 max-w-sm text-black dark:text-slate-300 shadow-lg rounded-md relative h-16 w-74',
          }}
        />

        <SuccessAlert title="Hello" message="Hello" timestamp="000Z" />
        <InfoAlert title="Hello" message="Hello" timestamp="000Z" />
      </AlertContainer>
    </div>
  );
};

export default Alerts;
