import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/App.css';
import Login from './pages/Login.js';
import StudentDashboard from './pages/StudentDashboard';
import TodaySchedule from './pages/TodaySchedule';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <StudentDashboard>
                <TodaySchedule />
              </StudentDashboard>
            }
          />
          <Route
            path='/'
            element={
              <StudentDashboard>
                <TodaySchedule />
              </StudentDashboard>
            }
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
