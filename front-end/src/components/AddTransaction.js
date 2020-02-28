import React, { useState } from 'react';

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	return (
		<div>
			<h3>Add Transaction</h3>
			<form>
				<div className='form-control'>
					<label for='text'>Description: </label>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder='Enter Description...'
					/>
				</div>
				<div className='form-control'>
					<label for='ammount'>Ammount:</label>
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
