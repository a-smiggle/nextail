import { useEffect } from 'react';

function useMoveTo(x: number, y: number) {
  useEffect(() => {
    window.moveTo(x, y);
  }, []);
}

export default useMoveTo;
