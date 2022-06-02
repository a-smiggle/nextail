import { useEffect, useState } from 'react';

function useOpener() {
  const getOpener = () => {
    if (typeof window !== 'undefined' && window.opener) {
      return window.opener;
    }
    return undefined;
  };
  const [opener, setOpener] = useState<any | undefined>(getOpener());

  useEffect(() => {
    setOpener(getOpener);
  }, []);

  return opener;
}

export default useOpener;
