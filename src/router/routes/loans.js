import { lazy } from 'react'

const LoanCreation = lazy(() => import('../../views/loans/creation'))
const LoanMLCB = lazy(() => import('../../views/loans/mlcb'))
const LoanSimulator = lazy(() => import('../../views/loans/simulator'))

const LoanRoutes = [
  {
    path: '/loan/creation',
    element: <LoanCreation />
  },
  {
    path: '/loan/mlcb',
    element: <LoanMLCB />
  },
  {
    path: '/loan/simulator',
    element: <LoanSimulator />
  }
]

export default LoanRoutes
