import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppModule1FirstMeetingWithReactAndStylization from './AppModule1FirstMeetingWithReactAndStylization';
// import AppModule2EventsAndStateAndForms from './AppModule2EventsAndStateAndForms';
// import AppClassForButtonRiseOfState from './AppClassForButtonRiseOfState';
// import AppModule3LifeCycleClassComponent from './AppModule3LifeCycleClassComponent';
// import AppForHTTPRequests from './AppForHTTPRequests';
// import AppModule4Hooks from './AppModule4Hooks';
// import { MyContext } from './Hooks/CreateContextAndHookUseContext.jsx';
// import AppForUseContext from './AppForUseContext';
// import AppForCustomUseContext from './AppForCustomUseContext';
// import { UserCustomProvider } from './Hooks/UserCustomContext.jsx';
// import AppWithHookUseRef from './AppWithHookUseRef.jsx';
// import AppRefIsNotReactive from './AppRefIsNotReactive';
// import AppForVideoPlayerWithHookUseRef from './AppForVideoPlayerWithHookUseRef';
// import AppForCustomButtonForwardRefForHookUseRef from './AppForCustomButtonForwardRefForHookUseRef';
import AppWithHookUseMemo from './AppWithHookUseMemo';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppModule1FirstMeetingWithReactAndStylization /> */}

    {/* <AppModule2EventsAndStateAndForms /> */}
    
    {/* <AppClassForButtonRiseOfState /> */}

    {/* <AppModule3LifeCycleClassComponent /> */}

    {/* <AppForHTTPRequests></AppForHTTPRequests> */}

    {/* <AppModule4Hooks></AppModule4Hooks> */}

{/* 
    <MyContext.Provider value={{ username: "Mango" }}>
      <AppForUseContext></AppForUseContext>
    </MyContext.Provider> */}


    {/* <UserCustomProvider>
      <AppForCustomUseContext></AppForCustomUseContext>
    </UserCustomProvider> */}
    

    {/* <AppWithHookUseRef></AppWithHookUseRef> */}

    {/* <AppRefIsNotReactive></AppRefIsNotReactive> */}

    {/* <AppForVideoPlayerWithHookUseRef></AppForVideoPlayerWithHookUseRef> */}

    {/* <AppForCustomButtonForwardRefForHookUseRef></AppForCustomButtonForwardRefForHookUseRef> */}

    <AppWithHookUseMemo></AppWithHookUseMemo>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
