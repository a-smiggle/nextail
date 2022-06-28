import { useEffect, useState } from 'react';

export default function useGeoLocation() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      return navigator.geolocation;
    }
    return undefined;
  };
  const [elements, setElements] = useState<Geolocation | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
