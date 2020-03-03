import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<div className='container'>
			{/* <h3>History</h3> */}
			<div className='row'>
				<div className='col-4'></div>
				<div className='col-4'>
					<ul id='list' className='list-group m-5'>
						{transactions.map((transaction) => (
							<Transaction key={transaction.id} transaction={transaction} />
						))}
					</ul>
				</div>
				<div className='col-4'></div>
			</div>
		</div>
	);
};
