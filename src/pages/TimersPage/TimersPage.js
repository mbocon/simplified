import Countdown from '../../components/Timers/Countdown';
import Stopwatch from '../../components/Timers/Stopwatch';

export default function Timers() {
	return (
		<div className='timers'>
			<Countdown />
            <Stopwatch />
		</div>
	);
}
