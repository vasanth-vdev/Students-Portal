import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';
import { MdLuggage } from 'react-icons/md';
import { SiMicrosoftacademic } from 'react-icons/si';
import TestTimetable from '../pages/TestTimetable';
// import { BiSitemap } from 'react-icons/bi';

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
          navURL: '/StudentsDashboard',
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
            },
            {
              title: 'Semester Fee Structure',
              URL: 'SemesterFeeStructure',
            },
            {
              title: 'Online Fee Collection',
              URL: 'OnlineFeeCollection',
            },
            {
              title: 'StudentsAttendance',
              URL: 'StudentsAttendance',
            },
            {
              title: 'CA Marks',
              URL: 'CAMarks',
            },
            {
              title: 'Feedback',
              URL: 'Feedback',
            },
          ],
        },
        {
          navTitle: 'Examination',
          navIcon: <MdSchool />,
          subMenu: [
            {
              title: 'Test Timetable',
              URL: 'TestTimetable',
              page: TestTimetable,
            },
            {
              title: 'Seating Arrangement',
              URL: 'SeatingArrangement',
            },
            {
              title: 'Exam Timetable',
              URL: 'ExamTimetable',
            },
            {
              title: 'Exam Result',
              URL: 'ExamResult',
            },
          ],
        },
        {
          navTitle: 'Hostel',
          navIcon: <MdLuggage />,
          navURL: '/Hostel',
          subMenu: [],
        },
      ],
    },
  },
];

export default StudentDashboardData;
