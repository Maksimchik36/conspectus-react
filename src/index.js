import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
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
// import AppWithHookUseMemo from './AppWithHookUseMemo';

import reportWebVitals from './reportWebVitals';
import AppMain from './AppMain';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppMain/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
