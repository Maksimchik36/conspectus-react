import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AppModule1FirstMeetingWithReactAndStylization from './pages/AppModule1FirstMeetingWithReactAndStylization';
import AppModule2EventsAndStateAndForms from './pages/AppModule2EventsAndStateAndForms';
import AppClassForButtonRiseOfState from './pages/AppClassForButtonRiseOfState';
import AppModule3LifeCycleClassComponent from './pages/AppModule3LifeCycleClassComponent';
import AppForHTTPRequests from './pages/AppForHTTPRequests';
import AppModule4Hooks from './pages/AppModule4Hooks';
import { MyContext } from './Hooks/CreateContextAndHookUseContext.jsx';
import AppForUseContext from './pages/AppForUseContext';
import AppForCustomUseContext from './pages/AppForCustomUseContext';
import { UserCustomProvider } from './Hooks/UserCustomContext.jsx';
import AppWithHookUseRef from './pages/AppWithHookUseRef.jsx';
import AppRefIsNotReactive from './pages/AppRefIsNotReactive';
import AppForVideoPlayerWithHookUseRef from './pages/AppForVideoPlayerWithHookUseRef';
import AppForCustomButtonForwardRefForHookUseRef from './pages/AppForCustomButtonForwardRefForHookUseRef';
import AppWithHookUseMemo from './pages/AppWithHookUseMemo';
import NotFound from "./NotFound";
import CollectionsList from "./FirstMeetingWithReact/CollectionsList";
import Book from "./FirstMeetingWithReact/Book";
import AppWithHookUseParams from "./pages/AppWithHookUseParams";
import AppModule5Routing from './pages/AppModule5Routing';


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
        <Route path="/HookUseMemo" element={<AppWithHookUseMemo />} />
        <Route path = "/BooksList" element={<CollectionsList books={[{id:2, name:"Физика"}, {id:3, name:"Химия"}]} />}></Route>  
        <Route path = "/BooksList/:id" element={<Book />}></Route>
        <Route path = "/HookUseParams" element={<AppWithHookUseParams />}></Route>
        <Route path = "/Routing" element={<AppModule5Routing/>}></Route>
        

        <Route path="*" element={<NotFound />} />
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