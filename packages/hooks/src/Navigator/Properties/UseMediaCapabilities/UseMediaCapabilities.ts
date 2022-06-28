import { useEffect, useState } from 'react';

export default function useMediaCapabilities() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.mediaCapabilities) {
      return navigator.mediaCapabilities;
    }
    return undefined;
  };
  const [elements, setElements] = useState<MediaCapabilities | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
