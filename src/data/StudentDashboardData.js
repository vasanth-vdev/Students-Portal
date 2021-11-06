import userImage from './../assets/images/UserAccount.png';
import logo from './../assets/images/logos/Logo.png';
import { MdOutlineDashboard } from 'react-icons/md';
import { MdSchool } from 'react-icons/md';
import { MdLuggage } from 'react-icons/md';
import { SiMicrosoftacademic } from 'react-icons/si';
import { BiSitemap } from 'react-icons/bi';

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
              icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'Semester Fee Structure',
              icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'Online Fee Collection',
              icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'Students Attendance',
              icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'CA Marks',
              icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'Feednack',
              icon: <BiSitemap />,
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
              icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'Seating Arrangement',
              icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'Exam Timetable',
              icon: <BiSitemap />,
              URL: '',
            },
            {
              title: 'Exam Result',
              icon: <BiSitemap />,
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
