import '../App.css';
import { UserCustomMenu } from '../Hooks/UserCustomMenu';
import Button from '../Stylization/Button';
import { NavLink } from "react-router-dom";



function AppForCustomUseContext() {
  return (
    <div >
      <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
      <UserCustomMenu></UserCustomMenu>
    </div>
  );
}


export default AppForCustomUseContext;