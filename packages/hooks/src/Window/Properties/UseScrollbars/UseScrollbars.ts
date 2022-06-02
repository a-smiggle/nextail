import { useEffect, useState } from 'react';

import { useAddEventListener } from '../../Methods';

function useScrollbars() {
  const getScrollbars = () => {
    if (typeof window !== 'undefined' && window.scrollbars) {
      return window.scrollbars;
    }
    return undefined;
  };

  const [scrollbars, setScrollbars] = useState<BarProp | undefined>(
    getScrollbars()
  );

  function handleSize() {
    setScrollbars(getScrollbars());
  }

  useAddEventListener('resize', handleSize);

  useEffect(() => {
    handleSize();
  }, []);

  return scrollbars;
}

export default useScrollbars;
