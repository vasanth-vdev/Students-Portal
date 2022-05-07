import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import styled from 'styled-components';
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form } from 'formik';
import GreenButton from '../../components/GreenButton';

const InputHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.07rem;
  margin: 2.5rem 0rem;
`;

const InputField = styled.input`
  height: 1rem;
  width: 100%;
  border: 1.5px solid #000000;
  border-radius: 1rem;
  font-size: 1.6rem;
  padding: 2rem 4rem;
`;

const ProfileUpdate = () => {
  return (
    <div>
      <PageHeader text='Update Profile' />
      <PageContent>
        <GlassSheet
          height='auto'
          width='auto'
          borderRadius='4rem'
          padding='4rem 6rem'>
          <Formik>
            <Form>
              <div>
                <InputHeader>RollNo</InputHeader>
                <InputField type='text' name='ProjectName' />
              </div>
              <div>
                <InputHeader>Project URL (If Have)</InputHeader>
                <InputField type='url' name='ProjectUrl' />
              </div>
              <div>
                <InputHeader>Project Certificate</InputHeader>
                <InputField type='text' />
              </div>
              <GreenButton>SUBMIT</GreenButton>
            </Form>
          </Formik>
        </GlassSheet>
      </PageContent>
    </div>
  );
};

export default ProfileUpdate;
