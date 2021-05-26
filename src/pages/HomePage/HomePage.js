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
			<div className='flex-h align-flex-end'>
				<div className='grid-area'>
					<Link to='/calculator' className='HomePage-link' >
						<p>
							Calculator <FaCalculator />
						</p>
					</Link>
					<Link to='/budget' className='HomePage-link' >
						<p>
							Budget <FaMoneyBillAlt />
						</p>
					</Link>
					<Link to='/todos' className='HomePage-link' >
						<p>
							Goals <FaListUl />
						</p>
					</Link>
					<Link to='/timers' className='HomePage-link' >
						<p>
							Timers <FaStopwatch />
						</p>
					</Link>
					<Link to='/journals' className='HomePage-link' >
						<p>
							Journal <FaBook />
						</p>
					</Link>
					<Link to='/workouts' className='HomePage-link' >
						<p>
							Workouts <FaDumbbell />
						</p>
					</Link>
					<Link to='/diet' className='HomePage-link' >
						<p>
							Nutrition <FaCarrot />
						</p>
					</Link>
					<Link to='/weather' className='HomePage-link' >
						<p>
							Weather <FaCloudRain />
						</p>
					</Link>
          <Link to='/weather' className='HomePage-link' >
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
