import { useEffect, useState } from 'react';

function useAtob(data: string) {
  const [decoded, setDecoded] = useState<string>();
  useEffect(() => {
    setDecoded(window.atob(data));
  }, []);
  return decoded;
}

export default useAtob;
