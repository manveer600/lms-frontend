import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Headers = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { carts } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar className="h-[100px] bg-gray-800 font-serif ">
        <Container >
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            <h3 className="text-light">Ecommerce</h3>
          </NavLink>
          {isLoggedIn && <NavLink to="/cart" className="text-decoration-none text-light mx-2">
            <div id="ex4">
              <span
                className="p1 fa-stack fa-2x has-badge"
                data-count={carts.length}
              >
              <FaShoppingCart />
              </span>
            </div>
          </NavLink>}

        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
