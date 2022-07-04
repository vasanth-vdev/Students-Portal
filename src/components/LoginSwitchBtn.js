import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { TbFaceId } from 'react-icons/tb';
import './css/LoginBtn.css';

const LoginSwitchBtn = ({ icon, text, active, value, handleLoginType }) => {
  return (
    <button
      className={active ? 'btn active-btn' : 'btn inactive-btn'}
      onClick={() => handleLoginType(value)}>
      <span>
        {icon === 'student' ? <FaUserAlt size='16' /> : <TbFaceId size='28' />}
      </span>
      <h1 className='btn-text'>{text}</h1>
    </button>
  );
};

export default LoginSwitchBtn;
