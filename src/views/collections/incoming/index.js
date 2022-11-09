// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import Select from 'react-select'
import { Row, Col, Card, CardHeader, Label, Button} from 'reactstrap'
import Flatpickr from 'react-flatpickr'

// ** Icons Imports
import { Check } from 'react-feather'

// ** Demo Components
import CollectionIncomingTable from './CollectionIncomingTable'

// ** Utils
import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import CollectionDaily from '../daily'

const CollectionIncoming = () => {
  const [fromDatePicker, setFromDatePicker] = useState(new Date())
  const [toDatePicker, setToDatePicker] = useState(new Date())

  const accountOptions = [
    { value: '0', label: 'All' },
    { value: '1', label: 'Cash' },
    { value: '2', label: 'Accountant' },
    { value: '2', label: 'CIMB' },
    { value: '2', label: 'PL DBS' },
    { value: '2', label: 'Goodwill Book' },
    { value: '2', label: 'Bad Dept Book' },
    { value: '2', label: 'Bad Dept Recovery' }
  ]
  
  const employeeOptions = [
    { value: '0', label: 'All' },
    { value: '1', label: '019 - Adam' },
    { value: '2', label: '023 - Raymond Choo' },
    { value: '3', label: '024 - Serene Koh' },
    { value: '4', label: '006 - Xie Yanshan' },
    { value: '5', label: 'Goodwill Book' },
    { value: '6', label: '025 - BK Ang' },
    { value: '7', label: '036 - Kevin Tan' }
  ]
  
  const branchOptions = [{ value: '0', label: 'All(Branch)' }]
  
  const ledgerOptions = [
    { value: '0', label: 'All(Loan Status)' },
    { value: '1', label: 'LOD' },
    { value: '2', label: 'SD' },
    { value: '3', label: 'MIA' },
    { value: '4', label: 'BANKRUPT' }
  ]
    
  return (
    <Fragment>
      <Breadcrumbs title='Incoming Collection' data={[{ title: 'Collection' }, { title: 'Incoming' }]} />
      <Row>
        <Col sm='12'>
          <Card className='card-snippet'>
            <CardHeader>
              <Row style={{ width: '100%' }}>
                <Label sm='1' className='form-label' style={{ textAlign: 'right' }}>
                  From/To:
                </Label>
                <Col>
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
                <Col>
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
                <Col>
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    defaultValue={accountOptions[0]}
                    options={accountOptions}
                    isClearable={false}
                  />
                </Col>
                <Col>
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    defaultValue={employeeOptions[0]}
                    options={employeeOptions}
                    isClearable={false}
                  />
                </Col>
                <Col>
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    defaultValue={branchOptions[0]}
                    options={branchOptions}
                    isClearable={false}
                  />
                </Col>
                <Col>
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    defaultValue={ledgerOptions[0]}
                    options={ledgerOptions}
                    isClearable={false}
                  />
                </Col>
                <Col>
                  <Button.Ripple color='success'>
                    <Check size={16} />
                    <span className='align-middle ms-25'>Submit</span>
                  </Button.Ripple>
                </Col>
              </Row>
            </CardHeader>
            <CollectionIncomingTable />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CollectionIncoming
