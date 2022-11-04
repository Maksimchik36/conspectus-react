// кастомный хук useContext
import { createContext, useContext, useState } from "react";

// создает контекст
const UserCustomContext = createContext();

export const useCustomUser = () => useContext(UserCustomContext);

// создает провайдер со стейтами и функциями, который будет оборачивать нашего компонента-родителя
export const UserCustomProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Maksim");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <UserCustomContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
      {children}
    </UserCustomContext.Provider>
  );
};