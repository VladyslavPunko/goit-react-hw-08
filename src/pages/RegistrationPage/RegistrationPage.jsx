import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import css from "../../components/ContactForm/ContactForm.module.css";
import { useId } from "react";
import { register } from "../../redux/auth/operations";

import { useDispatch } from "react-redux";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Too Short!")
    .max(38, "Too Long!"),

  email: Yup.string()
    .email("You must enter a valid email address")
    .required("Email is required")
    .min(3, "Too Short!"),

  password: Yup.string().min(7, "Too Short!").required("Password is required"),
});

const RegistrationPage = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const finalContact = { ...values };
    console.log("finalContact: ", finalContact);
    dispatch(register(finalContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={css.forms}>
        <h2>Register user</h2>
        <div className={css.add}>
          <label htmlFor={nameFieldId} name="name">
            Name
          </label>
          <Field
            className={css.inp}
            type="text"
            name="name"
            placeholder="Enter You name"
          />
          <ErrorMessage className={css.err} name="name" component="span" />
          <br />

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

export default RegistrationPage;
