import { useEffect } from "react";


const HookUseEffectAnalogComponentWillUnmount = () => {
  useEffect(() => {
    console.log("Mounting phase: same when componentDidMount runs");

    return () => {
      console.log("Unmounting phase: same when componentWillUnmount runs");
    };
  }, []);

  return null;
};


export default HookUseEffectAnalogComponentWillUnmount;