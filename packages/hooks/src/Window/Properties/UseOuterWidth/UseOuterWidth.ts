import { useEffect, useState } from 'react';

function useOuterWidth() {
  const getOuterWidth = () => {
    if (typeof window !== 'undefined' && window.outerWidth) {
      return window.outerWidth;
    }
    return undefined;
  };

  const [outerWidth, setOuterWidth] = useState<number | undefined>(
    getOuterWidth()
  );

  useEffect(() => {
    setOuterWidth(getOuterWidth());
  }, []);

  return outerWidth;
}

export default useOuterWidth;
