import React, { useContext } from 'react';
import { List } from '../tracker/List';
import { GlobalContext} from '../tracker/Global';

import './Balance.css'


  
  export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
  
    const amounts = transactions.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0);
  
  
    return (
      <div className="balance">
        <h4 className="header-balance">Your Balance<br /><span id="user-id"></span></h4>
      <h1 className="total-balance">&#8369;{total}</h1>
      <List />
      </div>
    )
  }