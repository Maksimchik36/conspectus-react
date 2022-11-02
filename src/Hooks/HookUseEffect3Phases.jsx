import { useState, useEffect } from "react";


const HookUseEffect3Phases = () => {
  const [value, setValue] = useState(0);
  const [username, setUsername] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initThirdPartyLibrary=()=>{
    console.log("Initialize library");
  };

  const fetchUser=()=>{
    console.log("fetch user");
  }


  // 1. Run effect only on mount to init some library
  useEffect(() => {
    initThirdPartyLibrary();
  }, []);

  // 2. Run effect only when username prop changes
  useEffect(() => {
    fetchUser(username);
  }, [username]);

  // 3. Run effect on value prop change
  useEffect(() => {
    // Do stuff when value prop changes
  }, [value]);

  // 4. Run effect on isLoggedIn state change
  useEffect(() => {
    // Do stuff when isLoggedIn state changes
  }, [isLoggedIn]);

  // 5. Run effect on mount and clean up on unmount
  useEffect(() => {
    const handleKeyDown = e => console.log("keydown event: ", e);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};


export default HookUseEffect3Phases;