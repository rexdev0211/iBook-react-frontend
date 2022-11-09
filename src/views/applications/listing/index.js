// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Demo Components
import ApplicationListingTable from './ApplicationListingTable'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const ApplicationListing = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Application List' data={[{ title: 'Application' }, { title: 'List' }]} />
      <Row>
        <Col sm='12'>
          <ApplicationListingTable />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ApplicationListing
