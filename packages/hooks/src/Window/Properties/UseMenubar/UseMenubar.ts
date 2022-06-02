import { useEffect, useState } from 'react';

function useMenubar() {
  const getMenubar = () => {
    if (typeof window !== 'undefined' && window.menubar) {
      return window.menubar;
    }
    return undefined;
  };
  const [menubar, setMenubar] = useState<BarProp | undefined>(getMenubar());

  useEffect(() => {
    setMenubar(getMenubar());
  }, []);

  return menubar;
}

export default useMenubar;
