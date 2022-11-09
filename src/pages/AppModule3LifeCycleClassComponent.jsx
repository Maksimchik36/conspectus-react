import '../App.css';
import ErrorBoundary from '../LifeCycleClassComponent/ErrorBoundary';
import Button from '../Stylization/Button';
import { NavLink } from "react-router-dom";


function AppModule3LifeCycleClassComponent() {
  return (
    <div>
      <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
      <ErrorBoundary>Салют!</ErrorBoundary>
      </div>
  );
}


export default AppModule3LifeCycleClassComponent;