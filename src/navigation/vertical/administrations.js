// ** Icons Import
import { Database, Tag, Key, Circle } from 'react-feather'

export default [
  {
    header: 'Administration'
  },
  {
    id: 'administrationsManagement',
    title: 'Management',
    icon: <Database size={20} />,
    children: [
      {
        id: 'administrationCompany',
        title: 'Company Management',
        icon: <Circle size={12} />,
        navLink: '/administration/company'
      },
      {
        id: 'administrationFee',
        title: 'Fee Management',
        icon: <Circle size={12} />,
        navLink: '/administration/fee'
      }
    ]
  },
  {
    id: 'administrationsMaster',
    title: 'Master',
    icon: <Tag size={20} />,
    children: [
      {
        id: 'administrationCompany',
        title: 'Company Management',
        icon: <Circle size={12} />,
        navLink: '/administration/company'
      },
      {
        id: 'administrationFee',
        title: 'Fee Management',
        icon: <Circle size={12} />,
        navLink: '/administration/fee'
      }
    ]
  },
  {
    id: 'administrationsSecurity',
    title: 'Security',
    icon: <Key size={20} />,
    children: [
      {
        id: 'administrationCompany',
        title: 'Company Management',
        icon: <Circle size={12} />,
        navLink: '/administration/company'
      },
      {
        id: 'administrationFee',
        title: 'Fee Management',
        icon: <Circle size={12} />,
        navLink: '/administration/fee'
      }
    ]
  }
]
