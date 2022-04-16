import React from 'react';
import LoginData from './../data/LoginData.js';
import LoginSwitchBtn from './../components/LoginSwitchBtn';
import LoginInput from '../components/LoginInput.js';
import { useGoogleAuth } from './../Context/GoogleAuthContext';
import { NavLink, Navigate } from 'react-router-dom';
import './../assets/css/Login.css';

const Login = () => {
  const { currentUser, googleSignIn, googleSignOut, loading } = useGoogleAuth();

  return (
    <>
      {currentUser ? <Navigate to='/' /> : null}
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
            <LoginSwitchBtn
              icon='teacher'
              text='TEACHER’S LOGIN'
              active={false}
            />
          </div>
          <form className='loginFormControlGroup'>
            {currentUser ? (
              <button onClick={googleSignOut} className='loginBtn'>
                Sign Out
              </button>
            ) : (
              <button
                className='loginBtn'
                onClick={googleSignIn}
                disabled={loading && !currentUser ? true : false}>
                Login with Google
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
