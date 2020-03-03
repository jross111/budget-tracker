import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? '-' : '';
	return (
		<li
			className={
				transaction.amount < 0
					? 'list-group-item list-group-item-danger'
					: 'list-group-item list-group-item-success'
			}
		>
			<button
				onClick={() => deleteTransaction(transaction.id)}
				className='btn btn-sm pr-4 col-1'
			>
				X
			</button>
			<span className='col-1'>
				{'  '}
				{transaction.text}
				{'              '}
			</span>
			<span className='col-2'>
				{sign}${Math.abs(transaction.amount)}
			</span>{' '}
		</li>
	);
};
