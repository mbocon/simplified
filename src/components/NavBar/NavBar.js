import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import NavDrop from './NavDrop';
import 'bootstrap/dist/css/bootstrap.css';
import { FaSignOutAlt } from 'react-icons/fa';

import './NavBar.css';

const NavBar = props => {
	let nav = props.user ? (
		<Navbar expand='lg' style={{ width: '100vw' }}>
			<Navbar.Brand href='/'>Simplified</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' className='ml-auto' />
			<Navbar.Collapse id='basic-navbar-nav' className='Nav-collapse'>
				<NavDrop user={props.user} />
				<Nav className='ml-auto'>
					<Link to='' className='NavBar-link' onClick={props.handleLogout}>
						<p>
							Log out <FaSignOutAlt />
						</p>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	) : (
		<div>
			<Link to='/login' className='NavBar-link'>
				LOG IN
			</Link>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to='/signup' className='NavBar-link'>
				SIGN UP
			</Link>
		</div>
	);

	return <div className='NavBar'>{nav}</div>;
};

export default NavBar;
