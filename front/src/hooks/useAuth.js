import { useDispatch, useSelector } from 'react-redux';
import { changeUserPassword } from '../helpers/api.js';
import { autenticateUser } from '../store/users/userActionCreator.js';

const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = !!auth.accessToken;
  const dispatch = useDispatch();

  const signinHandler = (username, password) => dispatch(autenticateUser(true, username, password));

  const signupHandler = (username, password) =>
    dispatch(autenticateUser(false, username, password));

  const changePasswordHandler = (oldPassword, newPassword) =>
    changeUserPassword(auth.username, oldPassword, newPassword);

  return {
    getAuth: () => auth,
    isLoggedIn,
    signin: signinHandler,
    signup: signupHandler,
    changePassword: changePasswordHandler,
  };
};

export default useAuth;
