import React from 'react';
import { Formik, Form, Field } from 'formik';
import LoginData from './../data/LoginData.js';
import LoginSwitchBtn from './../components/LoginSwitchBtn';
import { useAuth } from '../Context/AuthContext';
import { NavLink, Navigate } from 'react-router-dom';
import './../assets/css/Login.css';
import './../components/css/LoginInput.css';
const Login = () => {
  const { currentUser, emailPasswordSignIn, error } = useAuth();

  return (
    <>
      {currentUser ? <Navigate to='/' /> : null}
      {error ? alert(error) : null}
      <div className='loginPage'>
        {LoginData.map((item, index) => {
          return (
            <div className='loginHeader' key={index}>
              <img className='loginLogo' src={item.logo} alt='psg ptc logo' />
              <h1 className='loginLogoTitle'>{item.logoTitle}</h1>
              <h2 className='loginLogoSubTitle'>{item.logoSubTitle}</h2>
            </div>
          );
        })}

        <div className='loginContent'>
          <h1 className='loginContentTitle'>Login to Your Account</h1>
          <div className='loginSwitch'>
            <LoginSwitchBtn
              icon='student'
              text='STUDENT’S LOGIN'
              active={true}
            />
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values) => {
              emailPasswordSignIn(values.email, values.password);
            }}>
            {() => (
              <Form className='loginFormControlGroup' autoComplete='off'>
                <div className='loginInputGroup'>
                  <p className='loginInputName'>Email</p>
                  <Field className='loginInputField' name='email' />
                </div>
                <div className='loginInputGroup'>
                  <p className='loginInputName'>Password</p>
                  <Field className='loginInputField' name='password' />
                </div>
                <button className='loginBtn' type='submit'>
                  LOGIN
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
