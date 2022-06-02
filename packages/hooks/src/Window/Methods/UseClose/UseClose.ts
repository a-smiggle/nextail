import { useEffect } from 'react';

function useClose() {
  useEffect(() => {
    window.close();
  }, []);
}

export default useClose;
