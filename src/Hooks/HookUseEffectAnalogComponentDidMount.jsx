import { useState, useEffect } from "react";


const HookUseEffectAnalogComponentDidMount = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Mounting phase: same when componentDidMount runs");
  }, []);

  return <button onClick={() => setValue(value + 1)}>You clicked {value} times</button>;
};


export default HookUseEffectAnalogComponentDidMount;