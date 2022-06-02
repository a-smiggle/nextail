import { useEffect } from 'react';

function useOpen(url?: string, target?: string, features?: string) {
  useEffect(() => {
    window.open(url, target, features);
  }, []);
}

export default useOpen;
