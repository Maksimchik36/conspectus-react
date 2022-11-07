import './App.css';
import MyClassComponent from './EventsAndState/MyClassComponent';
import ClassCounter from './EventsAndState/ClassCounter';
import ClassToggle from './EventsAndState/ClassToggle';
import ClassToggleWithPrevState from './EventsAndState/ClassToggleWithPrevState';
import ClassCounterWithPrevState from './EventsAndState/ClassCounterWithPrevState';
import UncontrolledLoginFormClass from './Forms/UncontrolledLoginFormClass';
import ControlledLoginFormClass from './Forms/ControlledLoginFormClass';
import SignUpFormClass from './Forms/SignUpFormClass';
import GenerateUniqueIdForFormElementsClassWithNanoid from './Forms/GenerateUniqueIdForFormElementsClassWithNanoid';
import Button from './Stylization/Button';


function AppModule2EventsAndStateAndForms() {
  return (
    <div>
      <Button><a href="http://localhost:3000/conspectus-react">Go back</a></Button>
      <MyClassComponent />  
      
      <ClassCounter />
          
      <ClassToggle>Приветули, красотули!</ClassToggle>
      
      <ClassToggleWithPrevState>Здрасьте Вам!</ClassToggleWithPrevState>

      <ClassCounterWithPrevState></ClassCounterWithPrevState>

      <UncontrolledLoginFormClass onSubmit={values => console.log(values)} />
      
      <ControlledLoginFormClass />

      <SignUpFormClass onSubmit={values => console.log(values)} />

      <GenerateUniqueIdForFormElementsClassWithNanoid />    
      <GenerateUniqueIdForFormElementsClassWithNanoid />
      <GenerateUniqueIdForFormElementsClassWithNanoid />
      <GenerateUniqueIdForFormElementsClassWithNanoid />

    </div>
  );
}


export default AppModule2EventsAndStateAndForms;