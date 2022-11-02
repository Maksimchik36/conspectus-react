import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppModule1FirstMeetingWithReactAndStylization from './AppModule1FirstMeetingWithReactAndStylization';
// import AppModule2EventsAndStateAndForms from './AppModule2EventsAndStateAndForms';
// import AppClassForButtonRiseOfState from './AppClassForButtonRiseOfState';
// import AppModule3LifeCycleClassComponent from './AppModule3LifeCycleClassComponent';
// import AppForHTTPRequests from './AppForHTTPRequests';
import AppModule4Hooks from './AppModule4Hooks';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppModule1FirstMeetingWithReactAndStylization /> */}

    {/* <AppModule2EventsAndStateAndForms /> */}
    
    {/* <AppClassForButtonRiseOfState /> */}

    {/* <AppModule3LifeCycleClassComponent /> */}

    {/* <AppForHTTPRequests></AppForHTTPRequests> */}

    <AppModule4Hooks></AppModule4Hooks>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
