import Calculator from '../../components/Calculator/Calculator';
export default function CalculatorPage(props) {
    console.log(props, 'are calc props')
	return (
		<div className='Calculator-page'>
			<Calculator />
		</div>
	);
}
