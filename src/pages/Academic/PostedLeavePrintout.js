import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import LeaveStatusShell from '../../components/LeaveStatusShell';
import GreenButton from './../../components/GreenButton';
import { Field, Form, Formik } from 'formik';
import './../../assets/css/PostedLeavePrintout.css';
import './../../components/css/SideNameInput.css';
import { useFirestore } from '../../Context/FirestoreContext';
import { useAuth } from '../../Context/AuthContext';
import { where } from 'firebase/firestore';

const PostedLeavePrintout = () => {
  const { addData, getFileURL, getData } = useFirestore();
  const [leaveData, setleaveData] = useState([]);
  const { userData } = useAuth();
  const tableName = 'postedLeavePrintout';
  useEffect(() => {
    (async function () {
      const q = where('rollNo', '==', userData.rollno);
      const data = await getData(tableName, q);
      setleaveData(data);
    })();
  }, []);
  return (
    <div>
      <PageHeader text='Posted Leave Printout' />
      <PageContent>
        <div className='PostedLeavePrintoutContainer'>
          <Formik
            initialValues={{
              fromDate: '',
              toDate: '',
              reason: '',
              document: null,
            }}
            onSubmit={async (values) => {
              const user = {
                tutorID: userData.tutorID,
                name: userData.name,
                photo: userData.photo,
                rollNo: userData.rollno,
                responded: false,
                status: null,
              };
              const url = await getFileURL(values.document, tableName);
              values.document = url;
              const data = {
                ...values,
                ...user,
              };
              await addData(tableName, data);
              document.querySelector('#PostedLeavePrintoutForm').reset();
            }}>
            {({ setFieldValue, isSubmitting }) => (
              <Form
                className='PostedLeavePrintoutForm'
                id='PostedLeavePrintoutForm'>
                <div className='SideNameInputGroup'>
                  <h1 className='SideName'>From Date</h1>
                  <Field
                    type='date'
                    className='SideNameInput'
                    name='fromDate'
                  />
                </div>
                <div className='SideNameInputGroup'>
                  <h1 className='SideName'>To Date</h1>
                  <Field type='date' className='SideNameInput' name='toDate' />
                </div>
                <div className='SideNameInputGroup' style={{ width: '100%' }}>
                  <h1 className='SideName'>Reason</h1>
                  <Field
                    as='textarea'
                    className='SideNameTextArea'
                    rows='5'
                    maxLength='450'
                    name='reason'
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
                  />
                </div>
                <GreenButton disabled={isSubmitting} marginCenter>
                  Print
                </GreenButton>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <h1 style={{ fontSize: '2.5rem', margin: '3rem 0rem' }}>
            Leave Status
          </h1>
          <div className='StatusContainer'>
            {console.log(leaveData)}
            {leaveData.map((item, index) => (
              <LeaveStatusShell
              key={index}
                Name={userData.name}
                Rollno={item.rollNo}
                document={item.document}
                Filename='Attachement'
                From={item.fromDate}
                To={item.toDate}
                Days='5'
                Status={item.status}
              />
            ))}
          </div>
        </div>
      </PageContent>
    </div>
  );
};

export default PostedLeavePrintout;
