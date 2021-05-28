import React, { useState } from 'react';
import useForm from '../CustomHooks/useForm';

const DebtForm = props => {
	console.log(props, 'are form props');
	const logInfo = () => {
		console.log(inputs, 'log info - cb');
	};

	const { inputs, handleChange, handleSubmit, handleCancel } = useForm(logInfo);
	const [editedSource, setEditedSource] = useState(false);
	const [editedAmount, setEditedAmount] = useState(false);

	const clickedSource = e => {
		setEditedSource(true);
	};

	const clickedAmount = e => {
		setEditedAmount(true);
	};

	return (
		<div className='form'>
			<form onSubmit={event => handleSubmit(event, props)}>
				<input
					type='text'
					name='debt'
					id='debt'
					onChange={handleChange}
					onFocus={e => clickedSource(e)}
					placeholder='Owed to'
					autoFocus
					required
				/>
				<input
					type='number'
					name='value'
					id='value'
					onChange={handleChange}
					onFocus={e => clickedAmount(e)}
					disabled={editedSource ? false : true}
					placeholder='Amount owed'
					required
				/>
				<input
					type='date'
					name='date'
					id='date'
					onChange={handleChange}
					disabled={editedAmount ? false : true}
					placeholder='Due Date'
					required
				/>
				<input type='text' name='type' id='type' onChange={handleChange} value='debt' style={{ display: 'none' }} />

				<button className='btn btn-primary budget-submit-btn' type='submit'>
					Submit
				</button>
				<button onClick={event => handleCancel(event, props)} className='btn btn-secondary budget-cancel-btn'>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default DebtForm;
