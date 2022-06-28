import { useEffect, useState } from 'react';

function useRequestMediaKeySystemAccess(
  keySystem: string,
  supportedConfigurations: MediaKeySystemConfiguration[]
) {
  const checkMethod = () => {
    if (
      typeof navigator !== 'undefined' &&
      navigator.requestMediaKeySystemAccess
    ) {
      return navigator.requestMediaKeySystemAccess(
        keySystem,
        supportedConfigurations
      );
    }
    return undefined;
  };

  const [returnValue, setReturnValue] = useState<
    Promise<MediaKeySystemAccess> | undefined
  >(checkMethod());

  useEffect(() => {
    setReturnValue(checkMethod);
  }, []);

  return returnValue;
}

export default useRequestMediaKeySystemAccess;
