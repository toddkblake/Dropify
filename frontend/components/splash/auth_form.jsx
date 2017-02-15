import React from 'react';

import Welcome from './welcome';
import LoginForm from './login_form';
import SignUpForm from './signup_form';

class AuthForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      formType: "welcome"
    };
    this.update = this.update.bind(this);
  }

  update (formType) {
    this.setState({ formType });
  }

  render () {
    const { session, login, signup } = this.props;
    switch(this.state.formType) {
      case ("login"): {
        return (<LoginForm login={ login } session={ session } update={ this.update } />);
      }
      case ("signup"): {
        return (<SignUpForm signup={ signup } session={ session } update={ this.update } />);
      }
      default: {
        return (<Welcome login={ login } update={ this.update } />);
      }
    }
  }
}

export default AuthForm;
