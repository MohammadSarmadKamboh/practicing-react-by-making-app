import "./LoginForm.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebaseConfig';



const LoginForm = () => {
    const [redirectToRegistrationForm, setRedirectToRegistrationForm] = useState(false);
    const navigate = useNavigate();


    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email()
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const handleLogin = async (values, { resetForm }) => {
        try {

            const { email, password } = values;

            // Check if the user is registered (verify email and password)
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('user Login credentials', userCredential)
            const user = userCredential.user;
            console.log('user Login ', user)

            if (user) {
                // If registered, authenticate the user

                // Store the Firebase access token in session storage
                const token = await user.getIdToken();
                console.log(token);
                sessionStorage.setItem('UserAccessToken', token);

                // Display a success message to the user
                alert('You have successfully logged in!');

                navigate('/dashboard');

            }

            // Reset the form input fields to their initial values
            resetForm();
        } catch (error) {
            // console.log('Error handling form submission:', error);

            // Display error message to the user based on error code
            let errorMessage = '';
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email format. Please enter a valid email address.';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'Your account has been disabled. Please contact support for assistance.';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'User account is not registered. Please register yourself  before logging in.';
                    setRedirectToRegistrationForm(true);
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'Invalid or wrong password. Please check your credentials and try again.';
                    break;
                default:
                    errorMessage = 'An unknown error occurred. Login failed.';
                    break;
            }
            alert(errorMessage);
        }
    };

    useEffect(() => {
        if (redirectToRegistrationForm) {
            navigate('/registration');
        }
    }, [redirectToRegistrationForm, navigate]);


    return (
        <div className='login-form'>
            <h1>Login Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                required
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
                                required
                            />
                            {errors.password && touched.password ? (
                                <ErrorMessage name="password" component="div" className="error-message" />
                            ) : null}
                        </div>

                        <button type="submit" disabled={isSubmitting}>Login</button>
                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default LoginForm;
