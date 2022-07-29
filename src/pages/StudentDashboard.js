import React, { useState, useEffect } from 'react';
import './../assets/css/StudentDashboard.css';
import MediaQuery from 'react-responsive';
import SideBarMenuIcon from './../assets/images/icons/SidebarMenu.svg';
import StudentDashboardData from '../data/StudentDashboardData.js';
import {
  MdOutlineNotificationsActive,
  MdOutlineFingerprint,
  MdOutlineLogout,
  MdColorLens,
} from 'react-icons/md';
import NavItem from '../components/DashboardNavItem';
import { Link, Navigate, NavLink } from 'react-router-dom';
import StudentDashboardMobile from './StudentDashboardMobile';
import { useAuth } from '../Context/AuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Config/firebaseConfig';
import Loader from '../components/Loader';
import { useUI } from '../Context/UiContext';
import { useFirestore } from '../Context/FirestoreContext';
import NotifyItem from '../components/NotifyItem';

const StudentDashboard = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const { getTheme, setTheme } = useUI();
  const sideBarHandle = () => setSideBar(!sideBar);
  const { currentUser, logOut, setData, userData } = useAuth();
  const [notifications, setNotifications] = useState([]);
  const [notificationBar, setNotificationBar] = useState(false);
  const { getData } = useFirestore();

  const getNotifications = async () => {
    setNotificationBar(!notificationBar);
    const data = await getData('notification', [
      where('userID', '==', userData.rollno),
    ]);
    setNotifications(data);
  };

  useEffect(() => {
    if (!currentUser) return <Navigate to='/login' />;
    getUserData();
  }, [currentUser]);

  const getUserData = async () => {
    const userDataRef = collection(db, 'students');
    const q = query(userDataRef, where('email', '==', currentUser.email));
    const snapshot = await getDocs(q);
    setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]);
  };

  return !userData ? (
    <Loader text='Getting Your Data ⌛️' />
  ) : (
    <>
      <MediaQuery minWidth={900}>
        <div
          className='StudentsDashboardPage'
          style={{ background: getTheme().background }}>
          {StudentDashboardData.map((item, index) =>
            sideBar ? (
              <div
                className='dashboardSidebar'
                key={index}
                style={{ width: '39rem' }}>
                <div className='siderbarHeaderExpanded'>
                  <img
                    src={SideBarMenuIcon}
                    className='sidebarHeaderMenuIcon'
                    alt='menu'
                    onClick={sideBarHandle}
                  />
                  <h1 className='sidebarHeaderTitle'>PSG PTC</h1>
                  <img
                    src={item.sidebar.logo}
                    alt='logo'
                    className='sidebarHeaderLogo'
                  />
                </div>
                <div className='sidebarContent'>
                  {item.sidebar.navItems.map((item, index) => (
                    <NavItem
                      data={item}
                      key={index}
                      sideBarHandle={sideBarHandle}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className='dashboardSidebar' key={index}>
                <div className='siderbarHeaderExpanded'>
                  <img
                    src={SideBarMenuIcon}
                    className='sidebarHeaderMenuIcon'
                    alt='menu'
                    onClick={sideBarHandle}
                    style={{ transform: 'rotatez(180deg)' }}
                  />
                </div>

                <div className='sidebarContentCollapsed'>
                  {item.sidebar.navItems.map((item, index) =>
                    item.subMenu.length === 0 ? (
                      <NavLink
                        className='navItemCollapsed'
                        to={`/${item.navURL}`}
                        key={index}>
                        <span className='navItemCollapsedIcon'>
                          {item.navIcon}
                        </span>
                      </NavLink>
                    ) : (
                      <NavLink
                        className='navItemCollapsed'
                        to=''
                        onClick={sideBarHandle}
                        key={index}>
                        <span className='navItemCollapsedIcon'>
                          {item.navIcon}
                        </span>
                      </NavLink>
                    )
                  )}
                </div>
                <h1 className='sidebarHeaderTitleCollapsed'>PSG PTC</h1>
              </div>
            )
          )}

          <div
            className='dasboardSection'
            style={
              sideBar
                ? { left: '35rem', width: 'calc(100vw - 35rem)' }
                : { left: '10rem', width: 'calc(100vw - 10rem)' }
            }>
            {StudentDashboardData.map((item, index) => (
              <div className='dashboardHeader' key={userData.rollno}>
                <Link to='/ProfileView'>
                  <div className='dashboardHeaderLeft'>
                    <img
                      className='dashboardHeaderUserAccount'
                      src={userData.photo}
                      alt='user'
                    />
                    <h1 className='dashboardHeaderUsername'>{`${userData.name} - ${userData.rollno}`}</h1>
                  </div>
                </Link>
                <div className='dashboardHeaderRight'>
                  <div
                    className='userActionBtn notification'
                    onClick={() => getNotifications()}>
                    <MdOutlineNotificationsActive />
                    <div
                      className='notifyContainer'
                      style={
                        notificationBar
                          ? { display: 'block' }
                          : { display: 'none' }
                      }>
                      {notifications.length !== 0 ? (
                        notifications.map((item, index) => (
                          <NotifyItem
                            key={index}
                            content={item.message}
                            id={item.uid}
                            doc={item.file}
                          />
                        ))
                      ) : (
                        <p
                          className='notifyItemContent'
                          style={{
                            textAlign: 'center',
                            fontSize: '1.8rem',
                            padding: '1rem',
                          }}>
                          No Notifications
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    className='userActionBtn'
                    style={{
                      background: getTheme().background,
                      color: 'white',
                    }}
                    onClick={() => setTheme()}>
                    <MdColorLens />
                  </div>
                  <Link to='/ChangePassword'>
                    <div className='userActionBtn password'>
                      <MdOutlineFingerprint />
                    </div>
                  </Link>
                  <div
                    className='userActionBtn logout'
                    onClick={() => logOut()}>
                    <MdOutlineLogout />
                  </div>
                </div>
              </div>
            ))}
            <div className='Content'>{children}</div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        <StudentDashboardMobile>{children}</StudentDashboardMobile>
      </MediaQuery>
    </>
  );
};

export default StudentDashboard;
