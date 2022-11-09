// ** Icons Import
import { Flag, Briefcase, List, Circle } from 'react-feather'

export default [
  {
    header: 'Report'
  },
  {
    id: 'reportsIPTO',
    title: 'Report (IPTO)',
    icon: <Flag size={20} />,
    children: [
      {
        id: 'reportMonthly',
        title: 'Monthly Report',
        icon: <Circle size={12} />,
        navLink: '/report/monthly'
      },
      {
        id: 'reportCash',
        title: 'Quarter Cash',
        icon: <Circle size={12} />,
        navLink: '/report/cash'
      },
      {
        id: 'reportLoan',
        title: 'Quarter Loan',
        icon: <Circle size={12} />,
        navLink: '/report/loan'
      },
      {
        id: 'reportOthers',
        title: 'Quarter Others',
        icon: <Circle size={12} />,
        navLink: '/report/others'
      },
      {
        id: 'reportExport',
        title: 'Export',
        icon: <Circle size={12} />,
        navLink: '/report/export'
      },
      {
        id: 'reportMLCB',
        title: 'MLCB Report',
        icon: <Circle size={12} />,
        navLink: '/report/mlcb'
      }
    ]
  },
  {
    id: 'reportsStatement',
    title: 'Statement',
    icon: <Briefcase size={20} />,
    children: [
      {
        id: 'reportMonthly',
        title: 'Monthly Report',
        icon: <Circle size={12} />,
        navLink: '/report/monthly'
      },
      {
        id: 'reportCash',
        title: 'Quarter Cash',
        icon: <Circle size={12} />,
        navLink: '/report/cash'
      },
      {
        id: 'reportLoan',
        title: 'Quarter Loan',
        icon: <Circle size={12} />,
        navLink: '/report/loan'
      },
      {
        id: 'reportOthers',
        title: 'Quarter Others',
        icon: <Circle size={12} />,
        navLink: '/report/others'
      },
      {
        id: 'reportExport',
        title: 'Export',
        icon: <Circle size={12} />,
        navLink: '/report/export'
      }
    ]
  },
  {
    id: 'reportsListing',
    title: 'Listing',
    icon: <List size={20} />,
    children: [
      {
        id: 'reportMonthly',
        title: 'Monthly Report',
        icon: <Circle size={12} />,
        navLink: '/report/monthly'
      }
    ]
  }
]
