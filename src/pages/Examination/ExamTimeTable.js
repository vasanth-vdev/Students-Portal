import React, { useEffect, useState } from 'react';
import Table from './../../components/Table';
import PageHeader from './../../components/PageHeader';
import PageContent from './../../components/PageContent';
import { useFirestore } from './../../Context/FirestoreContext';
import { where } from 'firebase/firestore';
import { useAuth } from '../../Context/AuthContext';
const ExamTimeTable = () => {
  const { getData } = useFirestore();
  const { userData } = useAuth();
  const [examTimetable, setExamTimetable] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData('examTimetable', [
        where('batch', '==', userData.batch),
        where('department', '==', userData.department),
        where('semester', '==', userData.semester ? userData.semester : '1'),
      ]);
      const table = [
        {
          titles: ['DATE', 'SESSION', 'COURSE CODE ', ' COURSE TITLE'],
          data: data[0].timeTable,
          contents: ['date', 'session', 'courseCode', 'courseTitle'],
        },
      ];
      setExamTimetable(table);
    })();
  }, []);
  return (
    <div>
      <PageHeader text='Exam Timetable' />
      <PageContent>
        <Table data={examTimetable} />
      </PageContent>
    </div>
  );
};

export default ExamTimeTable;
