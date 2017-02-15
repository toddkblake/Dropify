import React from 'react';
import { connect } from 'react-redux';

import WelcomeForm from './welcome_form';
import LoginForm from './login_form';
import SignUpForm from './signup_form';

class AuthForm extends React.Component {

  render () {
    return (
      <SignUpForm/>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
