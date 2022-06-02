import { useEffect, useState } from 'react';

function useConsole() {
  const getConsole = () => {
    if (typeof window !== 'undefined' && window.console) {
      return window.console;
    }
    return undefined;
  };
  const [consoleValue, setConsole] = useState<Console | undefined>(
    getConsole()
  );

  useEffect(() => {
    setConsole(getConsole);
  }, []);

  return consoleValue;
}

export default useConsole;
