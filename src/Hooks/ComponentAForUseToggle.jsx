import useToggle from './useToggle';
import ModalAForUseToggle from './ModalAForUseToggle';


const ComponentAForUseToggle = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open modal</button>
      <ModalAForUseToggle isOpen={isOpen} onClose={close} />
    </>
  );
};


export default ComponentAForUseToggle;