import { useEffect, useState } from 'react';

function useScrollY() {
  const getScrollY = () => {
    if (typeof window !== 'undefined' && window.scrollY) {
      return window.scrollY;
    }
    return undefined;
  };

  const [scrollY, setScrollY] = useState<number | undefined>(getScrollY());

  useEffect(() => {
    setScrollY(getScrollY());
  }, []);

  return scrollY;
}

export default useScrollY;
