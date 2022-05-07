import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
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

const CertificateManagement = () => {
  return (
    <div>
      <PageHeader text='Manage Certificates' />
      <PageContent>
        <GlassSheet
          height='auto'
          width='auto'
          borderRadius='4rem'
          padding='4rem 6rem'>
          <Formik>
            <Form>
              <div>
                <InputHeader>Certificate Type</InputHeader>
                <InputField type='text' name='CertificateType' />
              </div>
              <div>
                <InputHeader>Certificate Name</InputHeader>
                <InputField type='text' name='CertificateName' />
              </div>
              <div>
                <InputHeader>Certificate Photo</InputHeader>
                <input
                  style={{
                    height: '2rem',
                    display: 'block',
                  }}
                  type='file'
                  name='CertificatePhoto'
                />
              </div>
              <GreenButton>SUBMIT</GreenButton>
            </Form>
          </Formik>
        </GlassSheet>
      </PageContent>
    </div>
  );
};

export default CertificateManagement;
