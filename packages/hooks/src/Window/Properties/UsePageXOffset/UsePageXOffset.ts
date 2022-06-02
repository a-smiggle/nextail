import { useEffect, useState } from 'react';

function usePageXOffset() {
  const getPageXOffset = () => {
    if (typeof window !== 'undefined' && window.pageXOffset) {
      return window.pageXOffset;
    }
    return undefined;
  };
  const [pageXOffset, setPageXOffset] = useState<number | undefined>(
    getPageXOffset()
  );

  useEffect(() => {
    setPageXOffset(getPageXOffset);
  }, []);

  return pageXOffset;
}

export default usePageXOffset;
