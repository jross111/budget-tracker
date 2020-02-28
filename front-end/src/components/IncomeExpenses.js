import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const sign = transactions.amount < 0 ? '-' : '+';
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
		<div className='inc-exp-container'>
			<div>
				<h4>Income</h4>
				<p id='money-plus' className='money plus'>
					{sign}${Math.abs(incomes)}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p id='money-minus' className='money minus'>
					{sign}${Math.abs(expenses)}
				</p>
			</div>
		</div>
	);
};
