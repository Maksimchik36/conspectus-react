import { useCustomUser } from "./UserCustomContext";;


export const UserCustomMenu = () => {
  const { isLoggedIn, username, logIn, logOut } = useCustomUser();

  return (
    <div>
      {isLoggedIn && <p>{username}</p>}
      {isLoggedIn ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};