import React from 'react';
import PageHeader from './../../components/PageHeader';
import PageContent from './../../components/PageContent';
import Table from './../../components/Table';
import SemesterFeeStructureData from '../../data/Academic/SemesterFeeStructureData';
import GreenButton from '../../components/GreenButton';
import './../../assets/css/SemesterFeeStructure.css';
const SemesterFeeStructure = () => {
  return (
    <div>
      <PageHeader text='Semester Fee Structure' />
      <PageContent>
        <div className='semesterFeeContainer'>
          <Table data={SemesterFeeStructureData} />
          <div className='semesterFeeTotalContainer'>
            <h1 className='semesterFeeTotoal'>Total : 29850</h1>
            <GreenButton>Pay Now</GreenButton>
          </div>
        </div>
      </PageContent>
    </div>
  );
};

export default SemesterFeeStructure;
