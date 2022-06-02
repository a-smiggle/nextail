import { useEffect } from 'react';

function useScrollTo(x: number, y: number) {
  useEffect(() => {
    window.scrollTo(x, y);
  }, []);
}

export default useScrollTo;
