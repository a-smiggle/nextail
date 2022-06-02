import { useEffect, useState } from 'react';

function useClosed() {
  const getClosed = () => {
    if (typeof window !== 'undefined' && window.closed) {
      return window.closed;
    }
    return undefined;
  };
  const [closed, setClosed] = useState<boolean | undefined>(getClosed());

  useEffect(() => {
    setClosed(getClosed);
  }, []);

  return closed;
}

export default useClosed;
