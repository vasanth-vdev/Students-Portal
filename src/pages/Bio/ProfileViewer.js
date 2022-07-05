import React, { useEffect, useState } from 'react';
import GlassSheet from '../../components/GlassSheet';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import CertificateCase from '../../components/CertificateCase';
import { useAuth } from './../../Context/AuthContext';
import { useFirestore } from '../../Context/FirestoreContext';
import { where } from 'firebase/firestore';

const Container = styled.div`
  height: auto;
  width: auto;
  border: 1px solid transparent;
  padding: 0rem;
  margin: 0rem;
  @media screen and (max-width: 900px) {
    & {
      margin: 8rem 0;
    }
  }
  @media screen and (max-width: 450px) {
    & {
      margin: 8rem 0;
    }
  }
`;

const StaffImage = styled.img`
  position: absolute;
  left: 50%;
  top: 12.5%;
  transform: translateX(-50%);
  height: 20rem;
  width: 20rem;
  border-radius: 10rem;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  z-index: 5;

  @media screen and (max-width: 450px) {
    & {
      top: 15%;
      height: 15rem;
      width: 15rem;
    }
  }
`;

const StaffName = styled.h1`
  padding: 12rem 0rem 0rem 0rem;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-align: center;
`;

const DetailsContainer = styled.div`
  padding: 5rem 2.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`;
const StaffDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const StaffDetailHeader = styled.div`
  height: auto;
  width: 28rem;
  font-size: 1.8rem;
  letter-spacing: 0.07em;
  font-weight: bold;
`;
const StaffDetailsContent = styled.div`
  height: auto;
  width: 28rem;
  font-size: 1.8rem;
  letter-spacing: 0.07em;
  margin: 1rem 0;
`;
const ContentHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  margin: 5rem 0rem 3rem 0rem;
`;
const CertificateViewer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
`;
const CertificateHeader = styled.div`
  margin: 8rem 0rem 4rem 0rem;
`;

const ProfileViewer = () => {
  const { userData } = useAuth();
  const { getData } = useFirestore();
  const [studentProjects, setStudentProjects] = useState([]);
  const [studentCCertificates, setStudentCCertificates] = useState([]);
  const [studentCoCertificates, setStudentCoCertificates] = useState([]);
  const [studentExCertificates, setStudentExCertificates] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData('studentProjects', [
        where('rollno', '==', userData.rollno),
      ]);
      setStudentProjects(data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const data = await getData('studentCertificates', [
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
  return (
    <div>
      <PageHeader text='About Me' />
      <PageContent>
        <Container>
          <StaffImage src={userData.photo} alt='staff' />
          <GlassSheet>
            <StaffName>{userData.name}</StaffName>
            <DetailsContainer className='DetailsContainer'>
              <StaffDetails className='StaffDetails'>
                <StaffDetailHeader>Roll No:</StaffDetailHeader>
                <StaffDetailsContent>{userData.rollno}</StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader className='StaffDetailHeader'>
                  Department:
                </StaffDetailHeader>
                <StaffDetailsContent className='StaffDetailsContent'>
                  {userData.department}
                </StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Batch:</StaffDetailHeader>
                <StaffDetailsContent>{userData.batch}</StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Programme Coordinator:</StaffDetailHeader>
                <StaffDetailsContent>
                  {userData.programeCoordinator}
                </StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>E-Mail:</StaffDetailHeader>
                <StaffDetailsContent> {userData.email}</StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Phone Number:</StaffDetailHeader>
                <StaffDetailsContent>
                  {userData.phoneNumber}
                </StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Date of Birth:</StaffDetailHeader>
                <StaffDetailsContent>{userData.dob}</StaffDetailsContent>
              </StaffDetails>

              <StaffDetails>
                <StaffDetailHeader>Address:</StaffDetailHeader>
                <StaffDetailsContent>{userData.address}</StaffDetailsContent>
              </StaffDetails>
              <StaffDetails>
                <StaffDetailHeader>Tutor:</StaffDetailHeader>
                <StaffDetailsContent>{userData.tutor}</StaffDetailsContent>
              </StaffDetails>
              <StaffDetails>
                <StaffDetailHeader>Semester:</StaffDetailHeader>
                <StaffDetailsContent>
                  {userData.semester ? userData.semester : '1'}
                </StaffDetailsContent>
              </StaffDetails>
            </DetailsContainer>
          </GlassSheet>

          <React.Fragment>
            {studentCCertificates && <ContentHeader>Curricular</ContentHeader>}
            {studentCCertificates &&
              studentCCertificates.map((item, index) => (
                <CertificateViewer key={index}>
                  <CertificateCase
                    title={item.certificateName}
                    image={item.thumbnailURL}
                  />
                </CertificateViewer>
              ))}
          </React.Fragment>
          <React.Fragment>
            {studentCoCertificates && (
              <ContentHeader>Co - Curricular</ContentHeader>
            )}
            {studentCoCertificates &&
              studentCoCertificates.map((item, index) => (
                <CertificateViewer key={index}>
                  <CertificateCase
                    title={item.certificateName}
                    image={item.thumbnailURL}
                  />
                </CertificateViewer>
              ))}
          </React.Fragment>
          <React.Fragment>
            {studentExCertificates && (
              <ContentHeader>Extra - Curricular</ContentHeader>
            )}
            {studentExCertificates &&
              studentExCertificates.map((item, index) => (
                <CertificateViewer key={index}>
                  <CertificateCase
                    title={item.certificateName}
                    image={item.thumbnailURL}
                  />
                </CertificateViewer>
              ))}
          </React.Fragment>
          <React.Fragment>
            {studentProjects && <ContentHeader>Projects</ContentHeader>}
            {studentProjects &&
              studentProjects.map((item, index) => (
                <CertificateViewer>
                  <CertificateCase
                    title={item.projectName}
                    url={item.projectURL}
                    image={item.thumbnailURL}
                  />
                </CertificateViewer>
              ))}
          </React.Fragment>
        </Container>
      </PageContent>
    </div>
  );
};

export default ProfileViewer;
