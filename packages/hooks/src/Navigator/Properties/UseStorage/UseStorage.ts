import { useEffect, useState } from 'react';

export default function useStorage() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.storage) {
      return navigator.storage;
    }
    return undefined;
  };
  const [elements, setElements] = useState<StorageManager | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
