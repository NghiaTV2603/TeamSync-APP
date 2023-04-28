import reactLogo from './assets/react.svg';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-absolute-path
import viteLogo from '/vite.svg';
import './App.css';

function App() {
   const [count, setCount] = useState(0);
   const name = 'nghia';
   return (
      <>
         <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
               <img src={viteLogo} className="logo" alt="Vite logo" />
               <div
                  style={{
                     height: '10px',
                     display: 'flex',
                     alignItem: 'center',
                  }}
               >
                  a
               </div>
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
               <img src={reactLogo} className="logo reacts" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            {/* eslint-disable-next-line react/button-has-type */}
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">
            Click on the Vite and React logos to learn more
         </p>
      </>
   );
}

export default App;
