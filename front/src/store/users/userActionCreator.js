import { checkUserCrendentials } from '../../helpers/api.js';
import { userActions } from './userSlice.js';

export const autenticateUser = (isLogin, username, password) => (dispatch) => {
  return checkUserCrendentials(isLogin, username, password).then(
    (data) => {
      dispatch(userActions.login(data));
      return Promise.resolve();
    },
    (error) => {
      dispatch(userActions.logout());
      return Promise.reject(error);
    },
  );
};
