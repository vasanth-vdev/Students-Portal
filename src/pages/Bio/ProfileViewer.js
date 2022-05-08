import React from 'react';
import GlassSheet from '../../components/GlassSheet';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import CertificateCase from '../../components/CertificateCase';
import Certificate from './../../assets/images/Student.jpg';
import { useAuth } from './../../Context/AuthContext';

const Container = styled.div`
  height: auto;
  width: auto;
  border: 1px solid transparent;
  padding: 0rem;
  margin: 0rem;
`;

const StaffImage = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 20rem;
  width: 20rem;
  border-radius: 10rem;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  z-index: 1;

  @media screen and (max-width: 450px) {
    & {
      top: 20%;
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
  return (
    <div>
      <PageHeader text='About Me' />
      <PageContent>
        {console.log(userData)}
        <Container>
          <StaffImage src={userData.photo} alt='staff' />
          <GlassSheet
            height='auto'
            width='auto'
            borderRadius='2rem'
            margin='12rem 0rem 0rem 0rem'>
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
          <CertificateHeader>
            <PageHeader text='PSG Polytechnic College' />
          </CertificateHeader>
          <div>
            <ContentHeader>Curricular</ContentHeader>
            <CertificateViewer>
              <CertificateCase
                subheader='C Certificate'
                Certificate={Certificate}
              />
            </CertificateViewer>
          </div>
          <div>
            <ContentHeader>Co - Curricular</ContentHeader>
            <CertificateViewer>
              <CertificateCase
                subheader='C Certificate'
                Certificate={Certificate}
              />
            </CertificateViewer>
          </div>
          <div>
            <ContentHeader>Extra - Curricular</ContentHeader>
            <CertificateViewer>
              <CertificateCase
                Link='huvbebuvtrgrtghueghrty'
                subheader='bvhbrehwruuoughwyefyugrfgywrhuiwtutjwuigt'
                Certificate={Certificate}
              />
            </CertificateViewer>
          </div>
          <div>
            <ContentHeader>Projects</ContentHeader>
            <CertificateViewer>
              <CertificateCase
                subheader='bvhbrehwruuoughwyefyugrfgywrhuiwtutjwuigt'
                Certificate={Certificate}
              />
            </CertificateViewer>
          </div>
        </Container>
      </PageContent>
    </div>
  );
};

export default ProfileViewer;
