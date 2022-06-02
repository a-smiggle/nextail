import { useEffect, useState } from 'react';

function useNavigator() {
  const getNavigator = () => {
    if (typeof window !== 'undefined' && window.clientInformation) {
      return window.clientInformation;
    }
    return undefined;
  };
  const [navigator, setNavigator] = useState<Navigator | undefined>(
    getNavigator()
  );

  useEffect(() => {
    setNavigator(getNavigator);
  }, []);

  return navigator;
}

export default useNavigator;
