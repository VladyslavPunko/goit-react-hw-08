import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return IsLoggedIn ? <Navigate to="/contacts" replace /> : children;
};

export default RestrictedRoute;
