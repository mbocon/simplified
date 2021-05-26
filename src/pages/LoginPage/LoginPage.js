import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/userService';

import './LoginPage.css';

function LoginPage(props) {
	const [formState, setFormState] = useState({
		email: '',
		password: '',
	});

	function handleChange(e) {
		setFormState(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await login(formState);
			props.handleSignupOrLogin();
			props.history.push('/');
		} catch (err) {
			// Use a modal or toast in your apps instead of alert
			alert('Invalid Credentials!');
		}
	}

	return (
		<div className='LoginPage'>
			<form className='form-horizontal' onSubmit={handleSubmit}>
				<div className='form-group'>
					<div className='col-sm-12'>
						<input
							type='email'
							className='form-control'
							placeholder='Email'
              autoFocus
							value={formState.email}
							name='email'
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='form-group'>
					<div className='col-sm-12'>
						<input
							type='password'
							className='form-control'
							placeholder='Password'
							value={formState.password}
							name='password'
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='form-group'>
					<div className='col-sm-12 text-center'>
						<button className='btn btn-primary login-btn'>LOG IN</button>&nbsp;&nbsp;
						<Link to='/' className='login-cancel btn btn-secondary'>
							CANCEL
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

export default LoginPage;
