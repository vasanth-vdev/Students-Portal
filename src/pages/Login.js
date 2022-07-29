import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import LoginData from './../data/LoginData.js';
import LoginSwitchBtn from './../components/LoginSwitchBtn';
import { useAuth } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import './../assets/css/Login.css';
import './../components/css/LoginInput.css';
import Webcam from 'react-webcam';
import { getLoginFaceRecognition, loadModels } from '../api/faceapi.js';
const Login = () => {
  const { currentUser, emailPasswordSignIn, error, loading } = useAuth();
  const [loginType, setLoginType] = useState('text');
  const [button, setButton] = useState(false);
  const [image, setImage] = useState('');
  const webcamRef = React.useRef(null);
  const handleLoginType = (type) => setLoginType(type);
  useEffect(() => {
    loadModels();
  }, []);

  useEffect(() => setInterval(() => setButton(true), 2500), [loginType]);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  };

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
              handleLoginType={handleLoginType}
              active={loginType === 'text'}
              value='text'
            />
            <LoginSwitchBtn
              text='Face Unlock'
              handleLoginType={handleLoginType}
              value='face'
              active={loginType === 'face'}
            />
          </div>
          {loginType === 'text' ? (
            <Formik
              initialValues={{
                email: '19dx27@psgpolytech.ac.in',
                password: '19dx27',
              }}
              onSubmit={(values) => {
                emailPasswordSignIn(values.email, values.password);
              }}>
              {({ isSubmitting }) => (
                <Form className='loginFormControlGroup' autoComplete='off'>
                  <div className='loginInputGroup'>
                    <label className='loginInputName'>Email</label>
                    <Field
                      className='loginInputField'
                      name='email'
                      type='email'
                      required
                    />
                  </div>
                  <div className='loginInputGroup'>
                    <p className='loginInputName'>Password</p>
                    <Field
                      className='loginInputField'
                      name='password'
                      type='password'
                      required
                    />
                  </div>
                  <button
                    className={
                      !loading ? 'loginBtn' : 'loginBtn loginBtnDisabled'
                    }
                    type='submit'
                    disabled={loading}>
                    LOGIN
                  </button>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{
                rollno: '',
              }}
              onSubmit={async (values) => {
                const imageSrc = webcamRef.current.getScreenshot();
                let res = await getLoginFaceRecognition(
                  imageSrc,
                  values.rollno.toUpperCase()
                );
                setImage(imageSrc);
                if (!res) {
                  setLoginType('text');
                  setImage('');
                  document.querySelector('.loginFormControlGroup').reset();
                } else {
                  emailPasswordSignIn(res.email, res.password);
                }
              }}>
              {({ isSubmitting }) => (
                <Form className='loginFormControlGroup' autoComplete='off'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2rem',
                    }}>
                    <div className='loginInputGroup'>
                      <label className='loginInputName'>Roll No</label>
                      <Field
                        className='loginInputField'
                        name='rollno'
                        type='text'
                      />
                    </div>
                    <div
                      style={{
                        alignSelf: 'center',
                        overflow: 'hidden',
                      }}>
                      <div
                        style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          zIndex: '-1000',
                        }}>
                        {image === '' ? (
                          <Webcam
                            audio={false}
                            height={720}
                            ref={webcamRef}
                            screenshotFormat='image/jpeg'
                            width={1280}
                            videoConstraints={videoConstraints}
                          />
                        ) : (
                          <img src={image} alt='user' />
                        )}
                      </div>
                    </div>
                  </div>
                  {button && (
                    <button
                      className={
                        !loading ? 'loginBtn' : 'loginBtn loginBtnDisabled'
                      }
                      type='submit'
                      disabled={loading && isSubmitting}>
                      LOGIN
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
