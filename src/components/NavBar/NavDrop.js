import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function NavDrop(props) {
    
	return (
		<Fragment >
			{props.user ? (
				<Dropdown>
					<Dropdown.Toggle variant='primary' id='dropdown-basic' className='Nav-dropdown'>
						Go to
					</Dropdown.Toggle>
					<Dropdown.Menu id='nav-dropdown'>
						<Dropdown.Item href='/calculator'>Calculator</Dropdown.Item>
						<Dropdown.Item href='/budget'>Budget</Dropdown.Item>
						<Dropdown.Item href='/todo'>To do list</Dropdown.Item>
						<Dropdown.Item href='/timer'>Timers</Dropdown.Item>
						<Dropdown.Item href='/journal'>Journal</Dropdown.Item>
						<Dropdown.Item href='/workouts'>Workouts</Dropdown.Item>
						<Dropdown.Item href='/diet'>Nutrition</Dropdown.Item>
						<Dropdown.Item href='/weather'>Weather</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			) : null}
		</Fragment>
	);
}
