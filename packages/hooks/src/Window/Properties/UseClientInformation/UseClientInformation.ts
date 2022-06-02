import { useEffect, useState } from 'react';

function useClientInformation() {
  const getClientInformation = () => {
    if (typeof window !== 'undefined' && window.clientInformation) {
      return window.clientInformation;
    }
    return undefined;
  };
  const [clientInformation, setClientInformation] = useState<
    Navigator | undefined
  >(getClientInformation());

  useEffect(() => {
    setClientInformation(getClientInformation);
  }, []);

  return clientInformation;
}

export default useClientInformation;
