// ** Icons Import
import { DollarSign, Circle } from 'react-feather'

export default [
  {
    id: 'loans',
    title: 'Loan',
    icon: <DollarSign size={20} />,
    children: [
      {
        id: 'loanCreation',
        title: 'Loan Creation',
        icon: <Circle size={12} />,
        navLink: '/loan/creation'
      },
      {
        id: 'loanMLCB',
        title: 'MLCB List',
        icon: <Circle size={12} />,
        navLink: '/loan/mlcb'
      },
      {
        id: 'loanSimulator',
        title: 'Simulator',
        icon: <Circle size={12} />,
        navLink: '/loan/simulator'
      }
    ]
  }
]
