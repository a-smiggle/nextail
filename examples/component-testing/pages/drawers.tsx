import Drawer from '@nextail/core/Drawer';
import { NextPage } from 'next';
import React, { useState } from 'react';

const DrawerPage: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="absolute bottom-0" onClick={() => setOpen(!open)}>
        Toggle Drawer
      </button>
      <Drawer
        postion="top"
        open={open}
        mainStylings={{ background: { backgroundColor: 'bg-red-500' } }}
      ></Drawer>
    </div>
  );
};

export default DrawerPage;
