import { useEffect, useState } from 'react';

export default function useWebdriver() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.webdriver) {
      return navigator.webdriver;
    }
    return undefined;
  };
  const [elements, setElements] = useState<boolean | undefined>(getElements());

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
