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
      <form className="splash-left login" onSubmit={ this.handleSubmit } >
        <img className ="small-logo" src={window.images.fullLogoWhite}/>
        { this.props.errors() }
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="Dropify username" onChange={ this.handleChange("username") } />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" onChange={ this.handleChange("password") }/>
        <input type="submit" value="Log In" className="large"/>
        <p><a onClick={ this.redirectToSignup }>Don't have an account? Sign up here!</a></p>
      </form>
    );
  }
}

export default withRouter(LoginForm);
