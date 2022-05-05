import React from 'react'
import './css/CertificateCase.css';

const CertificateCase = props => {
  return (
<div>
<div className='CertificateContainer'>
<div className='MainContainer'>
<img className='CertImage' src={props.Certificate} alt='Certificate'/>
</div>
<div className='SubHeaderContainer'>
<h2 className='SubHeader'>{props.subheader}</h2>
</div>
</div>
</div>
  )
}

export default CertificateCase