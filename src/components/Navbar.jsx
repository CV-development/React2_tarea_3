import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import icon from '../assets/Home-icon.svg'

const NavbarPkmn = () => {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : undefined)
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container className='d-flex align-items-center justify-content-between'>
        <Navbar.Brand href='#home'>
          <Image src={icon} alt='Icon' width='30' height='30' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className={setActiveClass} to='/'>
              Home
            </NavLink>
            <NavLink className={setActiveClass} to='/pokemon'>
              Pokemon
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPkmn
