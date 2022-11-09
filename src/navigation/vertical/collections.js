// ** Icons Import
import { Layers, Circle } from 'react-feather'

export default [
  {
    id: 'collections',
    title: 'Collection',
    icon: <Layers size={20} />,
    children: [
      {
        id: 'incomingCollection',
        title: 'Incoming',
        icon: <Circle size={12} />,
        navLink: '/collection/incoming'
      },
      {
        id: 'dailyCollection',
        title: 'Daily',
        icon: <Circle size={12} />,
        navLink: '/collection/daily'
      },
      {
        id: 'MLCBCollection',
        title: 'MLCB Payment List',
        icon: <Circle size={12} />,
        navLink: '/collection/mlcb'
      }
    ]
  }
]
