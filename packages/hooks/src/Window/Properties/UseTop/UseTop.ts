import { useEffect, useState } from 'react';

function useTop() {
  const getTop = () => {
    if (typeof window !== 'undefined' && window.top) {
      return window.top;
    }
    return undefined;
  };

  const [top, setTop] = useState<Window | undefined>(getTop());

  useEffect(() => {
    setTop(getTop());
  }, []);

  return top;
}

export default useTop;
