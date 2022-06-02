import { useEffect, useState } from 'react';

import { useAddEventListener } from '../../Methods';

function useInnerHeight() {
  const getInnerHeight = () => {
    if (typeof window !== 'undefined' && window.innerHeight) {
      return window.innerHeight;
    }
    return undefined;
  };

  const [innerHeight, setInnerHeight] = useState<number | undefined>(
    getInnerHeight()
  );

  function handleSize() {
    setInnerHeight(getInnerHeight());
  }

  useAddEventListener('resize', handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return innerHeight;
}

export default useInnerHeight;
