import { useEffect, useState } from 'react';

export default function useMediaDevices() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.mediaDevices) {
      return navigator.mediaDevices;
    }
    return undefined;
  };
  const [elements, setElements] = useState<MediaDevices | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
