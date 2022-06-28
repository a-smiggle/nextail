import { useEffect, useState } from 'react';

export default function useOnline() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.onLine) {
      return navigator.onLine;
    }
    return undefined;
  };
  const [elements, setElements] = useState<boolean | undefined>(getElements());

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
