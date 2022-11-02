import useToggle from './useToggle';
import ModalBForUseToggle from './ModalBForUseToggle';


const ComponentBForUseToggle = () => {
  const { isOpen, open, close } = useToggle(false);

  return (
    <>
      <button onClick={open}>Open modal</button>
      <ModalBForUseToggle isOpen={isOpen} onClose={close} />
    </>
  );
};


export default ComponentBForUseToggle;