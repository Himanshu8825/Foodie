import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from 'react-router-bootstrap'

const NavbarComponent =() => {
  return (
    <>
      <Navbar classnameName="yellotail">
				<LinkContainer to={'/'}>
					<Navbar.Brand classnameName='fs-1'>Foodie</Navbar.Brand>
				</LinkContainer>
			</Navbar>
			<Nav classnameName="mb-4 ">
				<Nav.Item>
					<LinkContainer to={'/'}>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to={'/login'}>
						<Nav.Link>Log-In</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to={'/contact'}>
						<Nav.Link>Contact</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			</Nav>
    </>
  );
}
// LinkContainer is used to stop reloading of react page

export default NavbarComponent;