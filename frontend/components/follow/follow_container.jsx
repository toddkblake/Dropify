import { connect } from 'react-redux';
import Follow from './follow';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  users: Object.values(state.users),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
