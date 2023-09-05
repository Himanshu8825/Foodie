import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'



const NavbarComponent =() => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" >
						
			<Nav className="mb-2">
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
      </Navbar>
    </>
  );
}
// LinkContainer is used to stop reloading of react page

export default NavbarComponent;