import React, { createContext, useReducer } from 'react';
import AppReducer from '../tracker/AppReducer';
 


// Initial state
const initialState = {
    transactions: []
  }
  
  // Create context
  export const GlobalContext = createContext(initialState);
  
  // Provider component
  export const GlobalProv = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
  function deleteTransaction(id) {
    dispatch({ 
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({ 
      type: 'ADD_TRANSACTION',  
      payload: transaction
    });
  }

  function withdrawMoney(amount) {
    dispatch({ 
      type: 'WITHDRAW_MONEY',
      payload: amount
    });
  }

    return (<GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
      withdrawMoney
    
    }}>
      {children}
    </GlobalContext.Provider>);
  }