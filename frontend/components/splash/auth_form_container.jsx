import { connect } from 'react-redux';
import AuthForm from './auth_form';

import { login, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
