import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import Pagination from '../../components/Pagination';
import { useFirestore } from '../../Context/FirestoreContext';
import { where } from 'firebase/firestore';
import { useAuth } from '../../Context/AuthContext';
import { useUI } from '../../Context/UiContext';

const camarksContainer = {
  marginTop: '5rem',
};
const CAMarks = () => {
  const { getData } = useFirestore();
  const { userData } = useAuth();
  const { getTheme } = useUI();

  const [semester, setSemester] = useState(
    userData.semester ? userData.semester : '1'
  );
  const [subType, setSubType] = useState('Countinous Assessment 1');
  const [semesterMarks, setSemesterMarks] = useState(null);

  const sems = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const subTypes = [
    {
      value: 'Countinous Assessment 1',
      text: 'CA 1',
    },
    {
      value: 'Countinous Assessment 2',
      text: 'CA 2',
    },
    {
      value: 'Countinous Assessment 3',
      text: 'CA 3',
    },
    {
      value: 'Laboratory',
      text: 'LAB',
    },
  ];

  const handleSemester = (value) => setSemester(value);
  const handleSubType = (value) => setSubType(value);

  const getMarks = async () => {
    const res = await getData('testResults', [
      where('batch', '==', userData.batch),
      where('department', '==', userData.department),
      where('semester', '==', semester),
      where('subType', '==', subType),
    ]);
    setSemesterMarks(res);
  };

  useEffect(() => getMarks(), [semester, subType]);

  return (
    <div>
      <PageHeader text='Semester Marks' />
      <PageContent>
        {semesterMarks && semesterMarks.length !== 0 && (
          <table>
            <thead>
              <tr>
                <th className={getTheme().background || null}>SNO</th>
                <th className={getTheme().background || null}>SUB-TYPE</th>
                <th className={getTheme().background || null}>COURSE CODE</th>
                <th className={getTheme().background || null}>MARKS</th>
              </tr>
            </thead>
            <tbody>
              {semesterMarks.map((subject, index) => {
                const mark = subject.scores.filter(
                  (item) => item.rollno == userData.rollno
                );

                return (
                  <tr key={subject.courseCode}>
                    <td>{index + 1}</td>
                    <td>{subject.subType}</td>
                    <td>{subject.courseCode}</td>
                    <td>{mark[0].markSecured}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <Pagination
          pageno={sems}
          pagination={semester}
          handlePagination={handleSemester}
        />
        <Pagination
          pageno={subTypes}
          pagination={subType}
          handlePagination={handleSubType}
        />
      </PageContent>
    </div>
  );
};

export default CAMarks;
