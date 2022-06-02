import { useEffect, useState } from 'react';

function useLength() {
  const getLength = () => {
    if (typeof window !== 'undefined' && window.length) {
      return window.length;
    }
    return undefined;
  };

  const [length, setLength] = useState<number | undefined>(getLength());

  useEffect(() => {
    setLength(getLength());
  }, []);

  return length;
}

export default useLength;
