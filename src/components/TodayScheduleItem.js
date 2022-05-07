import React from 'react';
import './css/TodayScheduleItem.css';

const TodayScheduleItem = ({ data }) => {
  return (
    <div className='todayScheduleItem'>
      <h1 className='todayScheduleSubject'>{data.courseTitle}</h1>
      <h1 className='todayScheduleTime'>{`${data.fromTime} - ${data.toTime}`}</h1>
      <h1 className='todayScheduleTimeFacultyIncharge'>{data.faculty}</h1>
    </div>
  );
};

export default TodayScheduleItem;
