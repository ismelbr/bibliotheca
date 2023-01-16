import { useDispatch, useSelector } from 'react-redux';
import { autenticateUser } from '../store/users/userActionCreator.js';

const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  const isLoggedIn = !!auth.accessToken;
  const dispatch = useDispatch();

  const signinHandler = (username, password) => dispatch(autenticateUser(true, username, password));

  const signupHandler = (username, password) =>
    dispatch(autenticateUser(false, username, password));

  return {
    getAuth: () => auth,
    isLoggedIn,
    signin: signinHandler,
    signup: signupHandler,
  };
};

export default useAuth;
