import { useEffect, useState } from 'react';

function useBtoa(data: string) {
  const [encoded, setEncoded] = useState<string>();
  useEffect(() => {
    setEncoded(window.btoa(data));
  }, []);
  return encoded;
}

export default useBtoa;
