import { useEffect, useState } from 'react';

function useOuterHeight() {
  const getOuterHeight = () => {
    if (typeof window !== 'undefined' && window.outerHeight) {
      return window.outerHeight;
    }
    return undefined;
  };

  const [outerHeight, setOuterHeight] = useState<number | undefined>(
    getOuterHeight()
  );

  useEffect(() => {
    setOuterHeight(getOuterHeight());
  }, []);

  return outerHeight;
}

export default useOuterHeight;
