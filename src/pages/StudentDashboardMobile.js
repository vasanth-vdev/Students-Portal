import React, { useState } from 'react';
import './../assets/css/StudentDashboardMobile.css';
import SideBarMenuIcon from './../assets/images/icons/SidebarMenu.svg';
import SideBarMenuCloseIcon from './../assets/images/icons/SidebarMenuClose.svg';
import NavItem from '../components/DashboardNavItem';
import StudentDashboardData from '../data/StudentDashboardData.js';
import { MdOutlineLogout, MdOutlineNotificationsActive } from 'react-icons/md';
import { useGoogleAuth } from '../Context/GoogleAuthContext';

const StudentDashboardMobile = ({ children }) => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const sideBarHandle = () => setMobileSidebar(!mobileSidebar);

  const { currentUser, googleSignOut } = useGoogleAuth();

  const handleLogout = () => {
    googleSignOut();
  };
  return (
    <div className='StudentsDashboardMobilePage'>
      <div className='dashboardSidebarContainerMobile'>
        {StudentDashboardData.map((item, index) => (
          <div
            className='dashboardSidebarMobile'
            key={index}
            style={mobileSidebar ? { zIndex: 10 } : { zIndex: -100 }}>
            <img
              onClick={sideBarHandle}
              src={SideBarMenuCloseIcon}
              className='sidebarHeadeCloseIconMobile'
              alt='menu'
            />
            {item.sidebar.navItems.map((item, index) => (
              <NavItem data={item} key={index} sideBarHandle={sideBarHandle} />
            ))}
            <div className='dashboardSidebarUserAction'>
              <img
                className='dashboardSidebarUserAccount'
                src={currentUser.photoURL}
                alt='user'
              />
              <h1 className='dashboardSidebarUsername'>
                {currentUser.displayName}
              </h1>
              <div className='userActionBtnMob notification'>
                <MdOutlineNotificationsActive />
              </div>
            </div>
          </div>
        ))}
        <div
          className='dashboardSidebarMobileBlur'
          style={mobileSidebar ? { zIndex: 8 } : { zIndex: -100 }}
          onClick={sideBarHandle}></div>
      </div>
      <div className='dasboardSectionMobile'>
        <div className='dashboardHeaderMobile'>
          <img
            src={SideBarMenuIcon}
            className='sidebarHeaderMenuIconMobile'
            alt='menu'
            onClick={sideBarHandle}
          />
          <div
            className='userActionBtnMobile logoutMobile'
            onClick={handleLogout}>
            <MdOutlineLogout />
          </div>
        </div>

        <div className='MobileContent'>{children}</div>
      </div>
    </div>
  );
};

export default StudentDashboardMobile;
