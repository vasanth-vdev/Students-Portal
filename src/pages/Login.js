import React from 'react';
import LoginData from './../data/LoginData.js';
import LoginSwitchBtn from './../components/LoginSwitchBtn';
import LoginInput from '../components/LoginInput.js';
import './../assets/css/Login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
	return (
		<div className='loginPage'>
			{LoginData.map((item) => {
				return (
					<div className='loginHeader'>
						<img className='loginLogo' src={item.logo} alt='psg ptc logo' />
						<h1 className='loginLogoTitle'>{item.logoTitle}</h1>
						<h2 className='loginLogoSubTitle'>{item.logoSubTitle}</h2>
					</div>
				);
			})}
			<div className='loginContent'>
				<h1 className='loginContentTitle'>Login to Your Account</h1>
				<div className='loginSwitch'>
					<LoginSwitchBtn icon='student' text='STUDENT’S LOGIN' active={true} />
					<LoginSwitchBtn
						icon='teacher'
						text='TEACHER’S LOGIN'
						active={false}
					/>
				</div>
				<form className='loginFormControlGroup'>
					<LoginInput inputName='Roll No' type='text' />
					<LoginInput inputName='Password' type='text' />
					<NavLink to='/'>
						<button className='loginBtn'>LOGIN</button>
					</NavLink>
				</form>
			</div>
		</div>
	);
};

export default Login;
