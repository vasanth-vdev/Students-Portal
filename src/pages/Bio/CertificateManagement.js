import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import { useFirestore } from '../../Context/FirestoreContext';
import { useAuth } from '../../Context/AuthContext';
import CertificateCase from '../../components/CertificateCase';
import { where } from 'firebase/firestore';

const InputHeader = styled.h1`
  font-size: 2.2rem;
  letter-spacing: 0.07rem;
  margin: 2rem 0rem;
`;
const ContentHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  margin: 5rem 0rem 3rem 0rem;
`;
const CertificateViewer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
`;

const CertificateManagement = () => {
  const { getFileURL, addData, getData } = useFirestore();
  const { userData } = useAuth();
  const tableName = 'studentCertificates';
  const [studentCCertificates, setStudentCCertificates] = useState([]);
  const [studentCoCertificates, setStudentCoCertificates] = useState([]);
  const [studentExCertificates, setStudentExCertificates] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData(tableName, [
        where('rollno', '==', userData.rollno),
      ]);
      const curricular = data.filter((item) =>
        item.certificateType === 'Curricular' ? item : null
      );
      const coCurricular = data.filter((item) =>
        item.certificateType === 'Co-Curricular' ? item : null
      );
      const extraCurricular = data.filter((item) =>
        item.certificateType === 'Extra-Curricular' ? item : null
      );
      setStudentCCertificates(curricular);
      setStudentCoCertificates(coCurricular);
      setStudentExCertificates(extraCurricular);
    })();
  }, []);
  const getCertificates = async () => {
    const data = await getData(tableName, [
      where('rollno', '==', userData.rollno),
    ]);
    const curricular = data.filter((item) =>
      item.certificateType === 'Curricular' ? item : null
    );
    const coCurricular = data.filter((item) =>
      item.certificateType === 'Co-Curricular' ? item : null
    );
    const extraCurricular = data.filter((item) =>
      item.certificateType === 'Extra-Curricular' ? item : null
    );
    setStudentCCertificates(curricular);
    setStudentCoCertificates(coCurricular);
    setStudentExCertificates(extraCurricular);
  };
  return (
    <div>
      <PageHeader text='Manage Certificates' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              certificateType: '',
              certificateName: '',
              thumbnailURL: null,
            }}
            onSubmit={async (values) => {
              const URL = await getFileURL(values.thumbnailURL, tableName);
              values.thumbnailURL = URL;
              const data = {
                rollno: userData.rollno,
                ...values,
              };
              await addData(tableName, data);
              document.querySelector('#addCertificates').reset();
              getCertificates();
            }}>
            {({ isSubmitting, setFieldValue }) => (
              <Form id='addCertificates'>
                <div>
                  <InputHeader>Certificate Type</InputHeader>
                  <Field
                    name='certificateType'
                    as='select'
                    className='selectField'>
                    <option>Select</option>
                    <option value='Curricular'>Curricular</option>
                    <option value='Co-Curricular'>Co-Curricular</option>
                    <option value='Extra-Curricular'>Extra-Curricular</option>
                  </Field>
                </div>
                <div>
                  <InputHeader>Certificate Name</InputHeader>
                  <InputField type='text' name='certificateName' />
                </div>
                <div>
                  <InputHeader>Certificate Thumbnail</InputHeader>
                  <input
                    type='file'
                    name='thumbnailURL'
                    onChange={(e) => {
                      setFieldValue('thumbnailURL', e.currentTarget.files[0]);
                    }}
                    style={{
                      position: 'relative',
                      zIndex: '1',
                      fontSize: '2rem',
                      border: 'none',
                    }}
                  />
                </div>
                <GreenButton
                  style={{ marginTop: '2.5rem', width: '100%' }}
                  disabled={isSubmitting}>
                  Add Certificate
                </GreenButton>
              </Form>
            )}
          </Formik>
        </GlassSheet>
        {studentCCertificates.length !== 0 && (
          <div>
            <ContentHeader>Curricular</ContentHeader>
            <CertificateViewer>
              {studentCCertificates.map((item, index) => (
                <CertificateCase
                  key={index}
                  title={item.certificateName}
                  image={item.thumbnailURL}
                  deleteUID={item.uid}
                  tableName={tableName}
                  getProjects={getCertificates}
                />
              ))}
            </CertificateViewer>
          </div>
        )}
        {studentCoCertificates.length !== 0 && (
          <div>
            <ContentHeader>Co Curricular</ContentHeader>
            <CertificateViewer>
              {studentCoCertificates.map((item, index) => (
                <CertificateCase
                  key={index}
                  title={item.certificateName}
                  image={item.thumbnailURL}
                  deleteUID={item.uid}
                  tableName={tableName}
                  getProjects={getCertificates}
                />
              ))}
            </CertificateViewer>
          </div>
        )}
        {studentExCertificates.length !== 0 && (
          <div>
            <ContentHeader>Extra Curricular</ContentHeader>
            <CertificateViewer>
              {studentExCertificates.map((item, index) => (
                <CertificateCase
                  key={index}
                  title={item.certificateName}
                  image={item.thumbnailURL}
                  deleteUID={item.uid}
                  tableName={tableName}
                  getProjects={getCertificates}
                />
              ))}
            </CertificateViewer>
          </div>
        )}
      </PageContent>
    </div>
  );
};

export default CertificateManagement;
