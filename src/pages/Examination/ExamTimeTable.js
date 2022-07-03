import React, { useEffect, useState } from 'react';
import Table from './../../components/Table';
import PageHeader from './../../components/PageHeader';
import PageContent from './../../components/PageContent';
import { useFirestore } from './../../Context/FirestoreContext';
import { where } from 'firebase/firestore';
import { useAuth } from '../../Context/AuthContext';
import Pagination from '../../components/Pagination';
const ExamTimeTable = () => {
  const { getData } = useFirestore();
  const { userData } = useAuth();

  const [semester, setSemester] = useState(
    userData.semester ? userData.semester : '1'
  );
  const [examTimetable, setExamTimetable] = useState([]);
  const sems = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const handleSemester = (value) => setSemester(value);

  useEffect(() => {
    (async () => {
      const data = await getData('examTimetable', [
        where('batch', '==', userData.batch),
        where('department', '==', userData.department),
        where('semester', '==', semester),
      ]);
      const table =
        data && data.length !== 0
          ? [
              {
                titles: ['DATE', 'SESSION', 'COURSE CODE ', ' COURSE TITLE'],
                data: data[0].timeTable,
                contents: ['date', 'session', 'courseCode', 'courseTitle'],
              },
            ]
          : null;
      setExamTimetable(table);
    })();
  }, [semester]);
  return (
    <div>
      <PageHeader text='Exam Timetable' />
      <PageContent>
        <Table data={examTimetable} />
        <Pagination
          pageno={sems}
          pagination={semester}
          handlePagination={handleSemester}
        />
      </PageContent>
    </div>
  );
};

export default ExamTimeTable;
