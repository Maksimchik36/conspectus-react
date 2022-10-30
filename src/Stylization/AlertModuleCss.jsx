import clsx from "clsx";
import css from './Alert.module.css';


const AlertModuleCss = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};


export default AlertModuleCss;