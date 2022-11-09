// ** Navigation imports
// import apps from './apps'
// import pages from './pages'
// import forms from './forms'
// import tables from './tables'
// import others from './others'
// import charts from './charts'
// import dashboards from './dashboards'
// import uiElements from './ui-elements'

import home from './home'
import applications from './applications'
import collections from './collections'
import loans from './loans'
import clients from './clients'
import journals from './journals'
import accounts from './accounts'
import reports from './reports'
import administrations from './administrations'

// ** Merge & Export
export default [
  ...home, 
  ...applications, 
  ...collections, 
  ...loans, 
  ...clients, 
  ...journals, 
  ...accounts, 
  ...reports, 
  ...administrations
  // ...dashboards, 
  // ...apps, 
  // ...pages, 
  // ...uiElements, 
  // ...forms, 
  // ...tables, 
  // ...charts, 
  // ...others
]
