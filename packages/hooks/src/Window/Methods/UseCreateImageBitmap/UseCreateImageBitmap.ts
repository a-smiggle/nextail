import { useEffect, useState } from 'react';

function useCreateImageBitmap(
  image: ImageBitmapSource,
  options?: ImageBitmapOptions
) {
  const createImageBitmap = () => {
    if (typeof window !== 'undefined' && window.createImageBitmap) {
      return window.createImageBitmap(image, options);
    }
    return undefined;
  };

  const [imageBitmap, setImageBitmap] = useState<
    Promise<ImageBitmap> | undefined
  >(createImageBitmap());

  useEffect(() => {
    setImageBitmap(createImageBitmap);
  }, []);

  return imageBitmap;
}

export default useCreateImageBitmap;
