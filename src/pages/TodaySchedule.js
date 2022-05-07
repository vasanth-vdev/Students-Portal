import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
  import TodayScheduleItem from '../components/TodayScheduleItem';
import { useFirestore } from './../Context/FirestoreContext';
import { useAuth } from './../Context/AuthContext';
import './../assets/css/todaySchedule.css';
import { where } from 'firebase/firestore';
const TodaySchedule = () => {
  const d = new Date();
  let day = d.getDay();
  const [todaySchedule, setTodaySchedule] = useState([]);
  const { getData } = useFirestore();
  const { userData } = useAuth();
  useEffect(() => {
    (async () => {
      const data = await getData(
        'classTimetable',
        where('batch', '==', userData.batch) &&
          where('department', '==', userData.department)
      );
      setTodaySchedule(data[0].timeTable);
    })();
  }, []);
  return (
    <div className='todaySchedulePage'>
      <PageHeader text={`Today's Schedule`} />
      <PageContent>
        <div className='todayScheduleList'>
          {todaySchedule.map((item, index) =>
            parseInt(item.weekDay) === day ? (
              <TodayScheduleItem data={item} key={index} />
            ) : null
          )}
        </div>
      </PageContent>
    </div>
  );
};

export default TodaySchedule;
