import React from 'react';
import './css/GreenButton.css';
const GreenButton = ({ children, marginCenter }) => {
  return (
    <button
      type='submit'
      className={marginCenter ? 'greenButton marginCenter' : 'greenButton'}>
      {children}
    </button>
  );
};

export default GreenButton;
