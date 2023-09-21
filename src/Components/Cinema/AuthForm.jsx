// AuthForm.js
import "./AuthForm.css";
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebaseConfig';
import { useNavigate } from 'react-router-dom';


const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true); // Default mode is sign-up
    const navigate = useNavigate();





    const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
        const errorMessageElement = document.getElementById('error-message');
        errorMessageElement.textContent = ''; // Clear any previous error messages

        try {
            if (isSignUp) {

                console.log("Input values while Signing Up", values);
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );

                console.log('user Sign Up credentials', userCredential);
                const user = userCredential.user;

                console.log('User created or Signed Up:', user);

                alert('You have successfully Signed Up!');

                // Handle successful sign-up, e.g., show success message or redirect
            }
            else {

                console.log("Input values while Signing In", values);

                const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
                console.log('user Sign In credentials', userCredential);

                const user = userCredential.user;
                console.log('user Signed In ', user)

                if (user) {

                    const idToken = await user.getIdToken();

                    console.log('ID Token:', idToken);
                    sessionStorage.setItem('ID Token:', idToken);



                    alert('You have successfully Signed in!');

                    //jump to movies component after successful sign in
                    navigate('/movies');


                }
                resetForm();
            }

        }
        catch (error) {
            // Error handling based on specific error codes
            switch (error.code) {
                case 'auth/invalid-email':
                    // Handle invalid email error
                    errorMessageElement.textContent = 'Invalid email format. Please provide a valid email address.';
                    break;
                case 'auth/user-disabled':
                    // Handle user disabled error
                    errorMessageElement.textContent = 'User account has been disabled. Please contact support for assistance.';
                    break;
                case 'auth/user-not-found':
                    // Handle user not found error
                    errorMessageElement.textContent = 'User account not found. Please check the provided email.';
                    break;
                case 'auth/wrong-password':
                    // Handle wrong password error
                    errorMessageElement.textContent = 'Incorrect password. Please check the provided password.';
                    break;
                case 'auth/email-already-in-use':
                    // Handle email already in use error (sign-up only)
                    errorMessageElement.textContent = 'Email is already associated with an existing account. Please use a different email.';
                    break;
                case 'auth/weak-password':
                    // Handle weak password error (sign-up only)
                    errorMessageElement.textContent = 'Weak password. Please use a stronger password with at least 8 characters.';
                    break;
                case 'auth/too-many-requests':
                    // Handle too many requests error (for rate limiting)
                    errorMessageElement.textContent = 'Too many sign-in attempts. Please try again later.';
                    break;
                default:
                    // Handle other unknown errors
                    errorMessageElement.textContent = 'An unknown error occurred during authentication. Please try again later.';
            }
        }
        finally {
            setSubmitting(false);
            setTimeout(() => {
                errorMessageElement.textContent = ''; // Clear the error message after 3 seconds
            }, 3000);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .matches(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/,
                'Email must contain valid format i.e. user@example.com'
            )
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-zA-Z])(?=.*[0-9])/,
                'Invalid password. Must include both letters and numbers'
            )
            .required('Password is required'),
    });

    const initialValues = {
        email: '',
        password: ''
    };

    return (
        <div className='auth-form'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {() => (
                    <Form>

                        <div id="error-message" ></div>

                        <div>
                            <label htmlFor="email">Enter Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                        <div>
                            <label htmlFor="password">Enter Password</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error-message" />
                        </div>
                        <div>
                            <button style={{ marginTop: 20 }} type="submit" >
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </button>
                            <button style={{ marginTop: 20 }} type="button" onClick={() => setIsSignUp(prevState => !prevState)}>
                                {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>

        </div>

    );
};

export default AuthForm;
