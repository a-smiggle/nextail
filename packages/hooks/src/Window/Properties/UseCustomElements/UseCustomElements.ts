import { useEffect, useState } from 'react';

function useCustomElements() {
  const getCustomElements = () => {
    if (typeof window !== 'undefined' && window.customElements) {
      return window.customElements;
    }
    return undefined;
  };
  const [customElements, setCustomElements] = useState<
    CustomElementRegistry | undefined
  >(getCustomElements());

  useEffect(() => {
    setCustomElements(getCustomElements);
  }, []);

  return customElements;
}

export default useCustomElements;
