import { useState } from 'react';
import IncomeForm from '../../components/Forms/IncomeForm';
import ExpenseForm from '../../components/Forms/ExpenseForm';
import DebtForm from '../../components/Forms/DebtForm';
import SavingsForm from '../../components/Forms/SavingsForm';
import Dropdwn from '../../components/Budget/DropDwn';
import ResponsiveTable from '../../components/Budget/ResponsiveTable';

export default function Budget(props) {
	const user = props.user.name;
	const [displayForm, setDisplayForm] = useState(false);
	const [formType, setFormType] = useState('');

	return (
		<div className='budget'>
			<h4 className='budget-h4'>
				<span className='current-user'>{user}</span>'s Budget
			</h4>
			<div className='budget-input'>
				{displayForm === false ? (
					<Dropdwn setFormType={setFormType} displayForm={displayForm} setDisplayForm={setDisplayForm} />
				) : null}
				{displayForm === true ? (
					<div className='budget-form'>
						{formType === 'income' ? <IncomeForm displayForm={displayForm} setDisplayForm={setDisplayForm} /> : null}
						{formType === 'expense' ? <ExpenseForm displayForm={displayForm} setDisplayForm={setDisplayForm} /> : null}
						{formType === 'debt' ? <DebtForm displayForm={displayForm} setDisplayForm={setDisplayForm} /> : null}
						{formType === 'savings' ? <SavingsForm displayForm={displayForm} setDisplayForm={setDisplayForm} /> : null}
					</div>
				) : null}
			</div>
			<ResponsiveTable />
		</div>
	);
}
