import { useEffect, useState } from 'react';

import { useAddEventListener } from '../../Methods';

function useScreenLeft() {
  const getScreenLeft = () => {
    if (typeof window !== 'undefined' && window.screenLeft) {
      return window.screenLeft;
    }
    return undefined;
  };

  const [screenLeft, setScreenLeft] = useState<number | undefined>(
    getScreenLeft()
  );

  function handleSize() {
    setScreenLeft(getScreenLeft());
  }

  useAddEventListener('resize', handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return screenLeft;
}

export default useScreenLeft;
