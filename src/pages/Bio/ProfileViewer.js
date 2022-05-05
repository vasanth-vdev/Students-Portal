import React from 'react';
import GlassSheet from '../../components/GlassSheet';
import StudentData from '../../data/StudentData';
import styled from 'styled-components';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
<<<<<<< HEAD
import CertificateCase from '../../components/CertificateCase';
=======
import Certificate from '../../assets/images/backgrounds/Certificate.jpeg';
>>>>>>> fd9a89802c22c6d27d01faa5f0339f2e03b5602b

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
`;

const StaffName = styled.h1`
  padding: 12rem 0rem 0rem 0rem;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-align: center;
`;

const DetailsContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`;
const StaffDetails = styled.div`
  display: flex;
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
`;
const Associations = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ClubActivities = styled.div`
  height: auto;
  width: 30rem;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #ffffff;
  margin: 1rem 2rem;
`;
const NameOfTheClub = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.07em;
  color: #595959;
  margin: 0.5rem 0rem 0rem 1rem;
`;
const Cert = styled.img`
  height: 6rem;
  width: 4rem;
`;
const Position = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.07em;
  margin: 0.5rem 0rem 0rem 1rem;
`;
const ContentHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  margin: 5rem 0rem 3rem 0rem;
`;

const ProfileViewer = () => {
  return (
    <div>
      <PageHeader text='About Me' />
      <PageContent>
        {StudentData.DX1918.map((item, index) => {
          return (
            <Container key={index}>
              <StaffImage src={item.img} alt='staff' />
              <GlassSheet
                height='auto'
                width='auto'
                borderRadius='2rem'
                margin='12rem 0rem 0rem 0rem'>
                <StaffName>{item.name}</StaffName>
                <DetailsContainer>
                  <StaffDetails>
                    <StaffDetailHeader>Roll No:</StaffDetailHeader>
                    <StaffDetailsContent>{item.rollno}</StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Department:</StaffDetailHeader>
                    <StaffDetailsContent>{item.department}</StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Batch:</StaffDetailHeader>
                    <StaffDetailsContent>{item.batch}</StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>
                      Programme Coordinator:
                    </StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.programmecoordinator}
                    </StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>E-Mail:</StaffDetailHeader>
                    <StaffDetailsContent> {item.email}</StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Phone Number:</StaffDetailHeader>
                    <StaffDetailsContent> {item.phoneno}</StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Date of Birth:</StaffDetailHeader>
                    <StaffDetailsContent>
                      {item.dateofbirth}
                    </StaffDetailsContent>
                  </StaffDetails>

                  <StaffDetails>
                    <StaffDetailHeader>Address:</StaffDetailHeader>
                    <StaffDetailsContent>{item.address}</StaffDetailsContent>
                  </StaffDetails>
                </DetailsContainer>
              </GlassSheet>
              <div>
<<<<<<< HEAD
                <ContentHeader>Club Activities</ContentHeader>
<CertificateCase subheader="C Certificate"/>
=======
                <ContentHeader>Co - Curricular</ContentHeader>
                <Associations>
                  <ClubActivities>
                    <Position>Cadet Under Officer</Position>
                  </ClubActivities>
                  <ClubActivities>
                    <GlassSheet height='auto' width='auto' borderRadius='2rem'>
                      <Cert src={Certificate} alt='' />
                    </GlassSheet>
                    <Position>Volunteer</Position>
                  </ClubActivities>
                  <ClubActivities>
                    <NameOfTheClub>Sports</NameOfTheClub>
                    <Position>FootBall</Position>
                  </ClubActivities>
                </Associations>
>>>>>>> fd9a89802c22c6d27d01faa5f0339f2e03b5602b
              </div>
              <div>
                <ContentHeader>Extra - Curricular</ContentHeader>
<CertificateCase subheader="C Certificate"/>
              </div>
            </Container>
          );
        })}
      </PageContent>
    </div>
  );
};

export default ProfileViewer;
