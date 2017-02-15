import React from 'react';
import { Link } from 'react-router';

const LoginForm = () => {
  return (
    <form className="login">
      <img src={window.images.fullLogoWhite}/>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="Dropify username"/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password"/>
      <input type="submit" value="Log In"/>
      <p>Don't have an account? <Link>Sign up here!</Link></p>
    </form>
  );
};

export default LoginForm;
