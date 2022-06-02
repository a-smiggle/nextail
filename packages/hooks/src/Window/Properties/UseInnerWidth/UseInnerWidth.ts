import { useEffect, useState } from 'react';

import { useAddEventListener } from '../../Methods';

function useInnerWidth() {
  const getInnerWidth = () => {
    if (typeof window !== 'undefined' && window.innerWidth) {
      return window.innerWidth;
    }
    return undefined;
  };

  const [innerWidth, setInnerWidth] = useState<number | undefined>(
    getInnerWidth()
  );

  function handleSize() {
    setInnerWidth(getInnerWidth());
  }

  useAddEventListener('resize', handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return innerWidth;
}

export default useInnerWidth;
