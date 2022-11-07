// Рефы это не состояние, то есть они не реактивны, поэтому изменение значения рефа не влияет на обновление компонента и не вызывает ре-рендер.


import { useEffect, useRef } from "react";
import Button from "./Stylization/Button";

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
    <Button><a href="http://localhost:3000/conspectus-react">Go back</a></Button>
    <button onClick={handleClick}>Click to update ref value</button>
  </>
};


export default AppRefIsNotReactive;