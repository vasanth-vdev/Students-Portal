import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import SubejctPercentageItem from '../../components/SubejctPercentageItem';
import StudentsAttendanceData from '../../data/Academic/StudentsAttendanceData';
import './../../assets/css/StudentsAttendance.css';
const StudentsAttendance = () => {
  return (
    <div>
      <PageHeader text='Attendance Performance' />
      <PageContent>
        <PageHeader text='Subject Wise' uppercase='uppercase' size='2.2' />
        <div className='SubjectWiseAttendanceContainer'>
          {StudentsAttendanceData.map((item, index) => (
            <SubejctPercentageItem data={item} key={index} />
          ))}
        </div>
      </PageContent>
    </div>
  );
};

export default StudentsAttendance;
