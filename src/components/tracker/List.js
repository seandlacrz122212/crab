import React, { useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext} from '../tracker/Global';

import './List.css';

export const List = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className="main">
          <h3 className="history-header">History</h3>
          <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
          </ul>
        </div >
      )
    }
