import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { totalExpenses,currency,budget,dispatch  } = useContext(AppContext);

    const setBudget = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }
    const editBudget = (value) => {
        if(!isNaN(value)){
            if (value > 20000) {
                alert("The value cannot exceed 20,000");
                return;
            }
            if(value < parseInt(totalExpenses)) {
                alert("You cannot reduce the budget value lower than the spending");
                return;
            }
            setBudget(value);
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                required='required'
                type='number'
                id='cost'
                value={budget}
                style={{ size: 10}}
                onChange={(event) => editBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};

export default Budget;

