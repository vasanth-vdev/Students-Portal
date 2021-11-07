import React from 'react';
import './assets/css/App.css';
// import Login from './pages/Login.js'
import StudentDashboard from './pages/StudentDashboard';
import TodaySchedule from './pages/TodaySchedule';
const App = () => {
  return (
    <div>
      <StudentDashboard>
        <TodaySchedule />
      </StudentDashboard>
    </div>
  );
};

export default App;
