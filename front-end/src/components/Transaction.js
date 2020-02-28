import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? '-' : '+';
	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
			<button
				onClick={() => deleteTransaction(transaction.id)}
				className='delete-btn'
			>
				X
			</button>
			{'  '}
			{transaction.text}
			{'              '}
			<span>
				{sign}${Math.abs(transaction.amount)}
			</span>{' '}
		</li>
	);
};
