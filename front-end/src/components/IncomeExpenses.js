import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	// const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	// const sign = transactions.amount < 0 ? '-' : '+';
	// const incomes = amounts
	// 	.filter((value) => value > 0)
	// 	.reduce((acc, item) => (acc += item), 0)
	// 	.toFixed(2);

	// const expenses = amounts
	// 	.filter((value) => value < 0)
	// 	.reduce((acc, item) => (acc += item), 0)
	// 	.toFixed(2);

	let incomes = [];
	let expenses = [];
	amounts.forEach((el) => {
		el > 0 ? incomes.push(el) : expenses.push(el);
	});
	incomes = incomes.reduce((acc, item) => (acc += item), 0);
	expenses = expenses.reduce((acc, item) => (acc += item), 0);

	return (
		<div className='row align-items-center'>
			<div className='col'>
				<h4 className='card border'>
					Income
					<p id='money-plus' className='plus'>
						${Math.abs(incomes)}
					</p>
				</h4>
			</div>
			<div className='col'>
				<h4 className='card border'>
					Expenses
					<p className='minus'>${Math.abs(expenses)}</p>
				</h4>
			</div>
		</div>
	);
};
