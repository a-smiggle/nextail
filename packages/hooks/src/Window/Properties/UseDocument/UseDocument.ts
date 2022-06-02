import { useEffect, useState } from 'react';

function useDocument() {
  const getDocument = () => {
    if (typeof window !== 'undefined' && window.document) {
      return window.document;
    }
    return undefined;
  };

  const [document, setDocument] = useState<Document | undefined>(getDocument());

  useEffect(() => {
    setDocument(getDocument());
  }, []);

  return document;
}

export default useDocument;
