import { ErrorButton } from '@nextail/core/Button';
import { SuccesOutlineDropdown } from '@nextail/core/Dropdown';
import { NextPage } from 'next';
import React, { useState } from 'react';

const Dropdowns: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen w-full bg-slate-400">
      <div className="flex justify-center p-2">
        <SuccesOutlineDropdown
          open={open}
          button={
            <ErrorButton onClick={() => setOpen(!open)}>Press Me</ErrorButton>
          }
          items={[
            { title: 'Hello' },
            { divider: true },
            { title: 'Hellow', icon: <></> },
          ]}
        />
      </div>
    </div>
  );
};

export default Dropdowns;
