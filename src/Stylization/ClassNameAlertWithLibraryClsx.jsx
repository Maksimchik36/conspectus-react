import clsx from "clsx"; // library for a few classNames
import "./ClassNameAlert.css";


const ClassNameAlertWithLibraryClsx = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      // className={clsx(
      //   "alert",
      //   variant,
      //   outlined && "is-outlined",
      //   elevated && "is-elevated"
      // )}

      // second variant - combined - string and object
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
};


export default ClassNameAlertWithLibraryClsx;