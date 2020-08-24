import React from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.pvg.png'
          alt='Amazon Logo'
          className='login__logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='email' />
          <h5>Password</h5>
          <input type='password' />
          <button type='submit' className='lgoin__signInButton'>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our interest-Based Ads
          Notice
        </p>
        <button className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
