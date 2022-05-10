import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import { useFirestore } from './../../Context/FirestoreContext';
import { where } from 'firebase/firestore';
import { useAuth } from '../../Context/AuthContext';
import Pagination from '../../components/Pagination';

const TestTimetable = () => {
  const { getData } = useFirestore();
  const { userData } = useAuth();
  const [testTimetable, setTestTimetable] = useState([]);

  const [testno, setPagination] = useState('1');
  const [semester, setPagination1] = useState(
    userData.semester ? userData.semester : '1'
  );

  const pageno = ['1', '2', '3'];
  const pageno1 = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const handlePagination = (value) => setPagination(value);
  const handlePagination1 = (value) => setPagination1(value);


  useEffect(() => {
    (async () => {
      const data = await getData('testTimetable', [
        where('batch', '==', userData.batch),
        where('department', '==', userData.department),
        where('testNo', '==', testno),
        where('semester', '==', semester),
      ]);
      const table = [
        {
          titles: ['DATE', 'SLOT', 'COURSE CODE ', ' COURSE TITLE'],
          data: data.length !== 0 ? data[0].timeTable : [],
          contents: ['date', 'slot', 'courseCode', 'courseTitle'],
        },
      ];
      setTestTimetable(table);
    })();
  }, [testno, semester]);
  return (
    <div>
      <PageHeader text='Test Timetable' />
      <PageContent>
        {testTimetable && <Table data={testTimetable} />}
        <Pagination
          pageno={pageno}
          pagination={testno}
          handlePagination={handlePagination}
        />
        <Pagination
          pageno={pageno1}
          pagination={semester}
          handlePagination={handlePagination1}
        />
      </PageContent>
    </div>
  );
};

export default TestTimetable;