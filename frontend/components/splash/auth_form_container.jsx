import { connect } from 'react-redux';
import AuthForm from './auth_form';

import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
