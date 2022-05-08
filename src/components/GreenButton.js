import React from 'react';
import './css/GreenButton.css';
const GreenButton = ({ children, marginCenter, ...props }) => {
  return (
    <button
      type='submit'
      {...props}
      className={marginCenter ? 'greenButton marginCenter' : 'greenButton'}>
      {children}
    </button>
  );
};

export default GreenButton;
