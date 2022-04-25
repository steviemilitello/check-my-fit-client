import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/Navdropdown'
import { Link } from 'react-router-dom'
const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}
const authenticatedOptions = (user) => (
	<>
		<Nav.Item className="m-2">
			<Link to={`outfits/user/${user._id}`} style={linkStyle}>
				My Fits
			</Link>
		</Nav.Item>

		<Nav.Item className="m-2">
			<Link to='addOutfit' style={linkStyle}>
				Add New Outfit
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='sign-up' style={linkStyle}>Sign Up</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-in' style={linkStyle}>Sign In</Link>
		</Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/outfits' style={linkStyle}>
				Fit Feed
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand>
			<Link to='/' style={linkStyle}>
				Check My Fit
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions(user) : unauthenticatedOptions}
			</Nav>

			{/* <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div> */}
			<NavDropdown title="Tag Search" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">vintage</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">casual</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">grunge</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">goth</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">punk</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">boho</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">artsy</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">date night</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">summer look</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">spring look</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">fall look</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">winter look</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">western</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">sexy</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">sporty</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">formal</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">day</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.4">evening</NavDropdown.Item>

			</NavDropdown>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
