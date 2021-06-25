import { useEffect, useState } from 'react';
import CONFIG from '../config'

export const useConfig = () => {
  const [config, setConfig] = useState(CONFIG);

  useEffect(() => {
    setConfig(CONFIG);
  }, []);

  return { config };
};
