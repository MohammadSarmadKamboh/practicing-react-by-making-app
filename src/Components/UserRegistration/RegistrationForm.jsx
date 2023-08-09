import './RegistrationForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../Config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';



const RegistrationForm = () => {
  const navigate = useNavigate();


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short First Name!')
      .max(25, 'Too Long First Name!')
      .required('First Name is Required!'),
    lastName: Yup.string()
      .min(2, 'Too Short Last Name!')
      .max(25, 'Too Long Last Name!')
      .required('Last Name is Required!'),
    email: Yup.string()
      .email()
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/,
        'Email must contain valid format i.e. user@example.com'
      )
      .required('Email is required!'),
    password: Yup.string()
      .min(8)
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])/,
        'Password must contain both letters and numbers'
      )
      .required('Password is required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required!')
  });

  const handleCreateUserWithEmailAndPassword = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log('user credentials Registered', userCredential)
      const user = userCredential.user;
      console.log('User created or Registered:', user);
      // Display a success message to the user
      alert('You have successfully registered!');

    } catch (error) {
      console.log('Error creating user:', error);
      // Display error message to the user based on error code
      let errorMessage = '';
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already exists';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email format';
          break;
        default:
          errorMessage = 'An unknown error occurred. Registration failed.';
          break;
      }
      alert(errorMessage);

    }

  };

  const handleSubmitRegistration = async (values, { resetForm }) => {
    try {
      // Handle form submission logic here
      console.log(values);
      // alert(JSON.stringify(values, null, 2));

      await handleCreateUserWithEmailAndPassword(values);


      // Reset the form input fields to their initial values
      resetForm();
    } catch (error) {
      console.log('Error handling form submission:', error);
    }
    navigate('/login');

  };

  return (
    <div className='registration-form'>
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitRegistration}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"

              />
              {errors.firstName && touched.firstName ? (
                <ErrorMessage name="firstName" component="div" className="error-message" />
              ) : null}
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <Field
                id="lastName"
                name="lastName"
                type="text"

              />
              {errors.lastName && touched.lastName ? (
                <ErrorMessage name="lastName" component="div" className="error-message" />
              ) : null}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field
                id="email"
                name="email"
                type="email"

              />
              {errors.email && touched.email ? (
                <ErrorMessage name="email" component="div" className="error-message" />
              ) : null}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field
                id="password"
                name="password"
                type="password"

              />
              {errors.password && touched.password ? (
                <ErrorMessage name="password" component="div" className="error-message" />
              ) : null}
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"

              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
              ) : null}
            </div>

            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}

      </Formik>
      <p>
        Already registered? <Link to="/login">Login here</Link>
      </p>

    </div>
  );
};

export default RegistrationForm;
