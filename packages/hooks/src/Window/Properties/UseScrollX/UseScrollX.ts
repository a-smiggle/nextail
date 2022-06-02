import { useEffect, useState } from 'react';

function useScrollX() {
  const getScrollX = () => {
    if (typeof window !== 'undefined' && window.scrollX) {
      return window.scrollX;
    }
    return undefined;
  };

  const [scrollX, setScrollX] = useState<number | undefined>(getScrollX());

  useEffect(() => {
    setScrollX(getScrollX());
  }, []);

  return scrollX;
}

export default useScrollX;
