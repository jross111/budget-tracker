import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);
	const clearState = () => {
		setText('');
		setAmount(0);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: +amount,
		};
		addTransaction(newTransaction);
		clearState();
	};

	return (
		<div className='container border'>
			<form onSubmit={onSubmit}>
				<fieldset className='form-group'>
					<h5>New Transaction</h5>
					<div clasName='form-group'>
						<label htmlFor='description'>description</label>
						<input
							type='text'
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder='Enter text...'
							className='form-control'
						/>
					</div>

					<label htmlFor='amount'>amount</label>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder='amount'
						className='form-control'
					/>
				</fieldset>

				<button className='btn btn-success mb-3'>Add transaction</button>
			</form>
		</div>
	);
};
