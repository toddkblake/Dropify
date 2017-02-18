import React from 'react';
import { withRouter } from 'react-router';

const Welcome = ({ login, update, router }) => {
  function handleClick (e) {
    e.preventDefault();
    switch(e.target.name) {
      case "guest": {
        login({ username: "appacademy", password: "fullstack" }).then(
          (user) => router.push("/browse")
        );
        break;
      }
      case "login": {
        update("login");
        break;
      }
      case "signup": {
        update("signup");
        break;
      }
      default: {
        update("welcome");
        break;
      }
    }
  }

  return (
    <div className="splash-left welcome">
      <img src={ window.images.fullLogoWhite }/>
      <button name="guest" className="green large" onClick={ handleClick }>Guest Log In</button>
      <button name="signup" className="large" onClick={ handleClick }>Sign Up</button>
      <button name="login" className="large" onClick={ handleClick }>Log In</button>
    </div>
  );
};

export default withRouter(Welcome);
