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

			<NavDropdown title="Tag Search" id="basic-nav-dropdown">
				<NavDropdown.Item href="/tags/vintage">vintage</NavDropdown.Item>
				<NavDropdown.Item href="/tags/casual">casual</NavDropdown.Item>
				<NavDropdown.Item href="/tags/grunge">grunge</NavDropdown.Item>
				<NavDropdown.Item href="/tags/goth">goth</NavDropdown.Item>
				<NavDropdown.Item href="/tags/punk">punk</NavDropdown.Item>
				<NavDropdown.Item href="/tags/boho">boho</NavDropdown.Item>
				<NavDropdown.Item href="/tags/artsy">artsy</NavDropdown.Item>
				<NavDropdown.Item href="/tags/datenight">date night</NavDropdown.Item>
				<NavDropdown.Item href="/tags/summerlook">summer look</NavDropdown.Item>
				<NavDropdown.Item href="/tags/springlook">spring look</NavDropdown.Item>
				<NavDropdown.Item href="/tags/falllook">fall look</NavDropdown.Item>
				<NavDropdown.Item href="/tags/winterlook">winter look</NavDropdown.Item>
				<NavDropdown.Item href="/tags/western">western</NavDropdown.Item>
				<NavDropdown.Item href="/tags/sexy">sexy</NavDropdown.Item>
				<NavDropdown.Item href="/tags/sporty">sporty</NavDropdown.Item>
				<NavDropdown.Item href="/tags/formal">formal</NavDropdown.Item>
				<NavDropdown.Item href="/tags/day">day</NavDropdown.Item>
				<NavDropdown.Item href="/tags/evening">evening</NavDropdown.Item>

			</NavDropdown>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
