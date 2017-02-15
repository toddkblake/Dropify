import React from 'react';
import { withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirectToSignup = this.redirectToSignup.bind(this);
  }

  handleChange (property) {
    return (e) => {
      this.setState({ [property]: e.target.value });
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.login(this.state).then(
      () => this.props.router.push("/browse")
    );
  }

  redirectToSignup (e) {
    e.preventDefault();
    this.props.update("signup");
  }

  render () {
    return (
      <form className="login" onSubmit={ this.handleSubmit } >
        <img src={window.images.fullLogoWhite}/>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Dropify username" onChange={ this.handleChange("username") } />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" onChange={ this.handleChange("password") }/>
        <input type="submit" value="Log In"/>
        <p>Don't have an account? <a onClick={ this.redirectToSignup }>Sign up here!</a></p>
      </form>
    );
  }
}

export default withRouter(LoginForm);