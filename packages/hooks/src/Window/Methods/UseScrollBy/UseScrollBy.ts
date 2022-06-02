import { useEffect } from 'react';

function useScrollBy(x: number, y: number) {
  useEffect(() => {
    window.scrollBy(x, y);
  }, []);
}

export default useScrollBy;
