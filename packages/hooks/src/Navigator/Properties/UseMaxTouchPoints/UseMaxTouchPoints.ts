import { useEffect, useState } from 'react';

export default function useMaxTouchPoints() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints) {
      return navigator.maxTouchPoints;
    }
    return undefined;
  };
  const [elements, setElements] = useState<number | undefined>(getElements());

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
