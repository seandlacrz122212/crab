import React from 'react';

import { Balance } from '../components/tracker/Balance';

import { Withdraw } from '../components/tracker/Withdraw';
import { AddTransaction } from '../components/tracker/AddTransaction';
import Nav from '../components/Nav';


import { GlobalProv } from '../components/tracker/Global';

import './Dashboard.css'

function Dashboard(props) {
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }

return (
  <GlobalProv>
     
      <div className="container">
        <Balance />
      
        <AddTransaction />
        <Withdraw />
       {<input className="logout" type="button" onClick={handleLogout} value="Logout" /> }
       </div>
  </GlobalProv>
    );
}
  
  export default Dashboard;