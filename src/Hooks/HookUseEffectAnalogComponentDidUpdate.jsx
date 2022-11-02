import { useState, useEffect } from "react";


const HookUseEffectAnalogComponentDidUpdate = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
    console.log("Updating phase: same when componentDidUpdate runs");
  }, [value]);

  return <button onClick={() => setValue(value + 1)}>You clicked {value} times</button>;
};


export default HookUseEffectAnalogComponentDidUpdate;