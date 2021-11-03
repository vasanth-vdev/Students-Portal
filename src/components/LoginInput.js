import React from 'react'
import './css/LoginInput.css'
const LoginInput = ({inputName,type}) => {
    return (
        <div className='inputGroup'>
            <p className='inputName'>{inputName}</p>
            <input type={type === 'password' ? 'password' : 'text'} className='input'/>
        </div>
    )
}

export default LoginInput
