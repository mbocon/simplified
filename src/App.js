import { useState, useEffect } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import BudgetPage from './pages/BudgetPage/BudgetPage';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import TimersPage  from './pages/TimersPage/TimersPage';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import Footer from './components/Footer/Footer';

import { Route, Switch } from 'react-router-dom';

import { getUser, logout } from './services/userService';

function App(props) {
	/* local variables */
	/* hooks */

	const [userState, setUserState] = useState({ user: getUser() });

	useEffect(() => {
		// do something
	}, []);

	/* user-related helper functions */

	function handleLogout() {
		logout();
		setUserState({ user: null });
	}

	function handleSignupOrLogin() {
		setUserState({ user: getUser() });
	}

	
	return (
		<div className='App'>
			<NavBar user={userState.user} handleLogout={handleLogout} />
			<Switch>
				<Route exact path='/' render={() => <HomePage />} />
				<Route exact path='/signup' render={props => <SignupPage {...props} handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route exact path='/login' render={props => <LoginPage {...props} handleSignupOrLogin={handleSignupOrLogin} />} />
				<Route exact path='/budget' render={() => <BudgetPage user={userState.user} />} />
				<Route exact path='/calculator' render={() => <CalculatorPage />} />
				<Route exact path='/timers' render={() => <TimersPage />} />
				<Route exact path='/weather' render={() => <WeatherPage />} />
			</Switch>
			<Footer user={userState.user} />
		</div>
	);
}

export default App;
