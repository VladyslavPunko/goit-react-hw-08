import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/slectors";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const onLogOuot = () => {};

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <div>
                <span>Hi, {userData.name}</span>
                <button type="button" onClick={onLogOuot}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Log In</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
