import './Footer.css';

export default function Footer(props) {
	console.log(props, 'footer props');
	const copy = ['\u00a9'];
	let year = new Date();
	year = year.getFullYear();
	return (
		<div className='footer'>
			<div className='footer-content'>
				<span>Created by Mike Bocon</span>
				<span>
					All Rights Reserved {copy} {year}
				</span>
			</div>
			{props.user ? (
				<div className='footer-user'>
					<span>
						<div className='footer-user-span'></div> {props.user.name}
					</span>
				</div>
			) : null}
		</div>
	);
}
