import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import {
	FaCalculator,
	FaMoneyBillAlt,
	FaListUl,
	FaStopwatch,
	FaBook,
	FaDumbbell,
	FaCarrot,
	FaCloudRain,
  FaHashtag
} from 'react-icons/fa';

import './HomePage.css';

const HomePage = props => {
	return (
		<div className='GamePage'>
			<NavBar user={props.user} handleLogout={props.handleLogout} />
			<div className='flex-h align-flex-end'>
				<div className='grid-area'>
					{/* TODO: Make the below links nav to pages and replace text with icons */}
					<Link to='/calculator' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							Calculator <FaCalculator />
						</p>
					</Link>
					<Link to='/budget' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							Budget <FaMoneyBillAlt />
						</p>
					</Link>
					<Link to='/todos' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							Goals <FaListUl />
						</p>
					</Link>
					<Link to='/timers' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							Timers <FaStopwatch />
						</p>
					</Link>
					<Link to='/journals' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							Journal <FaBook />
						</p>
					</Link>
					<Link to='/workouts' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							Workouts <FaDumbbell />
						</p>
					</Link>
					<Link to='/diet' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							Nutrition <FaCarrot />
						</p>
					</Link>
					<Link to='/weather' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							Weather <FaCloudRain />
						</p>
					</Link>
          <Link to='/weather' className='HomePage-link' onClick={props.handleLogout}>
						<p>
							TicTacToe <FaHashtag />
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
