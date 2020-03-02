import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<div className='align-items-center text-align-center'>
			<h3>History</h3>
			<ul id='list' className='list-group'>
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</div>
	);
};
