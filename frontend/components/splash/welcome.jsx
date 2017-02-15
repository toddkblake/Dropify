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
      <button name="guest" className="guest" onClick={ handleClick }>Guest Log In</button>
      <button name="signup" onClick={ handleClick }>Sign Up</button>
      <button name="login" onClick={ handleClick }>Log In</button>
    </div>
  );
};

export default withRouter(Welcome);
