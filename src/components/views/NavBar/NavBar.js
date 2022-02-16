import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Navbar bg='primary' variant='dark' className='my-4 rounded-2'>
    <Navbar.Brand className='ps-3'>Waiter.app</Navbar.Brand>
    <Nav className='ms-auto pe-3'>
      <Nav.Link as={NavLink} to='/'>
        Home
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
