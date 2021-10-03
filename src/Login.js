import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = event => {
    event.preventDefault(); // This stops the refresh
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(e => alert(e.message));
  };
  const register = event => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(e => alert(e.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>
      <div className='login_container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={even => setEmail(even.target.value)}
            type='email'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={even => setPassword(even.target.value)}
            type='password'
          />
          <button onClick={login} type='submit' className='login_signInButton'>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} type='submit' className='login_createButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
