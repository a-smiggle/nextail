import { useEffect, useState } from 'react';

function useParent() {
  const getParent = () => {
    if (typeof window !== 'undefined' && window.parent) {
      return window.parent;
    }
    return undefined;
  };
  const [parent, setParent] = useState<Window | undefined>(getParent());

  useEffect(() => {
    setParent(getParent);
  }, []);

  return parent;
}

export default useParent;
