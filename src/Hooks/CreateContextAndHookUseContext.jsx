import { createContext, useContext } from "react";

export const MyContext = createContext();

// кастоиный хук, Импортируем и используем в компонентах

export const useUser = () => useContext(MyContext);