import React from 'react';

const WelcomeForm = () => {
  return (
    <form className="welcome">
      <img src={ window.images.fullLogoWhite }/>
      <input type="submit" value="Sign Up" />
      <input type="submit" value="Log In" />
      <input type="submit" value="Guest Log In" />
    </form>
  );
};

export default WelcomeForm;
