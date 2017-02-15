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
    this.props.clearErrors();
  }

  errors () {
    const errors = this.session.errors;
    if (errors.length) {
      return (
        <ul className="errors">
          { errors.map((error, i) => <li key={i}>{ error }</li>) }
        </ul>
      );
    }
  }

  render () {
    const { session, login, signup } = this.props;
    let form = null;

    switch(this.state.formType) {
      case ("login"): {
        form = (<LoginForm login={ login } session={ session } update={ this.update } errors={ this.errors } />);
        break;
      }
      case ("signup"): {
        form = (<SignUpForm signup={ signup } session={ session } update={ this.update } errors={ this.errors }/>);
        break;
      }
      default: {
        form = (<Welcome login={ login } update={ this.update } />);
        break;
      }
    }

    return (
      form
    );
  }
}

export default AuthForm;
