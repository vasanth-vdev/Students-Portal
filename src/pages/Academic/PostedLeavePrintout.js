import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';

import SideNameInput from '../../components/SideNameInput';
import GreenButton from './../../components/GreenButton';
import { Form, Formik } from 'formik';
import './../../assets/css/PostedLeavePrintout.css';

const PostedLeavePrintout = () => {
  return (
    <div>
      <PageHeader text='Posted Leave Printout' />
      <PageContent>
        <div className='PostedLeavePrintoutContainer'>
          <Formik
            initialValues={{
              name: '',
              rollNo: '',
              fromDate: '',
              toDate: '',
              reason: '',
              document: null,
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}>
            {({ setFieldValue }) => (
              <Form className='PostedLeavePrintoutForm'>
                <SideNameInput type='text' name='name' />
                <SideNameInput type='text' name='rollNo' />
                <SideNameInput type='date' name='fromDate' />
                <SideNameInput type='date' name='toDate' />
                <SideNameInput
                  type='textarea'
                  name='reason'
                  rows='5'
                  width='100%'
                />
                <SideNameInput
                  type='file'
                  name='document'
                  width='100%'
                  onChange={(e) => {
                    setFieldValue('document', e.target.value);
                  }}
                />
                <GreenButton marginCenter>Print</GreenButton>
              </Form>
            )}
          </Formik>
        </div>
      </PageContent>
    </div>
  );
};

export default PostedLeavePrintout;
