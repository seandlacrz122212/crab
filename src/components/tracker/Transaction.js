import React, {useContext} from 'react'
import { GlobalContext } from './Global';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount > 0 ? '-' : '+ '}>
      {transaction.text} <span>{sign}&#8369;{(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

