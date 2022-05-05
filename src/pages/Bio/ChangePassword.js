import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import GreenButton from '../../components/GreenButton';

const InputHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.07rem;
  margin: 2rem 0rem;
`;

const InputField = styled.input`
  height: 1rem;
  width: 4rem;
  font-size: 2rem;
  padding: 2rem 4rem;
`;

const ChangePassword = () => {
  return (
    <div>
      <PageHeader text='Change Password' />
      <PageContent>
        <GlassSheet
          height='auto'
          width='auto'
          borderRadius='4rem'
          padding='4rem 6rem'>
          <Formik>
            <Form>
              <div>
                <InputHeader>New Password</InputHeader>
                <InputField type='password' name='OldPassword' />
              </div>
              <div>
                <InputHeader>Re-type</InputHeader>
                <InputField type='password' name='NewPassword' />
              </div>
              <GreenButton>SUBMIT</GreenButton>
            </Form>
          </Formik>
        </GlassSheet>
      </PageContent>
    </div>
  );
};

export default ChangePassword;
