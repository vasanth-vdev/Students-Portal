import React from 'react';
import { Field } from 'formik';
import styled from 'styled-components';

const Input = styled(Field)`
  font-size: 3rem;
  height: 7rem;
  width: 100%;
  border-radius: 2rem;
  border: 2px solid #c3c3c3;
  padding: 1rem 2rem;
  position: relative;
  z-index: 1;
  
`;

const InputField = ({ ...props }) => {
  return <Input {...props} />;
};

export default InputField;
