import { useUser } from "./CreateContextAndHookUseContext";


const UserMenu = () => {
  const { username } = useUser();

  return (
    <div>
      <p>{username}</p>
    </div>
  );
};


export default UserMenu;