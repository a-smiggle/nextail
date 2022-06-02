import { useEffect, useState } from 'react';

function useName() {
  const getName = () => {
    if (typeof window !== 'undefined' && window.name) {
      return window.name;
    }
    return undefined;
  };
  const [name, setName] = useState<string | undefined>(getName());

  useEffect(() => {
    setName(getName);
  }, []);

  return name;
}

export default useName;
