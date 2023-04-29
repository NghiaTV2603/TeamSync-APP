import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './app/routes';

function App() {
   const routing = useRoutes(routes);
   // eslint-disable-next-line react/jsx-no-useless-fragment
   return <>{routing}</>;
}

export default App;
