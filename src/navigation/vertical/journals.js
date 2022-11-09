// ** Icons Import
import { FileText, Circle } from 'react-feather'

export default [
  {
    id: 'journals',
    title: 'Journal',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'journalReceipt',
        title: 'Receipt',
        icon: <Circle size={12} />,
        navLink: '/journal/receipt'
      },
      {
        id: 'journalPayment',
        title: 'Payment',
        icon: <Circle size={12} />,
        navLink: '/journal/payment'
      },
      {
        id: 'journalTransfer',
        title: 'Internal Transfer',
        icon: <Circle size={12} />,
        navLink: '/journal/transfer'
      },
      {
        id: 'journalUpcoming',
        title: 'Upcoming Payments',
        icon: <Circle size={12} />,
        navLink: '/journal/upcoming'
      },
      {
        id: 'journalClaims',
        title: 'Claims',
        icon: <Circle size={12} />,
        navLink: '/journal/claims'
      }
    ]
  }
]
