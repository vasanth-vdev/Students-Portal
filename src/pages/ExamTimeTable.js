import React from 'react';
import Table from '../components/Table';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import ExamTimeTableData from '../data/ExamTimeTableData';
const ExamTimeTable = () => {
  return (
    <div>
      <PageHeader text='Exam Timetable' />
      <PageContent>
        <Table data={ExamTimeTableData} />
      </PageContent>
    </div>
  );
};

export default ExamTimeTable;
