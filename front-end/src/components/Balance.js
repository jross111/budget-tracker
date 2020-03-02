// import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';

// export const Balance = () => {
// 	const { transactions } = useContext(GlobalContext);
// 	const amounts = transactions.map((transaction) => transaction.amount);
// 	const balance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
// 	const sign = balance < 0 ? '-' : '';

// 	return (
// 		<div>
// 			<hr />

// 			<h2 className={balance < 0 ? 'minus' : 'plus'}>
// 				{sign}${Math.abs(balance)}
// 			</h2>
// 		</div>
// 	);
// };

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
		<div>
			<h2 className={total < 0 ? 'minus' : 'plus'}>{total}</h2>
		</div>
	);
};
