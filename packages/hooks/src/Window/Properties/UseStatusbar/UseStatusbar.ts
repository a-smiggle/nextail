import { useEffect, useState } from 'react';

function useStatusbar() {
  const getStatusbar = () => {
    if (typeof window !== 'undefined' && window.statusbar) {
      return window.statusbar;
    }
    return undefined;
  };

  const [statusbar, setStatusbar] = useState<BarProp | undefined>(
    getStatusbar()
  );

  useEffect(() => {
    setStatusbar(getStatusbar());
  }, []);

  return statusbar;
}

export default useStatusbar;
