
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch  } = useContext(AppContext);

    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value.charAt(0),
        });
    }
  
        return (
        <div>
            <span>Currency (</span>
            <select className="custom-select" id="currencySelect" onChange={(event) => setCurrency(event.target.value)}>
            <option defaultValue="£ Pound">£ Pound</option>
            <option value="$ Dollar" name="dollar"> $ Dollar</option>
            <option value="€ Euro" name="euro"> € Euro</option>
            <option value="₹ Rupee" name="rupee"> ₹ Rupee</option>
            </select>
            <span>)</span>
        </div>
    );
};

export default Currency;
