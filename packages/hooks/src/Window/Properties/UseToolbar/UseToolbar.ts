import { useEffect, useState } from 'react';

function useToolbar() {
  const getToolbar = () => {
    if (typeof window !== 'undefined' && window.toolbar) {
      return window.toolbar;
    }
    return undefined;
  };

  const [toolbar, setToolbar] = useState<BarProp | undefined>(getToolbar());

  useEffect(() => {
    setToolbar(getToolbar());
  }, []);

  return toolbar;
}

export default useToolbar;
