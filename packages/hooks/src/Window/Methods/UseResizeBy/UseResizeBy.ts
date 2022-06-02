import { useEffect } from 'react';

function useResizeBy(x: number, y: number) {
  useEffect(() => {
    window.resizeBy(x, y);
  }, []);
}

export default useResizeBy;
