import '../index.css';
import './Login.css';
import { useState } from "react";
import React from "react";

function Login({onRegisterClick,onLoginSuccess}) {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const validateEmail = (email) =>/^\S+@\S+\.\S+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)){
            setError('Invalid email format');
            return;
         }
        if(password.length<6){
            setError('password must be atleast 6 charecters.');
            return;
         }  
         const users =JSON.parse(localStorage.getItem('users'))  || [];
         const matchedUser = users.find(
            (user) => user.email === email && user.password === password
         );
         if(matchedUser){
            setError('');
            onLoginSuccess(matchedUser);
        }else{
            setError('Invalid Email or PassWord');
        }  
}          
  return (
      <form className="register-form" onSubmit={handleSubmit} style={{ margin: '40px auto' }}>
        <h2>Login</h2>
        <div>
            <label>Email:</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        {error && <p>{error}</p>}
         <button type="submit">Login</button>
        <p>
            Don't have an account!{''}
            <button type="button" onClick={onRegisterClick}>
                Register here
            </button>
        </p>
      </form>
  )
}
export default Login;
