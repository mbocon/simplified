import React, { useState } from 'react';
import useForm from '../CustomHooks/useForm';

const IncomeForm = props => {
	const { handleChange, handleSubmit, handleCancel } = useForm();
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
			<form className='income-form' onSubmit={event => handleSubmit(event, props)}>
				<input
					type='text'
					name='income'
					id='income'
					onChange={handleChange}
					onFocus={e => clickedSource(e)}
					placeholder='Income source'
					autoFocus
					required
				/>
				<input
					type='number'
					name='value'
					id='value'
					onChange={handleChange}
					placeholder='Enter amount'
					onFocus={e => clickedAmount(e)}
					disabled={editedSource ? false : true}
					required
				/>
				<input
					type='date'
					name='date'
					id='date'
					placeholder='Date'
					onChange={handleChange}
					disabled={editedAmount ? false : true}
					required
				/>
				<input type='text' name='type' id='type' defaultValue='income' style={{ display: 'none' }} />

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

export default IncomeForm;
