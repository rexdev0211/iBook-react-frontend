// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col, Card, CardHeader, Label, Button } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

// ** Icons Imports
import { Check } from 'react-feather'

// ** Demo Components
import CollectionMLCBTable from './CollectionMLCBTable'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const CollectionMLCB = () => {
  const [fromDatePicker, setFromDatePicker] = useState(new Date())
  const [toDatePicker, setToDatePicker] = useState(new Date())

  return (
    <Fragment>
      <Breadcrumbs title='MLCB Payment List' data={[{ title: 'Collection' }, { title: 'MLCB Payment List' }]} />
      <Row>
        <Col sm='12'>
          <Card className='card-snippet'>
            <CardHeader>
              <Row style={{ width: '100%' }}>
                <Label sm='1' className='form-label'>
                  From/To:
                </Label>
                <Col sm='2'>
                  <Flatpickr
                    value={fromDatePicker}
                    className='form-control'
                    onChange={date => setFromDatePicker(date)}
                    options={{
                      altInput: true,
                      altFormat: 'F j, Y',
                      dateFormat: 'Y-m-d'
                    }}
                  />
                </Col>
                <Col sm='2'>
                  <Flatpickr
                    value={toDatePicker}
                    className='form-control'
                    onChange={date => setToDatePicker(date)}
                    options={{
                      altInput: true,
                      altFormat: 'F j, Y',
                      dateFormat: 'Y-m-d'
                    }}
                  />
                </Col>
                <Col sm='2'>
                  <Button.Ripple color='success'>
                    <Check size={16} />
                    <span className='align-middle ms-25'>Submit</span>
                  </Button.Ripple>
                </Col>
              </Row>
            </CardHeader>
            <CollectionMLCBTable />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CollectionMLCB
