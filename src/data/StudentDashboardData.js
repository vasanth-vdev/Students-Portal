import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';
import { MdLuggage } from 'react-icons/md';
import { SiMicrosoftacademic } from 'react-icons/si';
import TestTimetable from '../pages/Examination/TestTimetable';
import SeatingArrangement from '../pages/Examination/SeatingArrangement';
import ExamTimeTable from '../pages/Examination/ExamTimeTable';
import ExamResult from '../pages/Examination/ExamResult';
import PostedLeavePrintout from '../pages/Academic/PostedLeavePrintout';
import SemesterFeeStructure from '../pages/Academic/SemesterFeeStructure';
import StudentsAttendance from '../pages/Academic/StudentsAttendance';
import CAMarks from '../pages/Academic/CAMarks';
import Feedback from '../pages/Academic/Feedback';
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
              page: PostedLeavePrintout,
            },
            {
              title: 'Semester Fee Structure',
              URL: 'SemesterFeeStructure',
              page: SemesterFeeStructure,
            },
            {
              title: 'StudentsAttendance',
              URL: 'StudentsAttendance',
              page: StudentsAttendance,
            },
            {
              title: 'CA Marks',
              URL: 'CAMarks',
              page: CAMarks,
            },
            {
              title: 'Feedback',
              URL: 'Feedback',
              page: Feedback,
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
              page: SeatingArrangement,
            },
            {
              title: 'Exam Timetable',
              URL: 'ExamTimetable',
              page: ExamTimeTable,
            },
            {
              title: 'Exam Result',
              URL: 'ExamResult',
              page: ExamResult,
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
