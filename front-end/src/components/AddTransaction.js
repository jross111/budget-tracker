import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: +amount,
		};
		addTransaction(newTransaction);
	};

	return (
		<div>
			<h3>Add Transaction</h3>
			<form onSubmit={onSubmit}>
				<div className='form-control'>
					<label htmlFor='text'>Description: </label>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder='Enter Description...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='ammount'>Ammount:</label>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder='Enter Amount ...'
					/>
				</div>
				<button className='btn'>Add Transaction</button>
			</form>
		</div>
	);
};
