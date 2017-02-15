import React from 'react';
import AuthForm from './auth_form';
import Marketing from './marketing';

const Splash = () => (
  <div className="splash">
    <div className="welcome-container">
      <section className="splash-left">
        <AuthForm />
      </section>
      <section className="splash-left">
        <Marketing />
      </section>
    </div>
  </div>
);

export default Splash;
