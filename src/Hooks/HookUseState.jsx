import { useState } from "react";

const HookUseState = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      Current value: {value}
      <button type="button" onClick={() => setValue(value + 1)}>
        Increment value by 1
      </button>
    </div>
  );
};


export default HookUseState;