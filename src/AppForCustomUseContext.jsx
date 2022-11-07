import './App.css';
import { UserCustomMenu } from './Hooks/UserCustomMenu';
import Button from './Stylization/Button';


function AppForCustomUseContext() {
  return (
    <div >
      <Button><a href="http://localhost:3000/conspectus-react">Go back</a></Button>
      <UserCustomMenu></UserCustomMenu>
    </div>
  );
}


export default AppForCustomUseContext;