import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';
import { SiMicrosoftacademic } from 'react-icons/si';
import TestTimetable from '../pages/Examination/TestTimetable';
import ExamTimeTable from '../pages/Examination/ExamTimeTable';
import ExamResult from '../pages/Examination/ExamResult';
import PostedLeavePrintout from '../pages/Academic/PostedLeavePrintout';
import ProfileUpdate from '../pages/Bio/ProfileUpdate';
import ProjectsManagement from '../pages/Bio/ProjectsManagement';
import CertificateManagement from '../pages/Bio/CertificateManagement';
import StudentsAttendance from '../pages/Academic/StudentsAttendance';
import CAMarks from '../pages/Academic/CAMarks';
import { FaUserAlt } from 'react-icons/fa';

// import { BiSitemap } from 'react-icons/bi';
// import SeatingArrangement from '../pages/Examination/SeatingArrangement';
// import SemesterFeeStructure from '../pages/Academic/SemesterFeeStructure';
const StudentDashboardData = [
  {
    header: {
      userImage,
      userName: 'V V Vasanth - 19DX27',
    },
    sidebar: {
      logo,
      navItems: [
        {
          navTitle: 'Dashboard',
          navIcon: <MdOutlineDashboard />,
          navURL: '',
          subMenu: [],
        },
        {
          navTitle: 'Academic',
          navIcon: <SiMicrosoftacademic />,
          subMenu: [
            {
              title: 'Posted Leave Printout',
              // icon: <BiSitemap />,
              URL: 'PostedLeavePrintout',
              page: <PostedLeavePrintout />,
            },
            // {
            //   title: 'Semester Fee',
            //   URL: 'SemesterFeeStructure',
            //   page: <SemesterFeeStructure />,
            // },
//            {
//              title: 'Attendance',
//              URL: 'StudentsAttendance',
//              page: <StudentsAttendance />,
//            },
            {
              title: 'Internal Marks',
              URL: 'CAMarks',
              page: <CAMarks />,
            },
            {
              title: 'Semester Marks',
              URL: 'ExamResult',
              page: <ExamResult />,
            },
          ],
        },
        {
          navTitle: 'Examination',
          navIcon: <MdSchool />,
          subMenu: [
            {
              title: 'Internals Timetable',
              URL: 'TestTimetable',
              page: <TestTimetable />,
            },
            // {
            //   title: 'Seating Arrangement',
            //   URL: 'SeatingArrangement',
            //   page: <SeatingArrangement />,
            // },
            {
              title: 'Semester Timetable',
              URL: 'ExamTimetable',
              page: <ExamTimeTable />,
            },
          ],
        },
        {
          navTitle: 'Profile',
          navIcon: <FaUserAlt size='2.5rem' />,
          subMenu: [
            {
              title: 'Update Profile',
              URL: 'UpdateProfile',
              page: <ProfileUpdate />,
            },
            {
              title: 'Manage Projects',
              URL: 'ManageProjects',
              page: <ProjectsManagement />,
            },
            {
              title: 'Manage Certificates',
              URL: 'ManagaeCertificates',
              page: <CertificateManagement />,
            },
          ],
        },
      ],
    },
  },
];

export default StudentDashboardData;
