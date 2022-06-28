import { useEffect, useState } from 'react';

export default function useUserAgent() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.userAgent) {
      return navigator.userAgent;
    }
    return undefined;
  };
  const [elements, setElements] = useState<string | undefined>(getElements());

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
