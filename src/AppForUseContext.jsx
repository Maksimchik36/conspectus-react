import './App.css';
import UserMenu from './Hooks/UserMenu';
import Button from './Stylization/Button';


function AppForUseContext() {
  return (
    <div >
      <Button><a href="http://localhost:3000/conspectus-react">Go back</a></Button>
      <UserMenu></UserMenu>
    </div>
  );
}

export default AppForUseContext;
