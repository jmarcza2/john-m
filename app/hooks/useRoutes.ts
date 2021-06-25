import { useEffect, useState } from 'react';
import makeRoutes from '../routes'

export const useRoutes = (routeData) => {
  const [ROUTES, setROUTES] = useState(makeRoutes(routeData));

  useEffect(() => {
    setROUTES(makeRoutes(routeData));
  }, []);

  return { ROUTES };
};
