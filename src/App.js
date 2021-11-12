import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Login from '../src/Pages/Login';
import Dashboard from '../src/Pages/Dashboard';
import Main from '../src/Pages/Main';

 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={() => <Dashboard authorized={true} />} />
              <Route path="/main" component={Main} />
            </Switch>
      </BrowserRouter>
      
    </div>
  );
}
 
export default App;