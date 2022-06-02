import { useEffect, useState } from 'react';

function usePersonalbar() {
  const getPersonalbar = () => {
    if (typeof window !== 'undefined' && window.personalbar) {
      return window.personalbar;
    }
    return undefined;
  };
  const [personalbar, setPersonalbar] = useState<BarProp | undefined>(
    getPersonalbar()
  );

  useEffect(() => {
    setPersonalbar(getPersonalbar);
  }, []);

  return personalbar;
}

export default usePersonalbar;
