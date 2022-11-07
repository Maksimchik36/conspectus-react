import './App.css';
import ErrorBoundary from './LifeCycleClassComponent/ErrorBoundary';
import Button from './Stylization/Button';


function AppModule3LifeCycleClassComponent() {
  return (
    <div>
      <Button><a href="http://localhost:3000/conspectus-react">Go back</a></Button>
      <ErrorBoundary>Салют!</ErrorBoundary>
      </div>
  );
}


export default AppModule3LifeCycleClassComponent;