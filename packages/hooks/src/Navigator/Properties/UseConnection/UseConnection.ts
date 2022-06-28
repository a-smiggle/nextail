import { useEffect, useState } from 'react';

export default function useConnection() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.connection) {
      return navigator.connection;
    }
    return undefined;
  };
  const [elements, setElements] = useState<NetworkInformation | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
