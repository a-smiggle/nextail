import { useEffect } from 'react';

function useMatchMedia(query: string) {
  useEffect(() => {
    window.matchMedia(query);
  }, []);
}

export default useMatchMedia;
