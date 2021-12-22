import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import './css/LoginBtn.css';

const LoginSwitchBtn = ({ icon, text, active }) => {
	return (
		<button className={active ? 'btn active-btn' : 'btn inactive-btn'}>
			<span>{icon === 'student' ? <FaUserAlt /> : <FaUserGraduate />}</span>
			<h1 className='btn-text'>{text}</h1>
		</button>
	);
};

export default LoginSwitchBtn;
