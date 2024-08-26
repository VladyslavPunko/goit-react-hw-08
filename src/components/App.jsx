import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { lazy } from "react";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";
import NoFoundPage from "../pages/NoFoundPage/NoFoundPagп
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";ваі
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pagesвіапа
  const dispatch = useDispatch();п
  return (
    <>
      <Layout>
        <Routes>авіпвіапіваіпв
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>пвіапаів
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }віа
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }ваі
          <Route path="*" element={<NoFoundPage />} />п
        </Routes>
      </Layout>
    </>
  );
}

export default App;
