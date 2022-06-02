import { useEffect } from 'react';

function useMoveBy(x: number, y: number) {
  useEffect(() => {
    window.moveBy(x, y);
  }, []);
}

export default useMoveBy;
