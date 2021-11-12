import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import Nav from '../components/Nav';
import Dashboard from './Dashboard';

import './Login.css'
 
function Login() {
  const adminUser = {
    email: 'admin@mail.com',
    password: 'admin123'
  }
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details); 

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details incorrect!");
      setError("Details incorrect!");
    }
  }
  

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <div className="Login">
      <Nav />
     {(user.email !== "") ? (
        <div className="welcome">
          <Dashboard />
          <h2><span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm className="LoginForm" Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;