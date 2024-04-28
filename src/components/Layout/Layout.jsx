import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/slectors";

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn ? (
            <>
              {" "}
              <NavLink to="/contacts">Contacts</NavLink>{" "}
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
