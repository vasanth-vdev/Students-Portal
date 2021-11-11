import React from 'react';
import Table from '../../components/Table';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import TestTimeTableData from '../../data/Examination/TestTimetableData';
const TestTimetable = () => {
  return (
    <div>
      <PageHeader text='Test Timetable' />
      <PageContent>
        <Table data={TestTimeTableData} />
      </PageContent>
    </div>
  );
};

export default TestTimetable;
