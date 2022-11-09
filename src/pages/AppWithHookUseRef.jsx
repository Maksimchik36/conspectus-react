import { useState, useEffect, useRef } from "react";
import Button from "../Stylization/Button";
import { NavLink } from "react-router-dom";


const AppWithHookUseRef = () => {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  // Будет null на первом рендере
  // и ссылкой на DOM-элемент все последующие
  console.log("in App synch", btnRef.current);

  useEffect(() => {
    // Эффект выполняется после монтирования,
    // поэтому всегда будет ссылкой на DOM-элемент
    console.log("in useEffect", btnRef.current);
  });

  const handleClick = () => {
    // Клики будут после монтирвоания,
    // поэтому всегда будет ссылкой на DOM-элемент
    console.log("in handleclick", btnRef.current);
  };

  return (
    <>
      <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
};


export default AppWithHookUseRef;