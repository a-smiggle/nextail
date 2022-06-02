import { useEffect, useState } from 'react';

function useSpeechSynthesis() {
  const getSpeechSynthesis = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      return window.speechSynthesis;
    }
    return undefined;
  };

  const [speechSynthesis, setSpeechSynthesis] = useState<
    SpeechSynthesis | undefined
  >(getSpeechSynthesis());

  useEffect(() => {
    setSpeechSynthesis(getSpeechSynthesis());
  }, []);

  return speechSynthesis;
}

export default useSpeechSynthesis;
