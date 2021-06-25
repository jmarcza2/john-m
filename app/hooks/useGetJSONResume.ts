import { useEffect, useState } from 'react';
const JSONResume = require('../resume.json');
export const useGetJSONResume = () => {
  const [data, setData] = useState(JSONResume);
  useEffect(() => {
    setData(JSONResume);
  }, []);

  return { data };
};
