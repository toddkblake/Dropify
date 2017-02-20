import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUsers = () => dispatch => {
  return UserApiUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users)),
    errors => console.log(errors)
  );
}

export const fetchUser = (userId) => dispatch => {
  return UserApiUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    errors => console.log(errors)
  );
}

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  user
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})
