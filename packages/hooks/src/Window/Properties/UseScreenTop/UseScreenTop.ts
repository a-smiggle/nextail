import { useEffect, useState } from 'react';

import { useAddEventListener } from '../../Methods';

function useScreenTop() {
  const getScreenTop = () => {
    if (typeof window !== 'undefined' && window.screenTop) {
      return window.screenTop;
    }
    return undefined;
  };

  const [screenTop, setScreenTop] = useState<number | undefined>(
    getScreenTop()
  );

  function handleSize() {
    setScreenTop(getScreenTop());
  }

  useAddEventListener('resize', handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return screenTop;
}

export default useScreenTop;
