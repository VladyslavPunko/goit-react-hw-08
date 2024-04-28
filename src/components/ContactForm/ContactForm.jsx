import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const addContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const finalContact = { ...values };
    dispatch(addContact(finalContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addContactsSchema}
    >
      <Form className={css.forms}>
        <div className={css.add}>
          <label htmlFor={nameFieldId} name="name">
            Name
          </label>
          <Field id={nameFieldId} className={css.inp} type="text" name="name" />
          <ErrorMessage className={css.err} name="name" component="span" />
          <br />

          <label htmlFor={numberFieldId} name="number">
            Number
          </label>
          <Field
            id={numberFieldId}
            className={css.inp}
            type="tel"
            name="number"
          />
          <ErrorMessage className={css.err} name="number" component="span" />
          <br />
        </div>

        <button className={css.btn} type="submit">
          Add Contacts
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
