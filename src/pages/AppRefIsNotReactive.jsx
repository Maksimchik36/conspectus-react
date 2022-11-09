// Рефы это не состояние, то есть они не реактивны, поэтому изменение значения рефа не влияет на обновление компонента и не вызывает ре-рендер.


import { useEffect, useRef } from "react";
import Button from "../Stylization/Button";
import { NavLink } from "react-router-dom";


const AppRefIsNotReactive = () => {
  const valueRef = useRef(0);

  useEffect(() => {
    // Выполнится только один раз при монтировании.
    // Последующие обновление значения рефа не
    // вызовут обновления компонента
    console.log(valueRef.current);
  });

  const handleClick = () => {
    valueRef.current += 1;
  };

  return <>
    <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
    <button onClick={handleClick}>Click to update ref value</button>
  </>
};


export default AppRefIsNotReactive;