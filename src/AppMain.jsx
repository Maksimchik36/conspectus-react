import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AppModule1FirstMeetingWithReactAndStylization from './AppModule1FirstMeetingWithReactAndStylization';
import AppModule2EventsAndStateAndForms from './AppModule2EventsAndStateAndForms';
import AppClassForButtonRiseOfState from './AppClassForButtonRiseOfState';
import AppModule3LifeCycleClassComponent from './AppModule3LifeCycleClassComponent';
import AppForHTTPRequests from './AppForHTTPRequests';
import AppModule4Hooks from './AppModule4Hooks';
import { MyContext } from './Hooks/CreateContextAndHookUseContext.jsx';
import AppForUseContext from './AppForUseContext';
import AppForCustomUseContext from './AppForCustomUseContext';
import { UserCustomProvider } from './Hooks/UserCustomContext.jsx';
import AppWithHookUseRef from './AppWithHookUseRef.jsx';
import AppRefIsNotReactive from './AppRefIsNotReactive';
import AppForVideoPlayerWithHookUseRef from './AppForVideoPlayerWithHookUseRef';
import AppForCustomButtonForwardRefForHookUseRef from './AppForCustomButtonForwardRefForHookUseRef';
import AppWithHookUseMemo from './AppWithHookUseMemo';


const AppMain = () => {
    return (
    <div>
      <Routes>
        <Route path="/conspectus-react" element={<Home />} />
        <Route path = "/FirstMeetingWithReactAndStylization" element={<AppModule1FirstMeetingWithReactAndStylization />} />
        <Route path = "/EventsAndStateAndForms" element={<AppModule2EventsAndStateAndForms />} />
        <Route path = "/ClassForButtonRiseOfState" element = {<AppClassForButtonRiseOfState />} />
        <Route path = "/LifeCycleClassComponent" element = {<AppModule3LifeCycleClassComponent />} /> 
        <Route path = "/HTTPRequests" element={<AppForHTTPRequests />} />
        <Route path = "/Hooks" element={<AppModule4Hooks />} />        
        <Route path = "/UseContext" element = {<MyContext.Provider value={{ username: "Mango" }}><AppForUseContext /></MyContext.Provider>} />
        <Route path = "/CustomUseContext" element={ <UserCustomProvider><AppForCustomUseContext /></UserCustomProvider>} />
        <Route path = "/HookUseRef" element={<AppWithHookUseRef />} />
        <Route path = "/RefIsNotReactive" element={<AppRefIsNotReactive />} />
        <Route path = "/VideoPlayerWithHookUseRef" element={<AppForVideoPlayerWithHookUseRef />} />
        <Route path = "/CustomButtonForwardRefForHookUseRef" element={<AppForCustomButtonForwardRefForHookUseRef />} />
        <Route path = "/HookUseMemo" element={<AppWithHookUseMemo />} />
      </Routes>
    </div>
  );
}


export default AppMain;



// return (
//     <div>
//       <Routes>
//         <Route path="/" element={<AppModule1FirstMeetingWithReactAndStylization />} />
//         <Route path="/about" element={<AppModule2EventsAndStateAndForms />} />
//     < Route path = "/products" element = {<AppClassForButtonRiseOfState />} />

//     {/* <AppModule3LifeCycleClassComponent /> */}
//     {/* <AppForHTTPRequests></AppForHTTPRequests> */}
//     {/* <AppModule4Hooks></AppModule4Hooks> */}
// {/* 
//     <MyContext.Provider value={{ username: "Mango" }}>
//       <AppForUseContext></AppForUseContext>
//     </MyContext.Provider> */}
//     {/* <UserCustomProvider>
//       <AppForCustomUseContext></AppForCustomUseContext>
//     </UserCustomProvider> */}
//     {/* <AppWithHookUseRef></AppWithHookUseRef> */}
//     {/* <AppRefIsNotReactive></AppRefIsNotReactive> */}
//     {/* <AppForVideoPlayerWithHookUseRef></AppForVideoPlayerWithHookUseRef> */}
//     {/* <AppForCustomButtonForwardRefForHookUseRef></AppForCustomButtonForwardRefForHookUseRef> */}
//     {/* <AppWithHookUseMemo></AppWithHookUseMemo> */}
//       </Routes>
//     </div>
//   );