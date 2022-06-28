import { useEffect, useState } from 'react';

export default function useCredentials() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.credentials) {
      return navigator.credentials;
    }
    return undefined;
  };
  const [elements, setElements] = useState<CredentialsContainer | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
