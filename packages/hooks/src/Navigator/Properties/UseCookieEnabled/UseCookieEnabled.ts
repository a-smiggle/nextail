import { useEffect, useState } from 'react';

export default function useCookieEnabled() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.cookieEnabled) {
      return navigator.cookieEnabled;
    }
    return false;
  };
  const [elements, setElements] = useState<boolean>(getElements());

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
