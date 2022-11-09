import { lazy } from 'react'

const ApplicationNew = lazy(() => import('../../views/applications/new'))
const ApplicationNewManual = lazy(() => import('../../views/applications/new/manual'))
const ApplicationListing = lazy(() => import('../../views/applications/listing'))

const ApplicationRoutes = [
  {
    path: '/application/new',
    element: <ApplicationNew />
  },
  {
    path: '/application/new/manual',
    element: <ApplicationNewManual />
  },
  {
    path: '/application/listing',
    element: <ApplicationListing />
  }
]

export default ApplicationRoutes
