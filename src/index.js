import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppModule1 from './AppModule1';
import AppModule2 from './AppModule2';
// import AppClassForButtonRiseOfState from './AppClassForButtonRiseOfState';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppModule1 /> */}

    <AppModule2 />
    
    {/* <AppClassForButtonRiseOfState /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
