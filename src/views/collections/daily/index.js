// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Custom Components
// import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
// import classnames from 'classnames'
import { Row, Col, Card, CardHeader, CardTitle } from 'reactstrap'

// ** Demo Components
import CollectionDailyTable from './CollectionDailyTable'

// ** Calendar App Component Imports
import Calendar from './Calendar'
// import SidebarLeft from './SidebarLeft'
// import AddEventSidebar from './AddEventSidebar'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { fetchEvents, selectEvent, updateEvent } from './store'

// ** Styles
import '@styles/react/apps/app-calendar.scss'

// ** CalendarColors
const calendarsColor = {
  Business: 'primary',
  Holiday: 'success',
  Personal: 'danger',
  Family: 'warning',
  ETC: 'info'
}

const CollectionDaily = () => {
  const date = (new Date()).toDateString()
  // ** Variables
  const dispatch = useDispatch()
  const store = useSelector(state => state.calendar)

  // ** states
  const [calendarApi, setCalendarApi] = useState(null)
  const [addSidebarOpen, setAddSidebarOpen] = useState(false)
  // const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)

  // ** Hooks
  const [isRtl] = useRTL()

  // ** AddEventSidebar Toggle Function
  const handleAddEventSidebar = () => setAddSidebarOpen(!addSidebarOpen)

  // ** LeftSidebar Toggle Function
  const toggleSidebar = val => setLeftSidebarOpen(val)

  // ** Blank Event Object
  const blankEvent = {
    title: '',
    start: '',
    end: '',
    allDay: false,
    url: '',
    extendedProps: {
      calendar: '',
      guests: [],
      location: '',
      description: ''
    }
  }

  // // ** refetchEvents
  // const refetchEvents = () => {
  //   if (calendarApi !== null) {
  //     calendarApi.refetchEvents()
  //   }
  // }

  // ** Fetch Events On Mount
  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars))
  }, [])

  return (
    <Fragment>
      <Breadcrumbs title='Daily Collection' data={[{ title: 'Collection' }, { title: 'Daily' }]} />
      <Row>
        <Col sm='12'>
          <Card className='card-snippet'>
            <Calendar
              isRtl={isRtl}
              store={store}
              dispatch={dispatch}
              blankEvent={blankEvent}
              calendarApi={calendarApi}
              selectEvent={selectEvent}
              updateEvent={updateEvent}
              toggleSidebar={toggleSidebar}
              calendarsColor={calendarsColor}
              setCalendarApi={setCalendarApi}
              handleAddEventSidebar={handleAddEventSidebar}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <Card className='card-snippet'>
            <CardHeader>
              <CardTitle tag='h4'>{date}</CardTitle>
            </CardHeader>
            <CollectionDailyTable />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CollectionDaily
