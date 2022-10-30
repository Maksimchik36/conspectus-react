const Button = ({ variant, children }) => {
  // Базовые стили кнопки с несколькими вариантами отображения
  return <button className={clsx("button", variant)}>{children}</button>;
};


export default Button;