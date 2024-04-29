import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slectors";
import { Navigate } from "react-router-dom";

const PrivatedRoute = ({ children }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return IsLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivatedRoute;
