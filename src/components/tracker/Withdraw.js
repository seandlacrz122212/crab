import React, { useState, useContext } from 'react';
import { GlobalContext} from '../tracker/Global';

import './AddTransaction.css';

export const Withdraw = () => {
  const [money, setMoney] = useState('');

  
  const { withdrawMoney } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newAmount = {
      id: Math.floor(Math.random() * 100000000),
      money : +money,
    }

    withdrawMoney(newAmount);
  }


    return (
      <>
      <form onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Withdraw: </label>
          <input type="text" onChange={(e) => setMoney(e.target.value)} id="text" placeholder="Ex. 1 000" />
        </div>
        <button className="btn-add">Add</button>
      </form>
      </>
    )
}

