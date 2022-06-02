import { useEffect, useState } from 'react';

function useCrypto() {
  const getCrypto = () => {
    if (typeof window !== 'undefined' && window.crypto) {
      return window.crypto;
    }
    return undefined;
  };

  const [crypto, setCrypto] = useState<Crypto | undefined>(getCrypto());

  useEffect(() => {
    setCrypto(getCrypto());
  }, []);

  return crypto;
}

export default useCrypto;
