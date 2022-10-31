import './App.css';
// import MyClassComponent from './EventsAndState/MyClassComponent';
// import ClassCounter from './EventsAndState/ClassCounter';
// import ClassToggle from './EventsAndState/ClassToggle';
// import ClassToggleWithPrevState from './EventsAndState/ClassToggleWithPrevState';
// import ClassCounterWithPrevState from './EventsAndState/ClassCounterWithPrevState';
// import UncontrolledLoginFormClass from './Forms/UncontrolledLoginFormClass';
// import ControlledLoginFormClass from './Forms/ControlledLoginFormClass';
import SignUpFormClass from './Forms/SignUpFormClass';
// import GenerateUniqueIdForFormElementsClassWithNanoid from './Forms/GenerateUniqueIdForFormElementsClassWithNanoid';


function AppModule2() {
  return (
    <div>
        {/* <MyClassComponent />    
        <ClassCounter /> */}
          
      {/* <ClassToggle>Приветули, красотули!</ClassToggle> */}
      
      {/* <ClassToggleWithPrevState>Здрасьте Вам!</ClassToggleWithPrevState> */}

      {/* <ClassCounterWithPrevState></ClassCounterWithPrevState> */}

      {/* <UncontrolledLoginFormClass onSubmit={values => console.log(values)} /> */}
      
      {/* <ControlledLoginFormClass /> */}

      <SignUpFormClass onSubmit={values => console.log(values)} />

      {/* <GenerateUniqueIdForFormElementsClassWithNanoid />    
      <GenerateUniqueIdForFormElementsClassWithNanoid />
      <GenerateUniqueIdForFormElementsClassWithNanoid />
      <GenerateUniqueIdForFormElementsClassWithNanoid /> */}





    </div>
  );
}


export default AppModule2;