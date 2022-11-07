import { useRef, useEffect } from "react";
import CustomButtonForwardRefForHookUseRef from "./Hooks/CustomButtonForwardRefForHookUseRef";
import Button from "./Stylization/Button";


const AppForCustomButtonForwardRefForHookUseRef = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <>
    <Button><a href="http://localhost:3000/conspectus-react">Go back</a></Button>
    <CustomButtonForwardRefForHookUseRef ref={btnRef}>Button with forwarded ref</CustomButtonForwardRefForHookUseRef> 
  </>
};


export default AppForCustomButtonForwardRefForHookUseRef;