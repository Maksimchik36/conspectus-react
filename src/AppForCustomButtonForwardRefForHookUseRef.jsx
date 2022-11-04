import { useRef, useEffect } from "react";
import CustomButtonForwardRefForHookUseRef from "./Hooks/CustomButtonForwardRefForHookUseRef";


const AppForCustomButtonForwardRefForHookUseRef = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <CustomButtonForwardRefForHookUseRef ref={btnRef}>Button with forwarded ref</CustomButtonForwardRefForHookUseRef>;
};


export default AppForCustomButtonForwardRefForHookUseRef;