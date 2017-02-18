import React from 'react';
import { withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      f_name: "",
      l_name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
    this.redirectToWelcome = this.redirectToWelcome.bind(this);
  }

  componentWillReceiveProps ({ session }) {
    if (session.errors.length && this.props.session.errors !== session.errors) {
      $(".welcome-container").effect("shake", { times: 5, distance: 5}, 500 );
    }
  }

  handleChange (property) {
    return (e) => {
      this.setState({ [property]: e.target.value });
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.signup(this.state).then(
      () => this.props.router.push("/browse")
    );
  }

  redirectToLogin (e) {
    e.preventDefault();
    this.props.update("login");
  }

  redirectToWelcome (e) {
    e.preventDefault();
    this.props.update("welcome");
  }

  render () {
    return (
      <form className="splash-left signup" onSubmit={ this.handleSubmit }>
        <img className ="small-logo" src={window.images.fullLogoWhite}/>
        { this.props.errors() }
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="e.g.johndoe" onChange={ this.handleChange("username") } />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="e.g.john@email.com" onChange={ this.handleChange("email") } />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Choose a password" onChange={ this.handleChange("password") }/>
        <label htmlFor="f_name">First Name</label>
        <input type="text" name="f_name" placeholder="John" onChange={ this.handleChange("f_name") }/>
        <label htmlFor="l_name">Last Name</label>
        <input type="text" name="l_name" placeholder="Doe" onChange={ this.handleChange("l_name") }/>
        <input type="submit" value="Sign Up" className="large" />
        <p><a onClick={ this.redirectToLogin }>Already have an account? Log in here.</a></p>
        <p><a onClick={ this.redirectToWelcome }>Don't want to make an account? Log in as a guest!</a></p>
      </form>
    );
  }
}

export default withRouter(SignUpForm);
