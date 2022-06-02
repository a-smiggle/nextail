import { useEffect } from 'react';

function useResizeTo(width: number, height: number) {
  useEffect(() => {
    window.resizeTo(width, height);
  }, []);
}

export default useResizeTo;
