import { useEffect, useState } from 'react';

export default function UsePermissions() {
  const getElements = () => {
    if (typeof navigator !== 'undefined' && navigator.permissions) {
      return navigator.permissions;
    }
    return undefined;
  };
  const [elements, setElements] = useState<Permissions | undefined>(
    getElements()
  );

  useEffect(() => {
    setElements(getElements);
  }, []);

  return elements;
}
