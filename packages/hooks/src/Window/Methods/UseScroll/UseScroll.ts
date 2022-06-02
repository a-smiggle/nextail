import { useEffect } from 'react';

function useScroll(x: number, y: number) {
  useEffect(() => {
    window.scroll(x, y);
  }, []);
}

export default useScroll;
