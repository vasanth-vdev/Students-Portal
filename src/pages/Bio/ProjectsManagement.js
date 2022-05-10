import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import GlassSheet from '../../components/GlassSheet';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import { useFirestore } from '../../Context/FirestoreContext';
import { useAuth } from '../../Context/AuthContext';
import CertificateCase from '../../components/CertificateCase';
import { where } from 'firebase/firestore';

const InputHeader = styled.h1`
  font-size: 2rem;
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

const ProjectsManagement = () => {
  const { getFileURL, addData, getData } = useFirestore();
  const { userData } = useAuth();
  const tableName = 'studentProjects';
  const [studentProjects, setStudentProjects] = useState();
  useEffect(() => {
    (async () => {
      const data = await getData(tableName, [
        where('rollno', '==', userData.rollno),
      ]);
      setStudentProjects(data);
    })();
  }, []);
  const getProjects = async () => {
    const data = await getData(tableName, [
      where('rollno', '==', userData.rollno),
    ]);
    setStudentProjects(data);
  };
  return (
    <div>
      <PageHeader text='Manage Projects' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              projectName: '',
              projectURL: '',
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
              document.querySelector('#addProjects').reset();
              getProjects();
            }}>
            {({ isSubmitting, setFieldValue, setSubmitting }) => (
              <Form id='addProjects'>
                <div>
                  <InputHeader>Project Name</InputHeader>
                  <InputField type='text' name='projectName' />
                </div>
                <div>
                  <InputHeader>Project URL / Github Repo URL</InputHeader>
                  <InputField type='text' name='projectURL' />
                </div>
                <div>
                  <InputHeader>Project Thumbnail</InputHeader>
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
                  Add Project
                </GreenButton>
              </Form>
            )}
          </Formik>
        </GlassSheet>
        {studentProjects && (
          <div>
            <ContentHeader>Projects</ContentHeader>
            <CertificateViewer>
              {studentProjects.map((item, index) => (
                <CertificateCase
                  key={index}
                  title={item.projectName}
                  url={item.projectURL}
                  image={item.thumbnailURL}
                  deleteUID={item.uid}
                  tableName={tableName}
                  getProjects={getProjects}
                />
              ))}
            </CertificateViewer>
          </div>
        )}
      </PageContent>
    </div>
  );
};

export default ProjectsManagement;
