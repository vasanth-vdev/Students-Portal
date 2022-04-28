import { Field } from 'formik';
import React from 'react';
import './css/SideNameInput.css';

const SideNameInput = ({ type, name, rows, width, ...props }) => {
  return (
    <div className='SideNameInputGroup' style={{ width }}>
      <h1 className='SideName'>{name}</h1>
      {type === 'textarea' ? (
        <Field
          as='textarea'
          className='SideNameTextArea'
          rows={rows}
          maxLength='450'
          name={name}
          required
          {...props}></Field>
      ) : (
        <Field
          type={type}
          className='SideNameInput'
          {...props}
          name={name}
          required
        />
      )}
    </div>
  );
};

export default SideNameInput;
