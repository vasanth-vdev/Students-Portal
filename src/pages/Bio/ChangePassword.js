import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import { useAuth } from '../../Context/AuthContext';
import { loadModels, getFullFaceDescription } from './../../api/faceapi';
import { useFirestore } from '../../Context/FirestoreContext';
import { where } from 'firebase/firestore';
import CertificateCase from '../../components/CertificateCase';
import faceIcon from './../../assets/images/icons/faceIcon.png';

const InputHeader = styled.h1`
  font-size: 2rem;
  letter-spacing: 0.07rem;
  margin: 2rem 0rem;
`;

const CertificateViewer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`;

const ChangePassword = () => {
  const { passwordUpdate, logOut, userData } = useAuth();
  const { addData, getData } = useFirestore();
  const [faceData, setFaceData] = useState(null);

  const getFaceData = async () => {
    const data = await getData('faceData', [
      where('rollno', '==', userData.rollno),
    ]);
    setFaceData(data);
  };

  useEffect(() => getFaceData(), []);

  useEffect(() => {
    loadModels();
  }, []);

  return (
    <div>
      <PageHeader text='Change Password' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              password: '',
              rePassword: '',
            }}
            onSubmit={async (values) => {
              if (values.password !== values.rePassword) {
                alert(`Passwords Don't Macth`);
                document.querySelector('#changePassword').reset();
              } else {
                try {
                  passwordUpdate(values.password);
                  await logOut();
                } catch (err) {
                  alert('Failed To Change,', err);
                }
              }
            }}>
            {({ isSubmitting }) => (
              <Form id='changePassword'>
                <div>
                  <InputHeader>New Password</InputHeader>
                  <InputField type='password' name='password' />
                </div>
                <div>
                  <InputHeader>Re-type Password</InputHeader>
                  <InputField type='password' name='rePassword' />
                </div>
                <GreenButton
                  style={{
                    padding: '1.5rem',
                    width: '100%',
                  }}
                  disabled={isSubmitting}>
                  Change Password
                </GreenButton>
              </Form>
            )}
          </Formik>
        </GlassSheet>
      </PageContent>
      <div style={{ padding: '2.5rem' }}></div>
      <PageHeader text='Manage Face Data' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              photo: '',
            }}
            onSubmit={async (values) => {
              const fullFaceDescription = await getFullFaceDescription(
                values.photo
              );

              if (fullFaceDescription.length > 1) {
                alert(
                  'Upload a Image 1 face within it or Try Cropping the face'
                );
                document.querySelector('#facePrintForm').reset();
                document.querySelector('#facePrintUpload').value = '';
              } else if (fullFaceDescription.length === 0) {
                alert('Upload a Image with a face');
                document.querySelector('#facePrintForm').reset();
                document.querySelector('#facePrintUpload').value = '';
              } else if (fullFaceDescription.length === 1) {
                const faceData = {
                  rollno: userData.rollno,
                  date: new Date().toLocaleString(),
                  face_data: new Array(...fullFaceDescription[0].descriptor),
                  department: userData.department,
                  batch: userData.batch,
                };
                await addData('faceData', faceData);
                document.querySelector('#facePrintForm').reset();
                document.querySelector('#facePrintUpload').value = '';
                getFaceData();
              }
            }}>
            {({ isSubmitting, setFieldValue }) => (
              <Form id='facePrintForm'>
                <div>
                  <InputHeader>Upload Face Print</InputHeader>
                  <Field
                    type='file'
                    className='SideNameInput'
                    name='documnet'
                    style={{ zIndex: 10, position: 'relative' }}
                    id='facePrintUpload'
                    onChange={(e) => {
                      setFieldValue(
                        'photo',
                        URL.createObjectURL(e.currentTarget.files[0])
                      );
                    }}
                  />
                </div>
                <GreenButton
                  style={{
                    padding: '1.5rem',
                    width: '100%',
                  }}
                  disabled={isSubmitting}>
                  Upload Face Print
                </GreenButton>
              </Form>
            )}
          </Formik>
        </GlassSheet>
      </PageContent>
      {faceData && faceData.length !== 0 && (
        <>
          <div style={{ padding: '2.5rem' }}></div>
          <PageHeader text='Face Prints' />
          <PageContent>
            <CertificateViewer>
              {faceData &&
                faceData.map((item, index) => (
                  <CertificateCase
                    key={item.date}
                    title={`${index + 1} - ${item.date}`}
                    image={faceIcon}
                    deleteUID={item.uid}
                    tableName={'faceData'}
                    getProjects={getFaceData}
                  />
                ))}
            </CertificateViewer>
          </PageContent>
        </>
      )}
    </div>
  );
};

export default ChangePassword;
