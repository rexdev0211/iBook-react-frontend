// ** Icons Import
import { Globe, Circle } from 'react-feather'

export default [
  {
    id: 'accounts',
    title: 'Account',
    icon: <Globe size={20} />,
    children: [
      {
        id: 'accountTransaction',
        title: 'Transaction Report',
        icon: <Circle size={12} />,
        navLink: '/account/transaction'
      },
      {
        id: 'accountSummary',
        title: 'Account Summary',
        icon: <Circle size={12} />,
        navLink: '/account/summary'
      },
      {
        id: 'accountReport',
        title: 'User Report',
        icon: <Circle size={12} />,
        navLink: '/account/report'
      }
    ]
  }
]
