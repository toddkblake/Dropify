import React from 'react';
import AuthForm from './auth_form_container';
import Marketing from './marketing';

const Splash = () => (
  <div className="splash">
    <div className="welcome-container">
      <AuthForm />
      <Marketing />
    </div>
  </div>
);

export default Splash;
