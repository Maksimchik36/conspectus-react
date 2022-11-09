import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "../Routing/Home";
import About from "../Routing/About";
import Products from "../Routing/Products";
import Button from '../Stylization/Button';


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const AppModule5Routing = () => {
  return (
    <div>
      <Button><NavLink to="/conspectus-react">Go back</NavLink></Button>

      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};


export default AppModule5Routing;