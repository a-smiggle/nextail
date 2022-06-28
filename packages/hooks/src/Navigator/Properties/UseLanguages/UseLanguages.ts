import { useEffect, useState } from 'react';

export default function useLanguages() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.languages) {
      return navigator.languages;
    }
    return undefined;
  };
  const [elements, setElements] = useState<readonly string[] | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
