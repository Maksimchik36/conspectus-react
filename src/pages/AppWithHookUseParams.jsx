import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '../Stylization/Button';
import { useParams } from "react-router-dom";


const AppWithHookUseParams = () => {
  const { productId } = useParams();
  return (
    <>
      <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>
      <div>AppWithHookUseParams is not finished</div>
      <div>Now showing product with id - {productId}</div>;
  </>
  )
}

export default AppWithHookUseParams;