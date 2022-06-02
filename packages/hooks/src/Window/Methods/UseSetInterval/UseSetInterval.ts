import { useEffect, useState } from 'react';

function useSetInterval(handler: TimerHandler, timeout?: number) {
  const [idValue, setID] = useState<number>();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    setID(window.setInterval(handler, timeout));
  }, []);

  return idValue;
}

export default useSetInterval;
