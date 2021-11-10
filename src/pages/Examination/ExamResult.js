import React from 'react';
import Table from './../../components/Table';
import PageHeader from './../../components/PageHeader';
import PageContent from './../../components/PageContent';
import ExamResultData from './../../data/Examination/ExamResultData';
const ExamResult = () => {
  return (
    <div>
      <PageHeader text='Exam Result' />
      <PageContent>
        <Table data={ExamResultData} />
      </PageContent>
    </div>
  );
};

export default ExamResult;
