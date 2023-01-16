import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    // user is not authenticated
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;