import { connect } from 'react-redux';
import User from './user';
import { followUser, unfollowUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.users[state.session.currentUser.id]
});

const mapDispatchToProps = dispatch => ({
  followUser: (currentUser, user) => dispatch(followUser(currentUser, user)),
  unfollowUser: (currentUser, user) => dispatch(unfollowUser(currentUser, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
