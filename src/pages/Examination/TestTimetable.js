import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import TestTimeTableData from '../../data/Examination/TestTimetableData';
import { useFirestore } from './../../Context/FirestoreContext';
import { where } from 'firebase/firestore';
import { useAuth } from '../../Context/AuthContext';
const TestTimetable = () => {
  const { getData } = useFirestore();
  const { userData } = useAuth();
  const [testTimetable, setTestTimetable] = useState([]);
  const [testNo, setTestNo] = useState('2');
  useEffect(() => {
    (async () => {
      const data = await getData(
        'testTimetable',
        where('batch', '==', userData.batch) &&
          where('department', '==', userData.department) &&
          where(
            'semester',
            '==',
            userData.semester ? userData.semester : '1'
          ) &&
          where('testNo', '==', testNo)
      );
      const table = [
        {
          titles: ['DATE', 'SLOT', 'COURSE CODE ', ' COURSE TITLE'],
          data: data[0].timeTable,
          contents: ['date', 'slot', 'courseCode', 'courseTitle'],
        },
      ];
      setTestTimetable(table);
    })();
  }, []);
  return (
    <div>
      <PageHeader text='Test Timetable' />
      <PageContent>
        <Table data={testTimetable} />
      </PageContent>
    </div>
  );
};

export default TestTimetable;
