import useToggle from './useToggle';
import ModalAForUseToggle from './ModalAForUseToggle';


const ComponentMineForUseToggle = () => {
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <button onClick={toggle}>{isOpen ? "Close modal" : "Open modal"}</button>
      {isOpen && <ModalAForUseToggle />}
    </>
  );
};


export default ComponentMineForUseToggle;