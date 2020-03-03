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
			<button
				type='button'
				className='btn-lg btn-primary mt-5'
				data-toggle='modal'
				data-target='#newTx'
			>
				New Transaction
			</button>

			{/* Modal Popup */}
			<div
				className='modal fade'
				id='newTx'
				tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header '>
							<form onSubmit={onSubmit} className='align'>
								{/* <div className='form-control pt-3'> */}
								{/* <label htmlFor='text'>Description: </label> */}
								<input
									type='text'
									value={text}
									className='row'
									onChange={(e) => setText(e.target.value)}
									placeholder='Enter Description...'
								/>
								{/* </div> */}
								<div className='form-control'>
									<label htmlFor='ammount'>Ammount:</label>
									<input
										type='number'
										value={amount}
										className='row'
										onChange={(e) => setAmount(e.target.value)}
										placeholder='Amount'
									/>
								</div>
								{/* <div className='modal-footer'> */}
								<button className='btn btn-success' type='button'>
									Add Transaction
								</button>
								<button
									type='button'
									className='btn btn-secondary'
									data-dismiss='modal'
								>
									Close
								</button>
								{/* </div> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
