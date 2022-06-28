import { useEffect, useState } from 'react';

export default function useHardwareConcurrency() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) {
      return navigator.hardwareConcurrency;
    }
    return undefined;
  };
  const [elements, setElements] = useState<number | undefined>(getElements());

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
