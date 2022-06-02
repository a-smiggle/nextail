import { useEffect } from 'react';

function useStop() {
  useEffect(() => {
    window.stop();
  }, []);
}

export default useStop;
