import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { spaceS } from "../../styles/utilities/tools";
import Logout from "../Logout";
import Logo from "./Logo"

import { Consumer } from "../../store/context";

const Header = () => (
  <header>
    <Nav>
      <Consumer>
        {value => {
          const { user } = value;
          return (
            <Fragment>
              <div>
				<Link to="/">
				<Logo/>
    
                </Link>
              </div>
              <div>{user && <Logout />}</div>
            </Fragment>
          );
        }}
      </Consumer>
    </Nav>
  </header>
);

const Nav = styled.nav`
  background: linear-gradient(180deg, #ffab40, #ff9100);
  display: flex;
  justify-content: space-between;
  padding: ${spaceS};
`;

export default Header;
