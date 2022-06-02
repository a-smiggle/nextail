import { useEffect } from 'react';

function useClearInterval(id?: number) {
  useEffect(() => {
    window.clearInterval(id);
  }, []);
}

export default useClearInterval;
