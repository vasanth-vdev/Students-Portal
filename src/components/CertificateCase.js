import React from 'react';
import './css/CertificateCase.css';

const CertificateCase = (props) => {
  return (
    <div>
      <a href={props.Link}>
        <div className='MainContainer'>
          <img
            className='CertImage'
            src={props.Certificate}
            alt='Certificate'
          />
        </div>
        <div className='SubHeaderContainer'>
          <h2 className='SubHeader'>{props.subheader}</h2>
        </div>
      </a>
    </div>
  );
};

export default CertificateCase;
