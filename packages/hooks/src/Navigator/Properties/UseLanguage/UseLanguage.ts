import { useEffect, useState } from 'react';

export default function useLanguage() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.language) {
      return navigator.language;
    }
    return undefined;
  };
  const [elements, setElements] = useState<string | undefined>(getElements());

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
