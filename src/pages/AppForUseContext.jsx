import '../App.css';
import UserMenu from '../Hooks/UserMenu';
import Button from '../Stylization/Button';
import { NavLink } from "react-router-dom";



function AppForUseContext() {
  return (
    <div >
      <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
      <UserMenu></UserMenu>
    </div>
  );
}

export default AppForUseContext;
