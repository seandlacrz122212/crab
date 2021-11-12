import React, { useState, useContext } from 'react';
import { GlobalContext} from '../tracker/Global';

import './AddTransaction.css';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount : +amount,
    }

    addTransaction(newTransaction);
   
  }

    return (
      <>
        <h3 className="new-transaction">Create New Transaction</h3>
        <form onSubmit={onSubmit} >
          <div className="form-control">
            <label htmlFor="text">User: </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Ex. 0101 0202 03030 4444" />
          </div>
          <div className="form-control">
            <label htmlFor="text">Deposit: </label>
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} id="text" placeholder="" />
          </div>
          <button className="btn-add">Add</button>
        </form>
      </>
  )
}