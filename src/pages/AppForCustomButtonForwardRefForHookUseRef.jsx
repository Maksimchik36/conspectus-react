import { useRef, useEffect } from "react";
import CustomButtonForwardRefForHookUseRef from "../Hooks/CustomButtonForwardRefForHookUseRef";
import Button from "../Stylization/Button";
import { NavLink } from "react-router-dom";



const AppForCustomButtonForwardRefForHookUseRef = () => {
  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  return <>
    <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
    <CustomButtonForwardRefForHookUseRef ref={btnRef}>Button with forwarded ref</CustomButtonForwardRefForHookUseRef> 
  </>
};


export default AppForCustomButtonForwardRefForHookUseRef;