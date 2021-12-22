import React from 'react';
import './css/LoginInput.css';
const LoginInput = ({ inputName, type }) => {
	return (
		<div className='loginInputGroup'>
			<p className='loginInputName'>{inputName}</p>
			<input
				className='loginInputField'
				type={type === 'password' ? 'password' : 'text'}
			/>
		</div>
	);
};

export default LoginInput;
