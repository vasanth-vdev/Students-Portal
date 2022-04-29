import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';

import SideNameInput from '../../components/SideNameInput';
import GreenButton from './../../components/GreenButton';
import { Field, Form, Formik } from 'formik';
import './../../assets/css/PostedLeavePrintout.css';
import './../../components/css/SideNameInput.css';
import { useFirestore } from '../../Context/FirestoreContext';

const PostedLeavePrintout = () => {
  const { addData, getDownloadURL } = useFirestore();

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
            onSubmit={async (values) => {
              // await addData('postedLeavePrint', { values });
              getDownloadURL(values.document, 'check');
            }}>
            {({ setFieldValue }) => (
              <Form className='PostedLeavePrintoutForm'>
                <div className='SideNameInputGroup'>
                  <h1 className='SideName'>Name</h1>
                  <Field
                    type='text'
                    className='SideNameInput'
                    name='name'
                    required
                  />
                </div>
                <div className='SideNameInputGroup'>
                  <h1 className='SideName'>Roll No</h1>
                  <Field
                    type='text'
                    className='SideNameInput'
                    name='rollNo'
                    required
                  />
                </div>
                <div className='SideNameInputGroup'>
                  <h1 className='SideName'>From Date</h1>
                  <Field
                    type='date'
                    className='SideNameInput'
                    name='fromDate'
                    required
                  />
                </div>
                <div className='SideNameInputGroup'>
                  <h1 className='SideName'>To Date</h1>
                  <Field
                    type='date'
                    className='SideNameInput'
                    name='toDate'
                    required
                  />
                </div>
                <div className='SideNameInputGroup' style={{ width: '100%' }}>
                  <h1 className='SideName'>Reason</h1>
                  <Field
                    as='textarea'
                    className='SideNameTextArea'
                    rows='5'
                    maxLength='450'
                    name='reason'
                    required
                  />
                </div>
                <div className='SideNameInputGroup' style={{ width: '100%' }}>
                  <h1 className='SideName'>Document</h1>
                  <Field
                    type='file'
                    className='SideNameInput'
                    name='documnet'
                    onChange={(e) => {
                      setFieldValue('document', e.currentTarget.files[0]);
                    }}
                    required
                  />
                </div>
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
