import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';
const BudgetDashboardPage = () => (
    <div>
        <p></p>
        <ExpensesSummary/>
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
)
export default BudgetDashboardPage;