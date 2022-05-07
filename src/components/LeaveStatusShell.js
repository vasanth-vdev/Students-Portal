import React from 'react';
import './css/LeaveStatusShell.css';

const LeaveStatusShell = () => {
  return (
    <div>
      <div className='Container'>
        <div className='ProfileContent'>
          <div className='MainContext'>
            <div>
              <h3 className='Name'>Deepak P M</h3>
              <h4 className='Rollno'>19DX06</h4>
              <div className='FileHolder'>
                <h4> Filename.pdf</h4>
              </div>
            </div>
          </div>
          <div className='DateSection'>
            <div className='DateContainer'>
              <div className='FromDate'></div>
              <div className='Date'>03/05/2022</div>
            </div>
            <div className='DateContainer'>
              <div className='ToDate'></div>
              <div className='Date'>06/05/2022</div>
            </div>
            <div className='DateContainer'>
              <div className='Days'></div>
              <div className='Date'>6 Days</div>
            </div>
          </div>
        </div>
        <div className='StatusShower'>ACCEPTED</div>
      </div>
    </div>
  );
};

export default LeaveStatusShell;
