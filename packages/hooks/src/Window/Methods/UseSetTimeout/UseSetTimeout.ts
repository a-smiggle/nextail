import { useEffect, useState } from 'react';

function useSetTimeout(handler: TimerHandler, timeout?: number) {
  const [idValue, setID] = useState<number>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    setID(window.setTimeout(handler, timeout));
  }, []);

  return idValue;
}

export default useSetTimeout;
