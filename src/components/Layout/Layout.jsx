import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";

// const getNavLinkClassName = ({ isActive }) =>
//   clsx(css.navLink, {
//     [css.active]: isActive,
//   });

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>{" "}
          <NavLink to="/contacts">Contacts</NavLink>{" "}
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
