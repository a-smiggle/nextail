import { useEffect, useState } from 'react';

function useWindowFetch(input: RequestInfo, init?: RequestInit) {
  const [response, setResponse] = useState<Promise<Response>>();
  useEffect(() => {
    setResponse(window.fetch(input, init));
  }, []);
  return response;
}

export default useWindowFetch;
