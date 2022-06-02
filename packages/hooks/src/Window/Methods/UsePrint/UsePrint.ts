import { useEffect } from 'react';

function usePrint() {
  useEffect(() => {
    window.print();
  }, []);
}

export default usePrint;
