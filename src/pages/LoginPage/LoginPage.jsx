import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import css from "../../components/ContactForm/ContactForm.module.css";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("You must enter a valid email address")
    .required("Email is required")
    .min(3, "Too Short!"),

  password: Yup.string().min(7, "Too Short!").required("Password is required"),
});

const LoginPage = () => {
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const finalContact = { ...values };
    console.log("finalContact: ", finalContact);
    dispatch(login(finalContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css.forms}>
        <h2>Login</h2>
        <div className={css.add}>
          <label htmlFor={numberFieldId} name="email">
            Email
          </label>
          <Field
            className={css.inp}
            type="email"
            name="email"
            placeholder="Enter You email address"
          />
          <ErrorMessage className={css.err} name="email" component="span" />
          <br />

          <label htmlFor={numberFieldId} name="password">
            Password
          </label>
          <Field
            className={css.inp}
            type="password"
            name="password"
            placeholder="Enter You password"
          />
          <ErrorMessage className={css.err} name="password" component="span" />
          <br />
        </div>

        <button className={css.btn} type="submit">
          Registration
        </button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
