import '../App.css';
import Button from '../Stylization/Button';
import HookUseState from '../Hooks/HookUseState';
import HookUseEffect from '../Hooks/HookUseEffect';
import HookUseEffectAnalogComponentDidMount from '../Hooks/HookUseEffectAnalogComponentDidMount';
import HookUseEffectAnalogComponentDidUpdate from '../Hooks/HookUseEffectAnalogComponentDidUpdate';
import HookUseEffectAnalogComponentWillUnmount from '../Hooks/HookUseEffectAnalogComponentWillUnmount';
import HookUseEffect3Phases from '../Hooks/HookUseEffect3Phases';
import ComponentAForUseToggle from '../Hooks/ComponentAForUseToggle';
import ComponentBForUseToggle from '../Hooks/ComponentBForUseToggle';
import ComponentMineForUseToggle from '../Hooks/ComponentMineForUseToggle';
import { NavLink } from "react-router-dom";


function App() {
  return (
    <div>
      <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
          <HookUseState></HookUseState>

          <HookUseEffect></HookUseEffect>

      <HookUseEffectAnalogComponentDidMount></HookUseEffectAnalogComponentDidMount>
      
      <HookUseEffectAnalogComponentDidUpdate></HookUseEffectAnalogComponentDidUpdate>

      <HookUseEffectAnalogComponentWillUnmount></HookUseEffectAnalogComponentWillUnmount>

      <HookUseEffect3Phases></HookUseEffect3Phases>

      <ComponentAForUseToggle></ComponentAForUseToggle>
      <ComponentBForUseToggle></ComponentBForUseToggle>
      <ComponentMineForUseToggle></ComponentMineForUseToggle>

      
    </div>
  );
}


export default App;