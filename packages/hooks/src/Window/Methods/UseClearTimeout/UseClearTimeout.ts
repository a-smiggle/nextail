import { useEffect } from 'react';

function useClearTimeout(id?: number) {
  useEffect(() => {
    window.clearTimeout(id);
  }, []);
}

export default useClearTimeout;
