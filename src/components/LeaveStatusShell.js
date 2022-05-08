import React from 'react';
import './css/LeaveStatusShell.css';

const LeaveStatusShell = (props, { Status }) => {
  return (
    <div>
      <div className='Container'>
        <div className='ProfileContent'>
          <div className='MainContext'>
            <div>
              <h3 className='Name'>{props.Name}</h3>
              <h4 className='Rollno'>{props.Rollno}</h4>
              <a href={props.document} className='FileHolder'>
                <h4>{props.Filename}</h4>
              </a>
            </div>
          </div>
          <div className='DateSection'>
            <div className='DateContainer'>
              <div className='FromDate'></div>
              <div className='Date'>{props.From}</div>
            </div>
            <div className='DateContainer'>
              <div className='ToDate'></div>
              <div className='Date'>{props.To}</div>
            </div>
          </div>
        </div>
        <div
          className='StatusShower'
          style={
            Status == null
              ? { background: 'grey' }
              : Status
              ? { background: '#fac61de0' }
              : { background: '#c41717' }
          }>
          {Status == null ? 'pending' : Status ? 'Accepted' : 'Rejected'}
        </div>
      </div>
    </div>
  );
};

export default LeaveStatusShell;
