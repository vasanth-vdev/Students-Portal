import React from 'react';
import './css/SubjectPercentageItem.css';
const SubejctPercentageItem = ({ data }) => {
  return (
    <div className='subjectPercentageItemContainer'>
      <h1 className='subjectPercentage'>{data.percentage}</h1>
      <h1 className='subject'>{data.subjectName}</h1>
    </div>
  );
};

export default SubejctPercentageItem;
