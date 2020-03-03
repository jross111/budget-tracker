import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? '-' : '';
	return (
		<div>
			<li
				className={
					transaction.amount < 0
						? 'list-group-item list-group-item-danger'
						: 'list-group-item list-group-item-success'
				}
			>
				<button
					onClick={() => deleteTransaction(transaction.id)}
					className='btn btn-sm '
				>
					X
				</button>
				{'  '}
				{transaction.text}
				{'              '}
				{sign}${Math.abs(transaction.amount)}{' '}
			</li>
		</div>
	);
};
