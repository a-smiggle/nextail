import { useEffect, useState } from 'react';

function usePageYOffset() {
  const getPageYOffset = () => {
    if (typeof window !== 'undefined' && window.pageYOffset) {
      return window.pageYOffset;
    }
    return undefined;
  };
  const [pageYOffset, setPageYOffset] = useState<number | undefined>(
    getPageYOffset()
  );

  useEffect(() => {
    setPageYOffset(getPageYOffset);
  }, []);

  return pageYOffset;
}

export default usePageYOffset;
