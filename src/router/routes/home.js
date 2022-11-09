import { lazy } from 'react'

const Home = lazy(() => import('../../views/home'))

const HomeRoute = [
  {
    path: '/home',
    element: <Home />
  }
]

export default HomeRoute
