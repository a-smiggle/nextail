import Spinner from '@nextail/core/Spinner';
import { NextPage } from 'next';
import React, { useState } from 'react';

const SpinnersPage: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen w-full bg-white">
      <div>
        <div>Spinner</div>

        <Spinner />
      </div>
      <div>
        <div>Spinner Dashed</div>

        <Spinner dashed />
      </div>
      <div>Spinner Closed</div>
      <div className="flex">
        <Spinner closed />
      </div>
      <div>Spinner Closed Dashed</div>
      <div className="flex">
        <Spinner closed dashed />
      </div>
    </div>
  );
};

export default SpinnersPage;
