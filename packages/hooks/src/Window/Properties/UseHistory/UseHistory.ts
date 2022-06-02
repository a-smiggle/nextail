import { useEffect, useState } from 'react';

function useHistory() {
  const getHistory = () => {
    if (typeof window !== 'undefined' && window.history) {
      return window.history;
    }
    return undefined;
  };

  const [history, setHistory] = useState<History | undefined>(getHistory());

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return history;
}

export default useHistory;
