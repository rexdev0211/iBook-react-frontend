// ** Icons Import
import { User, Circle } from 'react-feather'

export default [
  {
    id: 'clients',
    title: 'Client',
    icon: <User size={20} />,
    children: [
      {
        id: 'clientLoanList',
        title: 'Client Loan List',
        icon: <Circle size={12} />,
        navLink: '/client/loanList'
      },
      {
        id: 'clientLoanStatus',
        title: 'Loan Status',
        icon: <Circle size={12} />,
        navLink: '/client/loanStatus'
      },
      {
        id: 'clientSearch',
        title: 'Client Search',
        icon: <Circle size={12} />,
        navLink: '/client/search'
      },
      {
        id: 'clientSurety',
        title: 'Surety List',
        icon: <Circle size={12} />,
        navLink: '/client/surety'
      },
      {
        id: 'clientForeigner',
        title: 'Foreigner List',
        icon: <Circle size={12} />,
        navLink: '/client/foreigner'
      },
      {
        id: 'clientBlacklist',
        title: 'Blacklist',
        icon: <Circle size={12} />,
        navLink: '/client/search'
      },
      {
        id: 'clientBadDept',
        title: 'Bad Dept',
        icon: <Circle size={12} />,
        navLink: '/client/badDept'
      }
    ]
  }
]
