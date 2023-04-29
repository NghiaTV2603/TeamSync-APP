import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import routes from './app/routes';
import { ColorModeContext, useMode } from './app/theme';

function App() {
   const routing = useRoutes(routes);
   const [theme, colorMode] = useMode();
   // eslint-disable-next-line react/jsx-no-useless-fragment
   return (
      <ColorModeContext.Provider value={colorMode}>
         <ThemeProvider theme={theme}>
            <CssBaseline />
            {routing}
         </ThemeProvider>
      </ColorModeContext.Provider>
   );
}

export default App;