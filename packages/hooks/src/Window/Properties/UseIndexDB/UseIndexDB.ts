import { useEffect, useState } from 'react';

function useIndexDB() {
  const getIndexDB = () => {
    if (typeof window !== 'undefined' && window.indexedDB) {
      return window.indexedDB;
    }
    return undefined;
  };
  const [indexDBValue, setIndexDB] = useState<IDBFactory | undefined>(
    getIndexDB()
  );

  useEffect(() => {
    setIndexDB(getIndexDB);
  }, []);

  return indexDBValue;
}

export default useIndexDB;
