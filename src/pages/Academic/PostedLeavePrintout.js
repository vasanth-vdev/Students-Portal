import React from 'react';
import PageHeader from '../../components/PageHeader';
import PageContent from '../../components/PageContent';
import './../../assets/css/PostedLeavePrintout.css';
import SideNameInput from '../../components/SideNameInput';
const PostedLeavePrintout = () => {
  return (
    <div>
      <PageHeader text='Posted Leave Printout' />
      <PageContent>
        <div className='PostedLeavePrintoutContainer'>
          <div className='PostedLeavePrintoutDivision'>
            <div className='postedLeavePrintoutLeft'>
              <SideNameInput type='text' name='Name' />
              <SideNameInput type='text' name='Roll No' />
            </div>
            <div className='postedLeavePrintoutRight'>
              <SideNameInput type='date' name='From' />
              <SideNameInput type='date' name='To' />
            </div>
          </div>
          <SideNameInput
            type='textarea'
            name='Reason'
            width='100%'
            rows='5'
            marginLeft='5rem'
          />

          <SideNameInput
            type='file'
            name='Document'
            width='fit-content'
            marginLeft='2rem'
          />

          {/* Button Component */}
        </div>
      </PageContent>
    </div>
  );
};

export default PostedLeavePrintout;
