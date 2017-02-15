import React from 'react';
import { Link } from 'react-router';

const SignUpForm = () => {
  return (
    <form className="signup">
      <img src={window.images.fullLogoWhite}/>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="e.g.johndoe"/>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" placeholder="e.g.john@email.com"/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Choose a password"/>
      <label htmlFor="f_name">First Name</label>
      <input type="text" name="f_name" placeholder="John"/>
      <label htmlFor="l_name">Last Name</label>
      <input type="text" name="l_name" placeholder="Doe"/>
      <input type="submit" value="Sign Up"/>
      <p>Already have an account? <Link>Log in here.</Link></p>
    </form>
  );
};

export default SignUpForm;
