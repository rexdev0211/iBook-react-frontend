// ** Icons Import
import { Airplay, Circle } from 'react-feather'

export default [
  {
    id: 'applications',
    title: 'Application',
    icon: <Airplay size={20} />,
    children: [
      {
        id: 'newApplication',
        title: 'New',
        icon: <Circle size={12} />,
        navLink: '/application/new'
      },
      {
        id: 'listingApplication',
        title: 'Listing',
        icon: <Circle size={12} />,
        navLink: '/application/listing'
      }
    ]
  }
]
