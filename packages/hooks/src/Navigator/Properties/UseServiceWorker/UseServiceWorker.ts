import { useEffect, useState } from 'react';

export default function useServiceWorker() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.serviceWorker) {
      return navigator.serviceWorker;
    }
    return undefined;
  };
  const [elements, setElements] = useState<ServiceWorkerContainer | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
