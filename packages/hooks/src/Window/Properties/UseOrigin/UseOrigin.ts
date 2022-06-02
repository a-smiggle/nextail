import { useEffect, useState } from 'react';

function useOrigin() {
  const getOrigin = () => {
    if (typeof window !== 'undefined' && window.origin) {
      return window.origin;
    }
    return undefined;
  };
  const [originValue, setOrigin] = useState<string | undefined>(getOrigin());

  useEffect(() => {
    setOrigin(getOrigin);
  }, []);

  return originValue;
}

export default useOrigin;
