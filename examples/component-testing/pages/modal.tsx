import Modal from '@nextail/core/Modal';
import { NextPage } from 'next';
import React, { useState } from 'react';

const ModalPage: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="absolute bottom-0" onClick={() => setOpen(!open)}>
        Toggle Modal
      </button>
      {open ? (
        <Modal toggle={<button onClick={() => setOpen(!open)}>Close</button>} />
      ) : null}
    </div>
  );
};

export default ModalPage;
