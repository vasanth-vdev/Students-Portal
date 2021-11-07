import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';
import { MdLuggage } from 'react-icons/md';
import { SiMicrosoftacademic } from 'react-icons/si';
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
          active: true,
          subMenu: [],
        },
        {
          navTitle: 'Academic',
          navIcon: <SiMicrosoftacademic />,
          active: false,
          subMenu: [
            {
              title: 'Posted Leave Printout',
              // icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'Semester Fee Structure',
              URL: '',
            },
            {
              title: 'Online Fee Collection',
              URL: '',
            },
            {
              title: 'Students Attendance',
              URL: '',
            },
            {
              title: 'CA Marks',
              URL: '',
            },
            {
              title: 'Feednack',
              URL: '',
            },
          ],
        },
        {
          navTitle: 'Examination',
          navIcon: <MdSchool />,
          active: false,
          subMenu: [
            {
              title: 'Time Table',
              URL: '',
            },
            {
              title: 'Seating Arrangement',
              URL: '',
            },
            {
              title: 'Exam Timetable',
              URL: '',
            },
            {
              title: 'Exam Result',
              URL: '',
            },
          ],
        },
        {
          navTitle: 'Hostel',
          navIcon: <MdLuggage />,
          active: false,
          subMenu: [],
        },
      ],
    },
  },
];

export default StudentDashboardData;
