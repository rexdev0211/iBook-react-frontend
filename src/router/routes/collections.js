import { lazy } from 'react'

const CollectionIncoming = lazy(() => import('../../views/collections/incoming'))
const CollectionDaily = lazy(() => import('../../views/collections/daily'))
const CollectionMLCB = lazy(() => import('../../views/collections/mlcb'))

const CollectionRoutes = [
  {
    path: '/collection/incoming',
    element: <CollectionIncoming />
  },
  {
    path: '/collection/daily',
    element: <CollectionDaily />
  },
  {
    path: '/collection/mlcb',
    element: <CollectionMLCB />
  }
]

export default CollectionRoutes
